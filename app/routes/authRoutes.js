// const router = require("express").Router();

module.exports = (app) => {
  const auth = require("../controllers/authController");

  var router = require("express").Router();

  // All Authentication Routes
  router.post("/signup", auth.signup);
  router.post("/login", auth.login);

  app.use("/api/v1/auth", router);
};
