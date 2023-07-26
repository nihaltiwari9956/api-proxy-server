const express = require('express');
const axios = require('axios');
const app = express();

app.get('/proxy', async (req, res) => {
  try {
    // Get the URL to the backend API from the request query parameter
    const apiUrl = req.query.url;

    // Make a request to the backend API using Axios
    const response = await axios.get(apiUrl);

    // Send the response data from the backend API back to the frontend
    res.json(response.data);
  } catch (error) {
    // If there's an error, send an error response to the frontend
    res.status(500).json({ error: 'An error occurred while making the API request' });
  }
});
const port = 5000;
app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
  });