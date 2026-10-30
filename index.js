const express = require("express");
const cors = require("cors");
require("dotenv").config();
const UserRouter = require("./src/routes/UserRouter");
const OAuthRouter = require("./src/routes/OAuthRouter");
const { connectDb } = require("./src/models");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", UserRouter);
app.use("/oauth", OAuthRouter);

connectDb().then(() => {
  app.listen(port, "0.0.0.0", () =>
    console.log(`${process.env.PROJECT_NAME}-${process.env.NODE_ENV} is listening on port ${port}`),
  );
});
