const express = require('express')
const app = express()
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Include dotenv if you're using environment variables
require('dotenv').config();

const newsApiUrl = process.env.URL

// Route to fetch news data from the API
app.get('/api/news', async (req, res) => {
    try {
        const response = await fetch(newsApiUrl);
        const data = await response.json();
        res.json(data); // Send the fetched news data back to the frontend
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching news data'); // Handle errors appropriately
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});