import mongoose from "mongoose";
const URI = "mongodb://localhost/School-DB";

mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
