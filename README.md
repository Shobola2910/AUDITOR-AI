# 🚛 FMCSA eRODS Audit Analyzer

AI-powered ELD log compliance tool built for **49 CFR Part 395** audits.  
Supports HOS violation detection, GPS anomaly analysis, odometer discrepancy checks, and falsification indicators.

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1 — GitHub repo yarating

```bash
# Terminal ochib, project papkasiga kiring
cd fmcsa-audit

# Git init
git init
git add .
git commit -m "Initial commit: FMCSA eRODS Audit Analyzer"

# GitHub.com da yangi repo yarating (masalan: fmcsa-audit)
# Keyin:
git remote add origin https://github.com/YOUR_USERNAME/fmcsa-audit.git
git branch -M main
git push -u origin main
```

### Step 2 — Vercel'ga import qiling

1. [vercel.com](https://vercel.com) ga kiring → **Add New Project**
2. GitHub repo'ingizni tanlang: `fmcsa-audit`
3. **Framework Preset**: `Other`
4. **Root Directory**: `/` (o'zgartirmang)
5. **Build & Output Settings** — hammasi `vercel.json` da belgilangan, o'zgartirish shart emas

### Step 3 — API Key qo'shing (MUHIM)

Vercel dashboard → **Project → Settings → Environment Variables**

| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | `sk-ant-...` (Anthropic console'dan oling) |

> **Environment**: Production, Preview, Development — hammasini belgilang

### Step 4 — Deploy

Vercel avtomatik deploy qiladi. Har `git push` da yangi deploy bo'ladi.

---

## 💻 Local Development

```bash
# Vercel CLI o'rnating
npm i -g vercel

# .env.local yarating
cp .env.example .env.local
# .env.local faylini oching va ANTHROPIC_API_KEY ni qo'shing

# Local server ishga tushiring (API + Frontend birgalikda)
vercel dev
# http://localhost:3000 da ochiladi
```

---

## 📁 Project Structure

```
fmcsa-audit/
├── public/
│   └── index.html          # Frontend (single-page app)
├── api/
│   └── analyze.js          # Vercel serverless function (Anthropic proxy)
├── vercel.json             # Vercel routing config
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📁 File Upload | CSV, XLSX, JSON, PDF, TXT — drag & drop or browse |
| 🔍 Local Analysis | GPS haversine, odometer jumps, HOS rules, speed anomalies |
| 🧠 Deep AI | Claude claude-sonnet-4-20250514 + Extended Thinking (10k budget tokens) |
| 📊 Dashboard | Risk banner, metrics, violations table, Chart.js graphs, HOS grid |
| 📄 PDF Export | Full audit report via jsPDF |
| ⬇ JSON/CSV | Raw data download |
| 🌐 Bilingual | English / Uzbek — full UI + AI response |

---

## 🔒 Security

- Anthropic API key **hech qachon frontend'ga yuklanmaydi**
- Barcha AI so'rovlar `/api/analyze` serverless function orqali o'tadi
- `.env.local` `.gitignore` da — GitHub'ga chiqmaydi

---

## 📋 FMCSA Regulations Covered

- **49 CFR §395.3** — Maximum driving time (11/14/70hr rules)
- **49 CFR §395.8** — Driver's record of duty status
- **49 CFR §395.22** — ELD performance standards  
- **49 CFR §395.24** — Unassigned driving time
- **49 CFR §395.26** — ELD data requirements
- **49 CFR §385.5** — Safety management controls

---

## 🛠 Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS (no build step needed)
- **Backend**: Vercel Serverless Functions (Node.js)
- **AI**: Anthropic Claude claude-sonnet-4-20250514 + Extended Thinking
- **Charts**: Chart.js 4.4.1
- **PDF**: jsPDF 2.5.1
- **Excel**: SheetJS (xlsx) 0.18.5
- **Hosting**: Vercel (free tier supported)
