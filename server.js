require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { centralRouter } = require("./routes/centralRouter");
const { connectDB } = require("./connectDB");
const { StatusCodes } = require("http-status-codes");

// ============Creating a server instance
const app = express();

app.use(express.urlencoded());
app.use(express.json());

const { PORT = 3000, MONGO_URI, DB_NAME } = process.env;
app.use(cors());

// ===============For testing purpose
const courses = [
  {
    id: 1,
    name: "Web Development",
    duration: "12 weeks",
    price: "$299",
    code: "WD101",
    outcome: "Learn to build websites",
    professor: "John Doe",
  },
  {
    id: 2,
    name: "Data Science",
    duration: "16 weeks",
    price: "$399",
    code: "DS202",
    outcome: "Analyze and interpret data",
    professor: "Jane Smith",
  },
  {
    id: 2,
    name: "Data Science",
    duration: "16 weeks",
    price: "$399",
    code: "DS202",
    outcome: "Analyze and interpret data",
    professor: "Jane Smith",
  },
  {
    id: 2,
    name: "Data Science",
    duration: "16 weeks",
    price: "$399",
    code: "DS202",
    outcome: "Analyze and interpret data",
    professor: "Jane Smith",
  },
  // Add more courses
];

app.get("/health", (req, res) => {
  return res.status(StatusCodes.OK).json({
    message: "Server is working fine",
    statusCode: StatusCodes.OK,
    data: null,
  });
});
app.use("/api/v1", centralRouter);

app.listen(PORT, async (err) => {
  try {
    const connectionData = await connectDB(MONGO_URI, DB_NAME);
    console.log("DB connected to the host", connectionData.connection.host);
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Error in server.js and the error is ", error.message);
  }
});
