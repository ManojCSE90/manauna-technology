# Manauna Technology - Official Organization Web Presence

This repository hosts the official organization web portal for **Manauna Technology**, structured to satisfy all Google Organization verification guidelines, including:
- **Google Play Console Developer Organization Accounts** (DUNS verification, contact verification, public developer profile requirements)
- **Google Cloud & OAuth Consent Verification** (Google API Services User Data Policy, Limited Use disclosure, Privacy Policy, Terms of Service)
- **Google Search Console & Webmaster Indexing** (sitemap.xml, robots.txt, schema.org Organization JSON-LD markup, google-site-verification)
- **Security & Vulnerability Standards** (RFC 9116 `.well-known/security.txt`)

---

## 🌐 Live URL
- **GitHub Pages:** `https://manojcse90.github.io/manauna-technology/`
- *(Custom Domain support ready: add your domain in GitHub Pages settings or CNAME file)*

---

## 📁 Repository Structure

```
manauna-technology/
├── index.html                   # Corporate Landing Page with Schema.org & Google verification tags
├── privacy.html                 # Comprehensive Privacy Policy (Google Play & OAuth compliant)
├── terms.html                   # Terms of Service & Legal Licensing
├── contact.html                 # Contact Us page with full corporate address, emails & phone
├── security.html                # Responsible Disclosure Policy & Security Standards
├── google-site-verification.html# Google Search Console HTML verification file template
├── robots.txt                   # Search crawler directives allowing Googlebot
├── sitemap.xml                  # XML sitemap with all active URLs
├── .well-known/
│   └── security.txt             # RFC 9116 security contact declaration
├── css/
│   └── style.css                # Responsive, modern corporate stylesheet
└── js/
    └── main.js                  # Navigation & interactive form handlers
```

---

## 🔍 How to Complete Google Verification

### 1. Google Search Console & Domain Verification
You can verify site ownership in Google Search Console using either of two methods:

- **Method A: HTML Meta Tag (Recommended)**
  1. Open [Google Search Console](https://search.google.com/search-console).
  2. Choose **URL prefix** and enter your URL: `https://manojcse90.github.io/manauna-technology/`
  3. Select **HTML tag** under Other verification methods.
  4. Copy your verification code string (e.g. `google-site-verification=XYZ123...`).
  5. In `index.html`, replace `GOOGLE_VERIFICATION_CODE_PLACEHOLDER` on line 14 with your code.
  6. Commit and push: `git commit -am "Update Google verification tag" && git push`
  7. Click **Verify** in Search Console.

- **Method B: HTML File Upload**
  1. Download the verification HTML file from Google Search Console (e.g. `google1234567890abcdef.html`).
  2. Place it in the root of this repository.
  3. Commit and push to GitHub.
  4. Click **Verify** in Search Console.

---

### 2. Google Play Console Organization Requirements Checklist
Google Play requires organizations to provide:
- ✅ **Legal Entity Name:** Displayed as **Manauna Technology** across all pages.
- ✅ **Registered Physical Address:** Displayed on Home, Contact, and Privacy pages.
- ✅ **Official Support Email:** Verified contact email (`support@manaunatechnology.com`).
- ✅ **Telephone Number:** Visible and matching your developer registration.
- ✅ **Live Privacy Policy:** Fully articulated on `/privacy.html`, covering data collection, retention, and deletion procedures.
- ✅ **Account & Data Deletion:** Dedicated section on `/privacy.html#data-deletion`.

---

### 3. Google OAuth Verification (Cloud Console)
When submitting your OAuth consent screen for verification in Google Cloud Console:
- **App Home Page:** `https://manojcse90.github.io/manauna-technology/`
- **Application Privacy Policy link:** `https://manojcse90.github.io/manauna-technology/privacy.html`
- **Application Terms of Service link:** `https://manojcse90.github.io/manauna-technology/terms.html`
- **Authorized Domain:** `github.io` (or your custom domain)

---

## 🛠️ Customizing Company Details
To update placeholder details with your specific government registration or company address:
- Edit the company address in:
  - `index.html` (JSON-LD script & Corporate Credentials box)
  - `contact.html` (PostalAddress card & Schema)
  - `privacy.html` (Organization Information box)
  - `terms.html` (Contact section)
