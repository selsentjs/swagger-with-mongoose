const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

/**
 * @swagger
 * /api/product:
 *  get:
 *    summary: Returns all products 
 *    tags: [Product]
 *    responses:
 *      200:
 *        description: The list of products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */
router.route("/").get(getAllProducts);
router.route("/:id").get(getSingleProduct);

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - name
 *        - quantity
 *        - departments
 *      properties:
 *        name:
 *          type: string
 *          description: name of the product
 *        quantity:
 *          type: number
 *          description: total quantity of the product
 *        departments:
 *          type: string
 *          description: departments of the product
 */

/**
 * @swagger
 * /api/product:
 *  post:
 *    summary: create a new product
 *    tags: [Product]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: The product created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      500:
 *        description: Internal server error
 */
router.route("/").post(createProduct);

router.route("/:id").put(updateProduct);

router.route("/:id").delete(deleteProduct);

module.exports = router;
