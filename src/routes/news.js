const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("", async (req, res) => {
    try {
        const newsApi = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.API_KEY}`
        );
        res.render("news", {
            newsData: newsApi.data.articles,
            title: "Japan Headlines",
        });
    } catch (error) {
        if (error) {
            console.error("Error", error.message);
        }
    }
});

module.exports = router;
