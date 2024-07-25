import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RAHUL_SINGLA_PORTFOLIO",
    })
    .then((conn) => {
      console.log("Connected to the database! " + conn.connection.host);
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
