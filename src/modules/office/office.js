const { allOffice, getByLocation, getByCategoryId, getByID } = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const allOffices = await allOffice();
      res.send(allOffices);
    } catch (err) {
      console.log("All office get ERROR", error);
    }
  },
  GET_BY_LOCATION: async (req, res) => {
    try {
      const { location } = req.body;
      const byLocation = await getByLocation(location);

      res.send(byLocation);
    } catch (err) {
      console.log("get by location ERROR", err);
    }
  },
  GET_BY_CATEGORY_ID: async (req, res) => {
    try {
      const { categoryID } = req.params;

      const getByID = await getByCategoryId(categoryID);
      res.send(getByID);

      // console.log(categoryID);
    } catch (err) {
      console.log("Get by category id ERROR", error);
    }
  },
  GET_BY_ID: async (req, res) => {
    try {
      const { product_id, categoryID } = req.params;
      const getProductId = await getByID(product_id, categoryID);
      res.send(getProductId);
    } catch (err) {
      console.log("get by id ERROR", error);
    }
  },
};
