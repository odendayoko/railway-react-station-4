import express from "express";
import path from "path";
import React from "react";
import App from "../src/App";
import ReactDOMServer from "react-dom/server";

// React4,5
const app = express();
const port = 9000;

app.use(express.static(path.resolve(__dirname, "../dist")));

const html = ReactDOMServer.renderToString(<App />);

const responseHtml = `
  <html>
    <head>
      <title>react-station-4</title>
      <link rel="stylesheet" href="/styles.css" type="text/css"/>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/client.js"></script>
    </body>
  </html>
`;

app.get("/", (req, res) => {
  res.send(responseHtml);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
