# KUSHAL EMURI // SYSTEM PORTFOLIO

A bespoke, minimalist developer portfolio engineered for Kushal Emuri (MTech Computer Science @ VIT-AP).

Designed with a high-end **Anthracite Grey, Deep Black, and Crisp Platinum White** aesthetic with a technical HUD (Heads-Up Display) navigation, live mission-control IST clock, and an active research lab section.

---

## ⚡ What's New & Included

1. **Unique Anthracite & Monochromatic Design**:
   - No generic templates: Custom Swiss/Brutalist technical layout with hairline borders, monospace indicators, and technical spec tables.
   - Dual theme support: Dark Anthracite (`#08080a`, `#151518`, `#27272a`) and Minimal Alabaster Light (`#ffffff`, `#f8f8f9`).

2. **Active Lab (Current Projects)**:
   - **Adaptive Learning Engine**: Multi-Level AI Agent Architecture with hierarchical supervisor routing, dynamic LLM orchestration, and contextual hybrid RAG.
   - **GameBoxd**: Minimalist video game backlog tracker and diary with RAWG/IGDB metadata API, player ratings, backlog telemetry, and AI discovery.

3. **Core Engineering Archive**:
   - **Fake News Detection System**: Fine-tuned BERT + Scikit-Learn NLP pipeline (87% accuracy) with real-time SQL feature verification.
   - **Automation Pipeline for SIEM, XDR & IDS**: Wazuh, Suricata, and Ansible automated cyber threat monitoring & incident mitigation.
   - **University Transport Management System**: Cloud-native serverless platform on Microsoft Azure with Python Flask and Azure Cosmos DB.
   - **Object Detection System using YOLOv5**: High-speed multi-class edge computer vision.
   - **IoT Autonomous Surveillance & Disc Robot**: Raspberry Pi + Arduino dual-controller patrol robot with telemetry.

4. **Built-in Repository Redirector System**:
   - Every active and archive project is wired with a `CONNECT REPOSITORY [ ↗ ]` or `REPO [ ↗ ]` button.
   - Currently, clicking them triggers a clean HUD notification: `[REPO LINK PENDING]`.
   - When you are ready, simply send your GitHub repository links, and they can be plugged into `REPO_REGISTRY` in `script.js` (or in the HTML attributes) in seconds!

---

## 📁 File Structure

```text
kushal-portfolio/
├── index.html        # Bespoke editorial markup & system index
├── style.css         # Minimalist anthracite & monochrome design system
├── script.js         # Redirector registry, live IST clock, domain filter & HUD
└── README.md         # Documentation & guide
```

---

## 🔗 How to Connect Your GitHub Repos Later

Open `script.js` and locate lines 11–19:

```javascript
const REPO_REGISTRY = {
  "adaptive-learning": "https://github.com/your-username/adaptive-learning-agents",
  "gameboxd": "https://github.com/your-username/gameboxd",
  "fake-news-nlp": "https://github.com/your-username/fake-news-detection",
  "siem-pipeline": "https://github.com/your-username/siem-xdr-ids-pipeline",
  "transport-platform": "https://github.com/your-username/university-transport-azure",
  "yolov5-detection": "https://github.com/your-username/yolov5-detection",
  "iot-robot": "https://github.com/your-username/iot-surveillance-robot"
};
```
Once updated, clicking the button instantly redirects visitors straight to your GitHub repositories!

---

## 🌐 Instant Free Hosting (Upload to Web)

### Method 1: Netlify Drop (Drag & Drop in 30 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `kushal-portfolio` folder directly into your browser.
3. Your portfolio is live with a free SSL certificate!

### Method 2: GitHub Pages (Free forever)
1. Create a repository on GitHub (e.g., `portfolio` or `<username>.github.io`).
2. Push these 3 files (`index.html`, `style.css`, `script.js`).
3. Under **Settings → Pages**, set Branch to `main` and Folder to `/ (root)`.
4. Your site will be online at `https://<username>.github.io/portfolio`.
