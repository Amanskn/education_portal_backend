const { Router } = require("express");
const { coursesRouter } = require("./coursesRouter");

const centralRouter = Router();
centralRouter.use("/courses", coursesRouter);

module.exports = {
  centralRouter,
};
