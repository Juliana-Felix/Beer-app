const express = require("express");

const app = express();

app.use(express.static("./dist/bundle"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/bundle/" });
});

app.listen(process.env.PORT || 8080);
