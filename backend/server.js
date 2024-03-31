import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
const PORT = process.env.PORT || 1994;

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World! welcome to invoice application!");
});

app.listen(PORT, (req, res) => {
  console.log(
    chalk.bgBlack.bold(
      `🚀 Server is running on port ${chalk.red.bold(
        PORT
      )} in ${chalk.yellow.bold(process.env.NODE_ENV)} mode`
    )
  );
});
