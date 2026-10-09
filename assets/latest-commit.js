(() => {
  'use strict';
  // Query the same main-branch history shown on GitHub's commits page.
  const api = 'https://api.github.com/repos/xcat-studio/token';
  const link = document.querySelector('[data-latest-commit]');
  if (!link) return;

  async function get(path) {
    const response = await fetch(`${api}${path}`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
    return response.json();
  }

  // GitHub uses both legacy commit statuses and check runs; inspect both.
  async function passed(sha) {
    const [status, first] = await Promise.all([
      get(`/commits/${sha}/status`),
      get(`/commits/${sha}/check-runs?filter=latest&per_page=100&page=1`)
    ]);
    // Fetch every check page so a failure beyond the first 100 cannot be missed.
    const runs = [...first.check_runs];
    for (let page = 2; runs.length < first.total_count; page++) {
      const next = await get(`/commits/${sha}/check-runs?filter=latest&per_page=100&page=${page}`);
      if (!next.check_runs.length) throw new Error('Incomplete GitHub check results');
      runs.push(...next.check_runs);
    }
    // No legacy statuses is normal for Actions, but an entirely unchecked commit
    // must not qualify. Require explicit success for every available result.
    const hasStatuses = status.total_count > 0;
    return (hasStatuses || runs.length > 0) &&
      (!hasStatuses || status.state === 'success') &&
      runs.every(run => run.status === 'completed' && run.conclusion === 'success');
  }

  // Scan newest first and skip pending or failed revisions until one passes.
  async function latestPassed() {
    for (let page = 1; ; page++) {
      const commits = await get(`/commits?sha=main&per_page=20&page=${page}`);
      for (const commit of commits) {
        if (!/^[a-f0-9]{40}$/.test(commit.sha)) throw new Error('Invalid GitHub commit hash');
        if (await passed(commit.sha)) return commit.sha;
      }
      if (commits.length < 20) throw new Error('No passing commit found');
    }
  }

  // This reports the latest passing remote commit, not the local HTML revision.
  latestPassed().then(sha => {
    link.href = `https://github.com/xcat-studio/token/commit/${sha}`;
    link.textContent = `Latest passed: ${sha.slice(0, 7)}`;
    link.title = `Latest main commit with all checks passed: ${sha}`;
    link.setAttribute('aria-label', link.title);
    document.querySelector('meta[name="latest-successful-commit"]').content = sha;
  }).catch(() => {
    // Keep the history link usable if GitHub is unavailable or rate-limits requests.
    link.textContent = 'Commit status unavailable';
    link.title = 'View commit checks on GitHub';
  });
})();
