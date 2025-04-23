import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// <===importing routes here=============================>
import userRoutes from "./Routes/user.routes.js";

//user router declaration

app.use("/api/v1/users", userRoutes);
//http:localhost:4000/api/v1/users/routeName

export default app;
