const express = require("express");
const app = express();
const URL = require("./model/url");
const urlRoute = require("./routes/url");
const path = require("path");
const staticRouter = require("./routes/staticRouter");
// express.use({express})

// // //Get Request
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

//Setting Up Embedded Java Script to render html Page from server
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute);
app.use("/", staticRouter);

const PORT = 8001;
app.listen(PORT, () =>
  console.log("Server is me and started at port http://localhost:" + PORT)
);
