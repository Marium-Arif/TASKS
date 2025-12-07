const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

const session = require('express-session');
const bcrypt = require('bcryptjs');


app.use(cors());
app.use(express.static('public')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "supersecretkey123",
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => res.redirect('/login.html'));

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/about', protect, (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', protect, (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/services', protect, (req, res) => {
  res.sendFile(__dirname + '/public/services.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

app.get('/api/services', (req, res) => {
  db.query("SELECT * FROM services", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.get("/user", (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, name: req.session.user.name });
    } else {
        res.json({ loggedIn: false });
    }
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return res.json({ success: false, message: "All fields are required" });

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err) => {
            if (err) {
                return res.json({ success: false, message: "Email already exists" });
            }
            res.json({ success: true, message: "Registration successful!" });
        }
    );
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, users) => {
        if (err || users.length === 0)
            return res.json({ success: false, message: "Invalid email or password" });

        const user = users[0];

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ success: false, message: "Incorrect password" });

        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
        };

        res.json({ success: true, message: "Login successful!" });
    });
});

function protect(req, res, next) {
    if (!req.session.user) return res.redirect("/login");
    next();
}

app.post('/submit', (req, res) => {
  if (!req.session.user)
    return res.status(403).json({ success: false, message: "Login required" });

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'Form submitted successfully!' });
  });
});

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login.html");
    });
});

const PORT = 8081;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));


