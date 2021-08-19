const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  entry: path.join(__dirname, "script.js"),
  mode: "production",
};
