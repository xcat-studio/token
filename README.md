# XCAT Studio

A responsive black-and-white website announcing **Coming Soon 2026** and providing cat story submission instructions.

Open `index.html` in a browser. No build step or dependencies are required. Deploy `index.html`, `publish.html`, and `investor-relations.html` together with the `assets` directory. The top navigation’s **Publish** link opens the dedicated submission page. **Investors** opens the company overview, strategy, corporate contacts, and important investor information.

The supplied banner and print artwork are included in `assets`. The print artwork displays in grayscale to match the theme; its original file is preserved.

The X icon links to https://x.com/xcatstudio. The GitHub icon links to https://github.com/xcat-studio. The pump.fun pill icon links to https://pump.fun/profile/xcatstudio; its SVG is sourced from https://pump.fun/pump-logomark.svg and stored locally in `assets`.

Clicking the square artwork opens a full-color template preview with a PNG download and instructions to replace X with your cat’s image. The sixteen flags in the square artwork act as subtle language buttons. They translate the announcement and page metadata, remember the selection locally, and support right-to-left Hebrew and Arabic. Text embedded in the supplied images remains part of the original artwork.

The footer provides 25 country flag buttons with matching announcement translations, including the original sixteen languages and Italian, Dutch, Polish, Ukrainian, Greek, Swedish, Danish, Finnish, and Norwegian.

## XCAT Studio — Submit Your Cat Story

**Every cat has a story.**

To submit a cat story to XCAT Studio, follow these instructions:

1. **Replace X with the cat's name.** Use the XCAT Studio image template and replace the placeholder X with the cat's name.
2. **Post on X.** Publish a post on [x.com](https://x.com/) featuring cat's image and **tag @xcatstudio** in the post.
3. **Copy your post link.** Include the direct URL to your published X post.
4. **Write cat's story.** Tell us your story using Unicode plain text.
5. **Email your submission** to [**support@xcatstudio.com**](mailto:support@xcatstudio.com) with the subject line: `XCAT Story Submission — [Cat's Name]`

### Email Format

```text
Cat's Name:
X Post URL:
Cat Story:
```

### Submission Requirements

- Plain text only (Unicode UTF-8).
- No HTML formatting.
- No attachments or binary data.
- The X post must include cat's image and tag **@xcatstudio**.
- Include the complete story directly in the email body.

**Every cat has a story.**

XCAT Studio\
[xcatstudio.com](https://xcatstudio.com/)\
[@xcatstudio](https://x.com/xcatstudio)

## Latest passing GitHub commit

`assets/latest-commit.js` reads the commits on `xcat-studio/token`'s `main` branch through GitHub's public API, newest first. It selects the first commit with successful commit statuses and completed, successful check runs. Pending, failed, skipped, neutral, and unchecked commits are not selected. It paginates commits and checks as needed.

Every page shows the short hash in its footer, links to the full GitHub commit, and stores the full hash in `<meta name="latest-successful-commit">` after loading. This is the latest passing GitHub commit, which can differ from the source revision of the page being viewed. API failures or rate limits show “Commit status unavailable” with a link to the commit history. No token or deployment configuration is required.
