const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json(), cors());

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
// GET roll
app.get('/roll', (req, res) => {
    console.log(req.ip)
    res.json(getRandomNumber());
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };