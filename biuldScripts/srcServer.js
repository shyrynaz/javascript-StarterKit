import express from "express";
import { join } from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

app.get("/", function(req, res) {
  res.sendFile(join(__dirname, "../src/index.html"));
});

app.get("/users", function(req, res) {
  res.json([
    { id: 1, firstName: "steve", lastName: "naz", email: "austin@naz" },
    { id: 2, firstName: "sam", lastName: "kibpcha", email: "sam@kibz" },
    { id: 3, firstName: "genna", lastName: "rene", email: "rene@gena" },
    { id: 4, firstName: "stevie", lastName: "nazie", email: "austino@naz" },
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
