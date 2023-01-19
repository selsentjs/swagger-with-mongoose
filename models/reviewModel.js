const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    },

    stars: {
      type: Number
     
    },
    review: {
      type: String,
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
