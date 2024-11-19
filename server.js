const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const FINNHUB_API_KEY = 'YOUR_API_KEY';

app.get('/news/:symbol', async (req, res) => {
    const stockSymbol = req.params.symbol;
    const url = `https://finnhub.io/api/v1/news?symbol=${stockSymbol}&token=${FINNHUB_API_KEY}`;
    
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching news.');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
