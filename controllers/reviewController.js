const Review = require('../models/reviewModel');

// get all the reviews
const getAllReviews = async (req, res) => {
  try {
    const review = await Review .find({}).populate('product_id')
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get review by id
const getSingleReview  = async (req, res) => {
  const { id:id } = req.params;
  try {
    const review = await Review.findOne({ _id: id })
    if (!review) {
      res.send("no review with this id");
    } 
      res.status(200).json(review);
    
  } catch (err) {
    res.status(500).json(err);
  }
};

// create review
const createReview  = async(req, res) => {
 
  try {
    const newReview = await Review.create({
        product_id: req.body.product_id,
        stars:req.body.stars,
        review:req.body.review
    });
    const reviewData = await newReview.save();
    return res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update review
const updateReview  = async (req, res) => {
  const { id:id } = req.params;
  const { product_id,stars,review } = req.body;

  try {
    const review = await Review.findOneAndUpdate({ _id: id }, req.body);
    if (!review) {
      res.send("no review with thid id");
    } 
      res.status(200).json(review);
   
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete review

const deleteReview  = async (req, res) => {
  const { id:id } = req.params;
  try {
    const review = await Review.deleteOne({ _id: id });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};
