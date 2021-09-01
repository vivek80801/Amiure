import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import { config } from "dotenv";
import { resolve, join } from "path";
import { router } from "./routes/index";
import { connectDB } from "./contorllers/services/microservices/db";
import { myPassport } from "./contorllers/services/microservices/passport";

export const app = express();

connectDB();
myPassport(passport);

if (process.platform === "win32") {
  config({ path: join(resolve(__dirname.replace("\\src", "\\.env"))) });
} else {
  config({ path: join(resolve(__dirname.replace("/src", "/.env"))) });
}

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST"],
    credentials: true,
  })
);

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

app.use(passport.initialize());
app.use(passport.session());

//if (process.env.NODE_ENV === "development") {
//  app.use((req, res, next) => {
//    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//    res.setHeader("Access-Control-Allow-Headers", "content-type");
//    res.setHeader("Access-Control-Allow-Methods", "POST");
//    res.setHeader("Access-Control-Allow-Credentials", "true");
//    next();
//  });
//}

app.use(express.json());

app.use("/", router);

app.use((req, res) => {
  res.json({ msg: "page not found" });
});

if (process.env.NODE_ENV !== "development") {
  app.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      if (err) {
        res.json({ msg: "something went wrong" });
      } else {
        next();
      }
    }
  );
}
