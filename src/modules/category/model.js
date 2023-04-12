const { fetch, fetchAll } = require("../../lib/postgres");

const ALL_CATEGORY = `select * from category;`;
const ONE_CATEGORY = `select * from category where id = $1;`;

const category = () => fetchAll(ALL_CATEGORY);
const oneCategory = id => fetch(ONE_CATEGORY, id);

module.exports = {
  category,
  oneCategory,
};
