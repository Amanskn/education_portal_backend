const { Router } = require("express");
const coursesRouter = Router();

const {
  getAllCourses,
  createACourse,
  getACourse,
  updateACourse,
  deleteACourse,
} = require("../controllers/coursesController");

// ==================Route handler for fetching all the courses
coursesRouter.get("/", getAllCourses);

// ==================Route handler for fetching a single course
coursesRouter.get("/:courseId", getACourse);

// ==================Route handler for creating a new course
coursesRouter.post("/", createACourse);

// ==================Route handler for updating an existing course
coursesRouter.put("/:courseId", updateACourse);

// ==================Route handler for deleting an existing course
coursesRouter.delete("/:courseId", deleteACourse);

module.exports = {
  coursesRouter,
};
