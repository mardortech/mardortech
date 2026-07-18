import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for contact form
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message:\n${message}`);
    console.log('-----------------------------------');

    return res.json({ success: true, message: 'Message sent successfully.' });
});

const isProd = process.env.NODE_ENV === 'production';
const staticPath = isProd ? path.join(process.cwd(), 'dist', 'public') : process.cwd();

// Serve static files
app.use(express.static(staticPath));

// Fallback to index.html for unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
