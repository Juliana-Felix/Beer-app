const express = require("express");

const app = express();

const baseDir = `${__dirname}/dist/`;

app.use(express.static(`${baseDir}`));

app.get("*", (req, res) => res.sendFile("index.html", { root: baseDir }));

const port = 8080;

app.listen(port, () =>
  console.log(`Servidor subiu com sucesso em http://localhost:${port}`)
);
