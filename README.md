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

### 1. The Hero Section
To update the intro, edit the `hero` object at the very top:
```javascript
hero: {
    name: "Raju P. Gadiraju",
    title: "Enterprise Architect: Healthcare, Finance & AI",
    tagline: "Bridging the gap between complex business needs and scalable technology.",
    bio: "Your long bio here. Use <br><br> to create paragraph breaks.",
    photoSrc: "uploaded:image_b5e57c.jpg" // Change if uploading a new photo
},
```

### 2. The Contact & PDF Link
To update your contact info or swap out the PDF, edit the `contact` object:
```javascript
contact: {
    email: "gadiraju@ieee.org",
    phone: "813-378-6199",
    linkedinUrl: "[https://linkedin.com/in/pgadiraj](https://linkedin.com/in/pgadiraj)",
    linkedinDisplay: "[linkedin.com/in/pgadiraj](https://linkedin.com/in/pgadiraj)",
    location: "Fremont, CA & Erie, PA",
    mediaKitLink: "raju_media_kit.pdf" // EXACT filename of the uploaded PDF
},
```

### 3. Expertise / Services
To add a new service, add this block to the `services: []` array:
```javascript
{
    icon: "🏗️", 
    title: "New Expertise Title",
    description: "A 2-3 sentence description of your capabilities."
},
```

### 4. Technical Toolkit (Skills)
To add a new category of skills, add this block to the `skills: []` array:
```javascript
{
    cat: "Category Name",
    items: [
        "Skill 1", 
        "Skill 2", 
        "Skill 3" // Notice: No comma on the very last item in the list
    ]
},
```

### 5. Professional Experience (Timeline)
To add a new job, add this block to the TOP of the `resume: []` array (most recent first):
```javascript
{
    role: "Your Job Title",
    company: "Company Name",
    date: "Month Year – Month Year (or Present)",
    logo: "Artifacts/company_logo.png", // Or use "placeholder-logo.png"
    details: [
        "First bullet point detailing your achievements.",
        "Second bullet point detailing technical scope.",
        "Third bullet point detailing business impact."
    ]
},
```

### 6. Case Studies
To add a new case study, add this block to the `caseStudies: []` array:
```javascript
{
    title: "Project/Architecture Title",
    category: "INDUSTRY · DOMAIN",
    context: "Client Type (e.g., Fortune 500 Bank)",
    scale: "Size metric (e.g., 10,000+ users)",
    duration: "Timeframe (e.g., 6 months)",
    problem: "Description of the challenge and what you built.",
    solution: "The exact business outcome or ROI."
},
```

### 7. Research & Publications
To add a new paper, add this block to the TOP of the `research: []` array:
```javascript
{
    title: "Full Title of the Paper or Article",
    venue: "Conference or Journal Name",
    date: "Month Year", 
    doi: "10.1109/EXAMPLE.123", // Optional: Triggers the clickable link
    image: "image_filename.png", // Optional: Add diagram if applicable
    description: "A short abstract or summary of the research."
},
```

### 8. Engagement Model
To add a new workflow step, add this block to the `engagements: []` array:
```javascript
{
    step: "04", // The large background number
    type: "Name of the phase",
    model: "FIXED SCOPE / ONGOING",
    details: "Description of how this engagement phase works."
}
```

---

## 🎨 Changing Theme Colors

This is the only setting located inside `index.html`. Search near the top of the file for `:root {` and edit the hex codes:
```css
:root {
    --bg-body: #FDFCF9;      /* The main pearl/white background */
    --bg-beige: #F3EFE7;     /* The alternating beige section background */
    --text-main: #111111;    /* Primary dark text (Charcoal) */
    --text-muted: #4A4A4A;   /* Secondary text (Gray) */
    --border-light: #E3DED5; /* Divider lines */
}
```

---

## ⚠️ Troubleshooting

- **The Blank Screen of Death:** If the website suddenly turns completely white after a commit, it means a comma `,` or a quotation mark `"` was missed or accidentally deleted in `data.js`. Check the syntax of the most recent commit.
- **Undoing Mistakes:** If something breaks, go to `data.js`, click **History** in the top right, view the code before the error, and revert the changes.
- **Images/PDFs are Broken:** Ensure the filenames in `data.js` match the files uploaded to GitHub *exactly* (including capital letters, spaces, and the `.pdf` / `.png` extensions). Linux servers (Vercel) are strictly case-sensitive.
