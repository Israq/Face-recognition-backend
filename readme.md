# Face Recognition API (Backend)

REST API for an AI-powered face detection application. Handles user authentication, entry tracking, and secure image proxying.

---

## Features

- **JWT Authentication** — Persistent login with token-based auth
- **User Management** — Register, signin, profile retrieval
- **Entry Tracking** — One count per unique image to prevent duplicates
- **Image Proxy** — Fetches external images server-side to bypass CORS
- **PostgreSQL** — Relational database with transaction support
- **Docker Support** — Containerized deployment ready

---

## Tech Stack

| Category  | Technology              |
| --------- | ----------------------- |
| Runtime   | Node.js 22              |
| Framework | Express.js              |
| Database  | PostgreSQL              |
| Auth      | JWT + bcrypt            |
| Container | Docker + Docker Compose |

---

## Quick Start

### Docker (Recommended)

```bash
docker-compose up -d
```

### Manual

```bash
git clone https://github.com/Israq/Face-recognition-backend.git
cd Face-recognition-backend
npm install
# Create .env with DATABASE_URL and PORT=3001
node server.js
```

---

## Environment Variables

```
DATABASE_URL=postgresql://user:password@host:5432/dbname
PORT=3001
```

---

## API Endpoints

| Method | Endpoint            | Description                        |
| ------ | ------------------- | ---------------------------------- |
| POST   | `/signin`           | Authenticate user, returns JWT     |
| POST   | `/register`         | Create new account                 |
| GET    | `/verify-token`     | Validate JWT, return user          |
| GET    | `/profile/:id`      | Get user profile                   |
| PUT    | `/image`            | Increment entry count              |
| GET    | `/proxy-image?url=` | Fetch external image (CORS bypass) |
| GET    | `/setup`            | Create database tables             |
| GET    | `/add-entries`      | Add entries column                 |

---

## Project Structure

```
├── controllers/
│   ├── signin.js        # JWT authentication
│   ├── register.js      # User registration
│   ├── image.js         # Entry count update
│   ├── profile.js       # User profile
│   └── setup.js         # Database table creation
├── server.js            # Express server entry point
├── Dockerfile
├── .node-version
└── package.json
```

---

## Deployment (Render)

| Config        | Value                  |
| ------------- | ---------------------- |
| Runtime       | Node                   |
| Build Command | `yarn`                 |
| Start Command | `node server.js`       |
| Node Version  | 22                     |
| Environment   | `DATABASE_URL`, `PORT` |

---

## Troubleshooting

| Issue                     | Solution                                                          |
| ------------------------- | ----------------------------------------------------------------- |
| Register fails            | Use a new email; duplicate key means email exists                 |
| Database connection error | Use external URL locally, internal URL on Render                  |
| Pool timeout              | Added `pool: { min: 0, max: 3 }` in knex config                   |
| Port already in use       | Stop other Node processes or change PORT in .env                  |
| SSL error                 | Use `ssl: { rejectUnauthorized: false }` for external connections |

---

## Author

**Syed Ragib Israq**

- [GitHub](https://github.com/Israq)
- [LinkedIn](https://www.linkedin.com/in/syed-ragib-israq-profile/)
- [Portfolio](https://israq-portfolio.onrender.com/)
