const { category, oneCategory } = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const allCategory = await category();

      res.json(allCategory);
    } catch (err) {
      console.log(" get all category ERROR", err);
    }
  },
};
