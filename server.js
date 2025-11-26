const express = require("express");
const app = express();

// Main route
app.get("/", (req, res) => {
    res.send(`
        <h1>My Node.js Application</h1>
        <p><strong>Full Name:</strong> Shiela Mae Gragasin</p>
        <p><strong>Class Section:</strong> SM-4101 </p>
        <p><strong>Inspirational Quote:</strong> "The best things in life often come after learning to stand on your own."</p>
    `);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});
