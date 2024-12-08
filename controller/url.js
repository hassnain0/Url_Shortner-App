const shortid = require("shortid");
const urlModel = require("../model/url");

//Function that will generate Url
async function generateUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "Url is Required" });
  const shortId = shortid(8);
  await urlModel.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

async function handleGetAnalytics(req, res) {
  const shortid = req.params.shortId;
  const result = await urlModel.findOne({ shortId:shortid });
  console.log("Result",result);
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}



module.exports = {
  generateUrl,
  handleGetAnalytics,
};
