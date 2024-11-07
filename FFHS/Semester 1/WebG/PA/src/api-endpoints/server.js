const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Define endpoint
app.post("/jetztsenden", (req, res) => {
    const { name, email, ratingComponent, ratingDesign, feedback } = req.body;

    if (!name || !email || !ratingComponent || !ratingDesign || !feedback) {
        console.log("Validation failed: Missing fields.", { name, email, feedback });
        return res.status(400).json({ message: "Bitte alle Felder ausfüllen!" });
    }


    console.log(`Feedback received: Name - ${name}, Email - ${email}, Feedback - ${feedback}`);
    res.status(200).json({ message: "Dein Feedback wurde erfolgreich übermittelt. Da, einen Keks für dich!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
