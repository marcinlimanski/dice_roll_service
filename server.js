const express = require('express');
const app = express();
const PORT = 3000; // You can change this to any available port

app.use(express.json());

function getRandomNumber() {
    min = 1
    max = 6

    // Generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();

    // Scale the random decimal to the desired range
    const randomNumber = min + randomDecimal * (max - min + 1);

    // Use Math.floor to truncate the decimal part and get an integer within the range
    return Math.floor(randomNumber);
}

// GET all items
app.get('/roll', (req, res) => {
    res.json(getRandomNumber());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
