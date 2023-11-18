import express from "express";

const port = 3080;

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
