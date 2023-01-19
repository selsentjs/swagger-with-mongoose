const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    departments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema)