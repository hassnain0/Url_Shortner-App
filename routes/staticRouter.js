const express = require("express");
const urlModel = require("../model/url");
const router = express.Router();

router.get("/", async (req, res) => {
  const urls = await urlModel.find({});
 
  res.render("home",{
    url:urls
  });
});
module.exports = router;
