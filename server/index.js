import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import App from "../src/App";
import ReactDOMServer from "react-dom/server";

// React3
// Hello worldを表示
// const express = require("express");
// const app = express();
// const port = 9000;

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// React4,5
const app = express();
const port = 9000;

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("*", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve(__dirname, "../build/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    const html = data.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    res.status(200).send(html);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
