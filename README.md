## 📝 StackEdit Persian Helper

A lightweight Chrome extension to make writing Persian (Farsi) and English together much easier inside [Stackedit.io](https://stackedit.io/app#). It improves bidirectional typing, spacing, and preview styling so mixed Persian/English documents look correct and are easier to author.

👉 **Note:** This repository contains the extension source files: `background.js`, `content.js`, `manifest.json`, and `style.css`.

## ✨ Features
- 🔁 Improves bidirectional text rendering for Persian and English in preview areas.
- 🎨 Adds CSS rules to better style Persian text in previews (RTL fixes, line-height, margins).
- ⚡ Lightweight and built for use in Chrome's Developer (unpacked) mode.

## 📁 Files included
- `manifest.json` — Extension manifest and permissions.
- `background.js` — Background script (if used).
- `content.js` — Content script injected into pages to adjust behavior and classes.
- `style.css` — CSS used to style preview sections and improve readability.

## 🚀 Install & Use (Developer / Unpacked mode)
1. Open Chrome and navigate to the Extensions page: `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top-right).
3. Click **Load unpacked** (🧩).
4. In the file chooser, select the extension folder on your machine.
5. The extension will appear in the list. If it shows errors, click **Details** and view **Errors** for troubleshooting.

Optional: open the Extensions page from PowerShell:

```powershell
Start-Process "chrome.exe" "chrome://extensions/"
```

## 🧪 Testing & Usage
- Open [Stackedit.io](https://stackedit.io/app#)
- Make sure the extension is enabled at `chrome://extensions`.
- Now you can test it! 🎉