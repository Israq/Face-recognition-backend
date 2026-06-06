# Artificial Intelligence Based Face Recognition App (Backend)

A Full Stack AI-based Face Recognition app. Users can upload any royalty-free image from the internet and the app will identify and locate human faces in the image — all running locally in the browser with no external API costs.

---

## What the App Does

1. Register new user.
2. Track user rank based on how many times the app has been used.
3. Authenticate user during login and restore rank.
4. Upload image link from the internet (royalty-free).
5. Identify human face position in the image using **face-api.js** (runs in-browser, no API keys, no limits).
6. Update the user's rank after each detection.

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, HTML5, CSS3, Tachyons, face-api.js |
| **Backend** | Node.js, Express |
| **Database** | PostgreSQL |
| **AI/ML** | face-api.js (TensorFlow.js-based, runs in browser) |
| **Tools** | Git, Postman, RESTful API |

---

## Why face-api.js Over Clarifai?

| Feature | Clarifai | face-api.js |
|---------|----------|-------------|
| **Cost** | Paid after free credits | Completely free |
| **API Key** | Required | Not needed |
| **Limits** | Credit-based | Unlimited |
| **Processing** | Server-side (API call) | Client-side (browser) |
| **Privacy** | Image sent to external server | Image stays on user's device |
| **Offline** | No | Yes (after initial model download) |

---

## Prerequisites

- Node.js (v16 or higher, recommended v22)
- PostgreSQL database (local or cloud)
- Modern browser (Chrome/Firefox/Edge)

---

## Run Locally

### 1. Clone and Run the Frontend

```bash
git clone https://github.com/Israq/Face-recontion-front-end.git
cd Face-recontion-front-end
npm install
npm install face-api.js
npm start
