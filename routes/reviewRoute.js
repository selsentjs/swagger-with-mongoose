const express = require("express");

const router = express.Router();

const {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
/**
 * @swagger
 * /api/review:
 *  get:
 *    summary: Get all reviews 
 *    tags: [Review]
 *    responses:
 *      200:
 *        description: The list of reviews
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Review'
 */
router.route("/").get(getAllReviews);
/**
 * @swagger
 * /api/review/{id}:
 *  get:
 *    summary: Get review by id
 *    tags: [Review]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of review
 *        schema:
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: review by its id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Review'
 *      500:
 *        description: Internal server error 
 */
router.route("/:id").get(getSingleReview);
/**
 * @swagger
 * components:
 *  schemas:
 *    Product,Review:
 *      type: object
 *      required:
 *        - product_id
 *        - stars
 *        - review
 *      properties:
 *        product_id:
 *          type: string
 *          description: id of the product
 *        stars:
 *          type: number
 *          description: star for the product
 *        review:
 *          type: string
 *          description: review of the product
 */

/**
 * @swagger
 * /api/review:
 *  post:
 *    summary: create a new review with product_id
 *    tags: [Product,Review]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product,Review'
 *    responses:
 *      200:
 *        description: The review created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product,Review'
 *      500:
 *        description: Internal server error
 */
router.route("/").post(createReview);
/**
 * @swagger
 * /api/review/{id}:
 *  put:
 *    summary: Update review by id
 *    tags: [Review]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: review id
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Review'
 *    responses:
 *      200:
 *        description: The review was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Review'
 *      404:
 *        description: review was not found
 *      500:
 *        description: Internal server error
 */
router.route("/:id").put(updateReview);
/**
 * @swagger
 * /api/review/{id}:
 *  delete:
 *    summary: remove review from array
 *    tags: [Review]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: review id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The review was deleted
 *      404:
 *        description: The review was not found
 */
router.route("/:id").delete(deleteReview);

module.exports = router;
