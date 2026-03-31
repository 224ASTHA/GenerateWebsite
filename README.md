# 🌐 AI-Powered Website Builder

An intelligent full-stack web application that lets users generate, edit, preview, and deploy websites using AI — all from a simple prompt.

---

## 🚀 Features

### 🔐 Authentication
- Email/password login and registration
- Google OAuth authentication
- Secure session management with JWT

### 🏠 Home Page
- Displays platform overview for guests
- Shows existing user projects when logged in
- Credit balance display
- Pricing section with Free, Pro, and Enterprise plans
- Stripe-integrated credit purchase flow

### 💳 Credits System
| Action | Credits Used |
|--------|-------------|
| Generate new website | 50 credits |
| Edit/modify website | 25 credits |
| Initial free plan | 100–200 credits |

Credits can be purchased via the Pricing page, which redirects to a Stripe checkout.

### 📊 Dashboard
- View all previously created projects
- One-click deploy option per project
- Click any project to open its Editor page
- **+ New Website** button to start generating

### ⚡ Generate Page
- Enter a text prompt describing the website you want
- AI generates the complete website code
- Live preview rendered side by side
- On generation, 50 credits are deducted

### ✏️ Editor Page
- **AI Chat Panel** — describe changes in natural language; AI implements them in real time
- **Live Preview** — see changes reflected instantly alongside the chat
- **View Code** — inspect and manually edit the generated code with live changes
- **Full Preview** — fullscreen view of the website
- **Deploy Button** — deploy directly from the editor
- On each AI edit, 25 credits are deducted

### 🚀 Deployment
- Deploy any project with a single click
- After deployment, a shareable link is generated
- Copy or share the link directly from the UI

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — UI framework
- **Tailwind CSS** — Styling
- **React Router** — Client-side routing
- **Axios** — API communication

### Backend
- **Node.js** — Runtime
- **Express.js** — REST API framework
- **MongoDB** — Database
- **Mongoose** — ODM

### Services & Integrations
- **Google OAuth** — Social authentication
- **Stripe** — Payment processing for credits
- **Anthropic / OpenAI API** — AI website generation and editing
- **JWT** — Authentication tokens

---

## 📁 Project Structure

```
GenerateWebsite/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Generate.jsx
│   │   │   ├── Editor.jsx
│   │   │   └── Pricing.jsx
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
└── backend/
    ├── controllers/
    ├── models/
    │   ├── User.js
    │   ├── Project.js
    │   └── Credit.js
    ├── routes/
    │   ├── auth.js
    │   ├── projects.js
    │   ├── credits.js
    │   └── deploy.js
    ├── middleware/
    ├── config/
    └── server.js
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Stripe account
- Google OAuth credentials
- AI API key (Anthropic/OpenAI)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/224ASTHA/GenerateWebsite.git
cd GenerateWebsite
```

**2. Setup Backend**
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

AI_API_KEY=your_ai_api_key
```

**3. Setup Frontend**
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

**4. Run the App**

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```

App will be running at `http://localhost:3000`

---

## 💰 Pricing Plans

| Plan | Credits | Price |
|------|---------|-------|
| Free | 100–200 | $0 |
| Pro | 1000 | $X/month |
| Enterprise | Unlimited | Custom |

Payments are processed securely via **Stripe**.

---

## 🔄 User Flow

```
Landing Page → Sign Up / Login (Google or Email)
      ↓
  Dashboard → View Projects / + New Website
      ↓
  Generate Page → Enter Prompt → AI Generates Website (−50 credits)
      ↓
  Editor Page → Chat with AI to make edits (−25 credits each)
             → View Code → Edit manually
             → Full Preview
             → Deploy → Get shareable link
```

---

## 🌍 Deployment

After clicking Deploy inside the Editor:
- The website is hosted and a unique URL is generated
- A **Share Link** is shown which can be copied or shared
- The deployed project appears in the Dashboard with a Deploy badge

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**224ASTHA** — [GitHub](https://github.com/224ASTHA)
