const express = require('express');
const app = express();
const PORT = 3000; // You can change this to any available port

app.use(express.json());

// Sample data
let dice = [
    { face: 1, name: '1' },
    { face: 2, name: '2' },
];

// GET all items
app.get('/roll', (req, res) => {
    res.json(dice);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
