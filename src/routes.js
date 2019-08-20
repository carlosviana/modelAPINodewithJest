const routes = require("express").Router();
const authMiddleware = require("../src/app/middleware/auth");

const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("./swagger.json");
const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

routes.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerJson));

routes.get("/", function(req, res) {
  res.redirect("/swagger");
});

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
