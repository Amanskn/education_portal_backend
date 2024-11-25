const { StatusCodes } = require("http-status-codes");
const { Course } = require("../models/course.model");

// ======================= controller for fetching all courses
async function getAllCourses(req, res) {
  console.log("Inside get all courses");

  const allCourses = await Course.find().sort({
    updatedAt: -1,
  });
  //   console.log("@@@@@", allCourses);
  return res.status(StatusCodes.OK).json({
    message: "fetched all courses successfully",
    statusCode: StatusCodes.OK,
    data: allCourses,
  });
}

// ======================= controller for fetching a single courses
async function getACourse(req, res) {
  console.log("Inside get a course");

  const foundCourse = await Course.findById(req.params.courseId);
  return res.status(StatusCodes.OK).json({
    message: "Course fetched successfully",
    statusCode: StatusCodes.OK,
    data: foundCourse,
  });
}

// ======================= controller for creating a course
async function createACourse(req, res) {
  console.log("Inside create a course and the req.body is ", req.body);
  const newCourse = req.body;
  // Validate the course data
  if (
    !newCourse.name ||
    !newCourse.duration ||
    !newCourse.price ||
    !newCourse.code ||
    !newCourse.outcome ||
    !newCourse.professor
  ) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please provide all the data",
      statusCode: StatusCodes.BAD_REQUEST,
      data: null,
    });
  }

  // console.log("@@@@@@", newCourse);

  const newlyCreatedCourse = await Course.create(newCourse);
  return res.status(StatusCodes.CREATED).json({
    message: "created a course successfully",
    statusCode: StatusCodes.CREATED,
    data: newlyCreatedCourse,
  });
}

// ======================= controller for updating a course
async function updateACourse(req, res) {
  console.log("Inside update a course");
  const dataToBeUpdated = req.body;

  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.courseId,
    dataToBeUpdated
  );
  return res.status(StatusCodes.OK).json({
    message: "created a course successfully",
    statusCode: StatusCodes.OK,
    data: updatedCourse,
  });
}

// ======================= controller for deleting a course
async function deleteACourse(req, res) {
  console.log("Inside deleteACourse");
  const { courseId } = req.params;
  const deletedCourse = await Course.findByIdAndDelete(courseId);
  return res.status(StatusCodes.OK).json({
    message: "course  deleted successfully",
    statusCode: StatusCodes.OK,
    data: deletedCourse,
  });
}

module.exports = {
  getAllCourses,
  getACourse,
  createACourse,
  updateACourse,
  deleteACourse,
};
