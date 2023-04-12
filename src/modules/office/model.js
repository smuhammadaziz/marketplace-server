const { fetch, fetchAll } = require("../../lib/postgres");

const ALL_OFFICE = `select * from office;`;
const GET_BY_LOCATION = `select * from office where location = $1;`;
const GET_BY_CATEGORY_ID = `select * from office where category_id = $1;`;
const GET_BY_ID = `select * from office where id = $1 and category_id = $2`;

const allOffice = () => fetchAll(ALL_OFFICE);
const getByLocation = location => fetchAll(GET_BY_LOCATION, location);
const getByCategoryId = category_id => fetchAll(GET_BY_CATEGORY_ID, category_id);
const getByID = (id, category_id) => fetch(GET_BY_ID, id, category_id);

module.exports = {
  allOffice,
  getByLocation,
  getByCategoryId,
  getByID,
};
