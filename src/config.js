const PG = {
  connectionString: "postgres://postgres:1111@localhost:5432/marketplace",
  connectionElSrting:
    "postgres://dktlhikv:hLvhuVcvQgzZk3-f3RwFGrwuWpCHQ6rd@heffalump.db.elephantsql.com/dktlhikv",
};

module.exports = {
  PORT: process.env.PORT || 4000,
  PG,
};
