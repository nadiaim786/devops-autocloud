const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("AutoCloud Running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(3000, () => console.log("Server running on port 3000"));