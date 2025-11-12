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

# 🧱 Task 3

## 📘 Overview
This task builds upon **Task 2**, transforming the landing page into a **multi-page responsive portfolio website**.  
It demonstrates full integration of **frontend** and **backend** technologies while maintaining a consistent visual theme.

---

## 🧩 Enhancements & Features

### 🔹 Base
- Used the **Task 2 landing page** as the foundation.

### 🔹 Navigation Bar
- Added a top navigation bar with four links: **Home**, **About**, **Services**, and **Contact**.  
- Each link opens a separate HTML page to clearly organize content.

### 🔹 Home Section 
- Includes a **welcome heading**, short **introductory paragraph**, and a **call-to-action** button labeled “Get in Touch”.

### 🔹 Contact Form
- Added a **contact form** with input fields for **Name**, **Email**, and **Message**.  
- Includes **JavaScript validation** to ensure no empty submissions.  
- Integrated with **Node.js backend** to store form data in a **MySQL database**.

### 🔹 Styling (CSS)
- Consistent **background gradient** applied across all pages.  
- Defined **modern fonts**, **hover effects**, and **button styling** for better user interaction.  
- Clean layout with rounded containers and soft shadows for a polished look.

### 🔹 Visual Enhancements
- Added icons and a structured layout for readability.  
- Included a **footer** with **social media links** (LinkedIn, GitHub, Twitter).

### 🔹 Responsive Design
- Fully **mobile-friendly** design using CSS media queries.  
- Navigation, hero, and contact sections automatically adjust on smaller screens.  
- Maintains consistent spacing and font size across all devices.
  
---

## 💻 Commands Used  

**Install dependencies:**  
```bash
npm init -y
npm install express cors mysql2
