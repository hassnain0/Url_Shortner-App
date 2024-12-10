const express = require("express");
const { generateUrl, handleGetAnalytics } = require("../controller/url");
const router = express.Router();
const { connectDb } = require("../connection");

connectDb("mongodb://localhost:27017/urlShortner").then(() => {
  console.log("Connected With MongoDb");
});
router.post("/", generateUrl);

router.get('/analytics/:shortId', handleGetAnalytics);
module.exports = router;
