import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import userRoute from "./routes/UsersRoute.js";
import productRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize";

const app = express();
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

dotenv.config();
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: { secure: "auto" },
  })
);
app.use(
  cors({
    origin: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080"); // Specify allowed origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers
  next();
});

app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(AuthRoute);

// store.sync();
app.listen(process.env.APP_PORT, () => {
  console.log("server sudah siap");
});
