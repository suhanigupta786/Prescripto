# 🩺 **Prescripto – Doctor Appointment Booking System**

**Prescripto** is a full-stack medical appointment booking and management platform connecting **patients, doctors, and admins** through a seamless web interface.
Users can register, book appointments, and manage their medical profiles.
Doctors manage availability and appointments.
Admins control system-wide operations. 

---

# 🌐 **Live Demo Links**

| Module                             | Deployment | URL                                                                                              |
| ---------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| **Frontend (User Panel)**          | Render     | [https://prescripto-frontend-llch.onrender.com/](https://prescripto-frontend-llch.onrender.com/) |
| **Backend (API Server)**           | Render     | [https://prescripto-backend-9fl2.onrender.com/](https://prescripto-backend-9fl2.onrender.com/)   |
| **Admin (Admin + Doctor Panel)**   | Vercel     | [https://prescripto-likd.vercel.app/](https://prescripto-likd.vercel.app/)                       |

---

# 📂 **Project Structure**

```
Prescripto/
│
├── admin/                      # Admin + Doctor Panel (React + Tailwind)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/                    # Node.js + Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── frontend/                   # User Frontend (React + Tailwind)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 **Tech Stack**

## **Frontend (User Panel)**

* React.js
* Vite
* TailwindCSS
* Axios
* React Router
* Context API

## **Admin (Admin + Doctor Panel)**

* React.js
* TailwindCSS
* Axios
* React Router
* Context API

## **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Multer (file upload)
* Cloudinary (image/document storage)
* Razorpay (payment integration)

## **Deployment**

* Render (Frontend + Backend)
* Vercel (Admin Panel)
* MongoDB Atlas (Database)

---

# ⭐ **Main Features**

### 👨‍💼 User Features

* Register / Login
* Browse doctors
* Book appointments
* Payment via Razorpay
* Cancel appointments
* View appointment history
* Update profile
* Upload profile image

### 🧑‍⚕️ Doctor Features

* Login
* Manage profile
* Update availability
* View appointments
* Complete / cancel appointments
* Dashboard view

### 🛡️ Admin Features

* Admin login
* Add doctor
* View doctors
* Change doctor availability
* View appointments
* Cancel appointments
* Dashboard analytics

---

# 🛠️ **Core Functionalities**

* 🔐 JWT-based Authentication
* 🛂 Role-based Authorization (Admin / Doctor / User)
* 📁 File Upload using Multer
* ☁️ Cloudinary Image & Document Storage
* 💳 Razorpay Payment Gateway
* 📬 Protected Routes for All Roles
* 📊 Dashboard APIs

---

# 📡 **API Routes**

## 🛡️ **Admin Routes**

| Method | Endpoint                         | Middleware                            | Description                |
| ------ | -------------------------------- | ------------------------------------- | -------------------------- |
| POST   | `/api/admin/add-doctor`          | `authAdmin`, `upload.single("image")` | Add doctor                 |
| POST   | `/api/admin/login`               | `authAdmin`                           | Admin login                |
| POST   | `/api/admin/all-doctors`         | `authAdmin`                           | Get all doctors            |
| POST   | `/api/admin/change-availability` | `authAdmin`                           | Change doctor availability |
| GET    | `/api/admin/appointments`        | `authAdmin`                           | Get all appointments       |
| POST   | `/api/admin/cancel-appointment`  | `authAdmin`                           | Cancel appointment         |
| GET    | `/api/admin/dashboard`           | `authAdmin`                           | Dashboard data             |

---

## 👨‍⚕️ **Doctor Routes**

| Method | Endpoint                           | Middleware   | Description            |
| ------ | ---------------------------------- | ------------ | ---------------------- |
| GET    | `/api/doctor/list`                 | `authDoctor` | Public list of doctors |
| POST   | `/api/doctor/login`                | `authDoctor` | Doctor login           |
| GET    | `/api/doctor/appointments`         | `authDoctor` | View appointments      |
| POST   | `/api/doctor/complete-appointment` | `authDoctor` | Complete appointment   |
| POST   | `/api/doctor/cancel-appointment`   | `authDoctor` | Cancel appointment     |
| GET    | `/api/doctor/dashboard`            | `authDoctor` | Dashboard data         |
| GET    | `/api/doctor/profile`              | `authDoctor` | Get profile            |
| POST   | `/api/doctor/update-profile`       | `authDoctor` | Update profile         |

---

## 👤 **User Routes**

| Method | Endpoint                       | Middleware                           | Description             |
| ------ | ------------------------------ | ------------------------------------ | ----------------------- |
| POST   | `/api/user/register`           | `authUser`                           | Register                |
| POST   | `/api/user/login`              | `authUser`                           | Login                   |
| GET    | `/api/user/get-profile`        | `authUser`                           | Get profile             |
| POST   | `/api/user/update-profile`     | `upload.single('image')`, `authUser` | Update profile          |
| POST   | `/api/user/book-appointment`   | `authUser`                           | Book appointment        |
| GET    | `/api/user/appointments`       | `authUser`                           | List appointments       |
| POST   | `/api/user/cancel-appointment` | `authUser`                           | Cancel appointment      |
| POST   | `/api/user/payment-razorpay`   | `authUser`                           | Razorpay payment order  |
| POST   | `/api/user/verify-razorpay`    | `authUser`                           | Verify Razorpay payment |

---

# ⚙️ **Backend Middleware**

| Middleware      | Purpose               |
| --------------- | --------------------- |
| `authAdmin.js`  | Protect admin routes  |
| `authDoctor.js` | Protect doctor routes |
| `authUser.js`   | Protect user routes   |
| `multer.js`     | File uploads          |

---

# 🛠️ **Installation (Local Development)**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suhanigupta786/Prescripto.git
cd Prescripto
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

#### Admin

```bash
cd ../admin
npm install
```

---

# ### 3️⃣ Add Environment Variables

Below are the required environment variables for **Backend**, **Frontend**, and **Admin Panel**.

## 🔧 **Backend (`backend/.env`)**

> **Contains all sensitive keys — these stay ONLY on backend.**

```
MONGODB_URI=your_mongodb_uri

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

---

## 🎨 **Frontend (`frontend/.env`)**

> **Frontend `.env` should ONLY contain public & non-sensitive keys.**

```
VITE_BACKEND_URL=https://prescripto-backend-9fl2.onrender.com
VITE_RAZORPAY_KEY_ID=rzp_test_RkdslWsv9J6eCT
```

---

## 🛡️ **Admin Panel (`admin/.env`)**

> Admin is also a frontend → only public keys allowed.

```
VITE_BACKEND_URL=https://prescripto-backend-9fl2.onrender.com
VITE_RAZORPAY_KEY_ID=rzp_test_RkdslWsv9J6eCT
```

---

# ▶️ **Run Project Locally**

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin

```bash
cd admin
npm run dev
```

---

# 🌐 **Deployment Instructions**

## 🚀 Backend (Render)

```
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

---

## 🎨 Frontend (Render)

```
Root Directory: frontend
Build Command: npm run build
Publish Directory: dist
```

---

## 🛡️ Admin Panel (Vercel)

```
Root Directory: admin
Build Command: npm run build
Output Directory: dist
```

---

# ✨ **Maintainer**

👩‍💻 **Suhani Gupta**
Full-Stack Developer • Project Lead

---
