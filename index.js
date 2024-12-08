const express = require("express");
const app = express();
const URL = require("./model/url");
const urlRoute = require("./routes/url");
// express.use({express})

//Get Request
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

app.use(express.json());
app.use("/url", urlRoute);

const PORT = 8001;
app.listen(PORT, () =>
  console.log("Server is me and started at port http://localhost:" + PORT)
);
