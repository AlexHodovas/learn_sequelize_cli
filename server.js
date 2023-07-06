const express = require("express");
const app = express();
const db = require("./models");

const initDB = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initDB();

db.sequelize
  .sync() // { force: true }
  .then(async () => {
    console.error("then db.sequelize.sync");
  })
  .catch((error) => {
    console.error("catch db.sequelize.sync: ", error);
  });

app.listen("3000", "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port 3000`);
});

console.log("db.sequelize.models", db.sequelize.models);
