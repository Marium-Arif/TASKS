# 🌐 Full Stack Development Tasks

## Task 1:
## 📘 Overview
This project is part of my **Full Stack Development Internship Task 1**.  
It includes a simple **HTML webpage** that introduces me, lists my skills, and provides contact information.

## 🧩 Contents
- `index.html` — Main webpage file
- `TASK_1.doc` —  Document contains all written answers to questions
  
---

## Task 2:
**Overview:**  
Created a **basic Full Stack Web Application** with a frontend form, backend server, and MySQL database to store submissions.

**Frontend:**  
- HTML form with Name, Email, Message  
- Styled with CSS  
- JS validation for form inputs  

**Backend (Node.js + Express):**  
- `server.js` handles:
  - `GET /` → Serve HTML page  
  - `POST /submit` → Save form data to database  

**Database:**  
- MySQL via XAMPP / phpMyAdmin  
- Table: `contacts`  
- Fields: `id`, `name`, `email`, `message`  

**Commands Used:**  
```bash
npm init -y
npm install express cors mysql2
node server.js
