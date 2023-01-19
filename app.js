const express = require("express");

const mongoose = require("mongoose");
const swaggerDocs = require('./swagger');
const app = express();

// database
mongoose.connect("mongodb://localhost:27017/swagger-with-mongoose");

// routes
const productRouter = require("./routes/productRoute");
const reviewRouter = require('./routes/reviewRoute');

app.use(express.json());

// routes
app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("welcome");
});

const port = 3000
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  swaggerDocs(app,port)
});
