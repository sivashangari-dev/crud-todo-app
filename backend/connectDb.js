// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectToDb = async () => {
//     try {
//         console.log(process.env.DB_CONNECTION_STRING);
//         await mongoose.connect(process.env.DB_CONNECTION_STRING);
//         console.log("Database Connected")

//     } catch (error) {
//         console.error("DB connection failed")
//     }
// };

// module.exports= connectToDb;


require("dotenv").config();

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(`Database connected: ${connect.connection.name}`);
  } catch (error) {
    console.error("Database Connection Failed");
  }
};

module.exports = connectDatabase;



