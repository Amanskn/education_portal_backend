const mongoose = require("mongoose");

async function connectDB(dbUrl, dbName) {
  try {
    return await mongoose.connect(`${dbUrl}/${dbName}`);
  } catch (error) {
    console.log("Error in connectDB.js and the error is: ", error.message);
    throw error;
  }
}

module.exports = {
  connectDB,
};
