const { Router } = require("express");

const router = new Router();

const Category = require("./category/category");
const Office = require("./office/office");

router
  .get(`/category`, Category.GET)
  .get(`/office`, Office.GET)
  .post(`/office`, Office.GET_BY_LOCATION)
  .get(`/office/:categoryID`, Office.GET_BY_CATEGORY_ID)
  .get(`/office/:categoryID/:product_id`, Office.GET_BY_ID);

module.exports = router;
