const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const winston = require("winston");

dotenv.config();

// Using Express

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// calling body-parser to handle the Request Object from POST requests
const bodyParser = require("body-parser");

const questions = require("./api/routes");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

const logger = winston.createLogger({
  level: "info", // Set the desired logging level
  format: winston.format.simple(), // Choose a logging format
  transports: [
    new winston.transports.Console(), // Add a transport, e.g., console
  ],
});

// DB Config
const db = process.env.MONGO_URI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    logger.info("MongoDB connected...");
  })
  .catch((error) => logger.error(error));

// use routes
app.use("/api/questions", questions);

// Server our client app

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https")
      res.redirect(`https://app.salesngine.com${req.url}`);
    else next();
  });
  app.use(express.static("./client/build"));

  app.get("/*", (req, res) => {
    res.sendFile("./client/build/index.html", { root: __dirname });
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => logger.info(`server started on port ${port}`));
