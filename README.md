# 🌐 Full Stack Development Tasks

# Task 1:  

## 📘 Overview  
This project is part of my **Full Stack Development Internship Task 1**. It includes a simple **HTML webpage** that introduces me, lists my skills, and provides contact information.  

---

## 🧩 Contents  
- `index.html` — Main webpage file  
- `TASK_1.doc` — Document containing all written answers to questions  

---

# Task 2:  

## 📘 Overview  
This task involves creating a **basic Full Stack Web Application** using **HTML, CSS, JS (frontend)**, **Node.js + Express (backend)**, and a **MySQL database**. Users can submit a form, and the data is saved to the database.  

---

## 🧩 Features  

**Frontend (HTML + CSS + JS):**  
- Header with title  
- Form to submit user data (Name, Email, Message)  
- Styled using CSS  
- JS validation to ensure proper input  

**Backend (Node.js + Express):**  
- `server.js` handles form submissions  
- Express routes:  
  - `GET /` → Serve HTML page  
  - `POST /submit` → Receive form data  

**Database Connection:**  
- MySQL via XAMPP / phpMyAdmin  
- Table: `contacts`  
- Fields: `id`, `name`, `email`, `message`  

---

## 💻 Commands Used  

**Install dependencies:**  
```bash
npm init -y
npm install express cors mysql2
