# 🩺 Prescripto

**Prescripto** is a full-stack medical appointment booking and management system that connects patients and doctors through a seamless web interface.  
It enables users to register, book appointments, manage profiles, and store medical history securely.

---

## 📂 Project Structure

```
Prescripto/
│
├── admin/          # Admin panel for managing doctors, appointments, etc.
│
├── backend/        # Node.js + Express.js server with MongoDB, JWT, Cloudinary, etc.
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── package.json
│
├── frontend/       # React.js frontend for patients and doctors
│   ├── src/
│   ├── package.json
│
└── README.md
```

---

## 🚀 Tech Stack

**Frontend:** React.js, Axios, TailwindCSS / CSS  
**Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT Authentication  
**Image Storage:** Cloudinary  
**Deployment:** Render (Backend), Vercel/Netlify (Frontend), MongoDB Atlas (Database)

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/suhanigupta786/Prescripto.git
cd Prescripto
```

### 2️⃣ Install Dependencies

**For Backend**
```bash
cd backend
npm install
```

**For Frontend**
```bash
cd ../frontend
npm install
```

**(Optional) For Admin**
```bash
cd ../admin
npm install
```

---

### 3️⃣ Add Environment Variables  
In your `backend` folder, create a `.env` file and add the following keys:

```bash
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

---

### 4️⃣ Run the Project Locally

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run dev
```

**Admin Panel (if used):**
```bash
cd admin
npm run dev
```

---

## 🌐 Deployment Instructions

### 🖥️ Backend (Render)
1. Push your full project to GitHub.  
2. Go to [Render Dashboard](https://render.com).  
3. Click **“New Web Service”**.  
4. Connect your repository.  
5. Under **Root Directory**, enter:
   ```
   backend
   ```
6. Add **Environment Variables** (same as `.env`).  
7. **Build Command:**
   ```
   npm install
   ```
   **Start Command:**
   ```
   npm start
   ```
8. Deploy ✅

---

### 💻 Frontend (Vercel / Netlify)
1. Go to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).  
2. Import your GitHub repo.  
3. Set Root Directory to `frontend`.  
4. Build Command:
   ```
   npm run build
   ```
   Publish Directory:
   ```
   dist
   ```
5. Deploy ✅

---

## 🧠 Proposal (Project Idea Overview)

**Problem:**  
Patients often face difficulty finding trusted doctors and managing appointments efficiently. Clinics and hospitals also struggle with scheduling and digital record management.

**Solution:**  
Prescripto simplifies this process by providing:
- Secure patient-doctor registration  
- Appointment scheduling and cancellation  
- Medical history management  
- Cloud-based image & document storage  
- Admin dashboard for monitoring all activities  

**Outcome:**  
An accessible, scalable, and secure digital healthcare management solution.

---

## 📜 Commands Summary

| Task | Command |
|------|----------|
| Clone Repository | `git clone <repo-url>` |
| Install Backend Dependencies | `cd backend && npm install` |
| Start Backend | `npm start` |
| Install Frontend Dependencies | `cd frontend && npm install` |
| Run Frontend | `npm run dev` |
| Deploy Backend (Render) | Build: `npm install` <br> Start: `npm start` |
| Deploy Frontend (Vercel/Netlify) | Build: `npm run build` <br> Publish: `dist` |

---

## ✨ Contributors
👩‍💻 **Suhani Gupta** – Full Stack Developer, Designer, and Project Lead  
