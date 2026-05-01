# Raju Gadiraju — Enterprise Architecture Media Kit

- `data.js` — **all your content** (edit this to update the portfolio)
- `index.html` — the template (never needs editing, unless changing theme colors)
- `raju_media_kit.pdf` — your downloadable resume/media kit file
- `Artifacts/` — folder containing your profile photo and company logos

---

## Step 1: Host on GitHub

1. Go to **github.com** → click **+** → **New repository**
2. Name it `gadiraju-media-kit`, keep **Public**, click **Create**
3. Click **uploading an existing file** → drag `index.html`, `data.js`, `README.md`, your `.pdf`, and the `Artifacts` folder → click **Commit changes**

---

## Step 2: Connect Netlify (Auto-Deploy)

1. Go to **netlify.com** → click **Log in** (or Sign up with GitHub)
2. Authorize Netlify to access your GitHub account
3. Once logged in, click **Add new site** → **Import an existing project**
4. Click **GitHub** → select your `gadiraju-media-kit` repo
5. Leave all build settings blank (no build command, no publish directory — it's a static site)
6. Click **Deploy site**
7. Go to **Site configuration** → **Change site name** → type `gadiraju-enterprise-arch-media-kit` → **Save**
8. Your site is now live at: **`https://gadiraju-enterprise-arch-media-kit.netlify.app/`**

---

## How to Update Content

1. Go to your repo on **GitHub**
2. Click **`data.js`**
3. Click the **pencil icon** (edit)
4. Change whatever text, dates, or details you need
5. Click **Commit changes**
6. Netlify auto-deploys in ~30 seconds — no manual deploy needed!

You almost never need to touch `index.html`.

---

## 📌 How to Add New Content (Snippets)

If you need to add new skills, papers, or update your PDF, use these exact formats in your `data.js` file. **Make sure to always include the comma `,` at the end of your new blocks!**

### 1. How to Add a New Skill
Find the correct category in the `skills` array (e.g., "Agentic AI & RAG") and add your new skill wrapped in quotes to the `items` list.
```javascript
{ 
    cat: "Agentic AI & RAG", 
    items: [
        "LangGraph", 
        "LangChain", 
        "CrewAI", 
        "YOUR NEW SKILL HERE" // <--- Add here
    ] 
},
