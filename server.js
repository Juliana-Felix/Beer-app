const express = require("express");
const app = express();
const { resolve } = require("path");

app.use(express.static(resolve(__dirname, "./public")));

app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Tudo funcionando direto");
});
