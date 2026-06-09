import express from "express";
import bodyParser from "body-parser";
import cors from "cors";  
import todoRoutes from "./api/Todo/todo.routes.js";

const app = express();
const PORT = 5000;

// Define whitelist without trailing slash
const whitelist = [
  "http://localhost:5173",
  "https://another.example.com"
];
//cors configuration
const corsOptions = {
  origin: function (origin, callback) {
    // origin will be undefined for some non‐browser requests (Postman etc). You can decide how you want to treat that.
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else if (!origin) {
      // allow if you want to accept requests with no origin (like Postman)
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use("/api/todo", todoRoutes);

app.get("/", (req, res) => res.send("HELLO FROM HOMEPAGE"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
    