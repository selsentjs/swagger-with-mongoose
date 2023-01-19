const express = require("express");

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/swagger-with-mongoose");
const productRouter = require("./routes/productRoute");
const reviewRouter = require('./routes/reviewRoute');

app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
