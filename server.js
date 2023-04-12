const express = require("express");
const app = express();
const { PORT } = require("./src/config");
const cors = require("cors");
const router = require("./src/modules/routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
