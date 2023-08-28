const express = require("express");
const app = express();
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use("/", indexRouter);

app.use(express.static("public"));

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).send(err);
});
app.listen(5000, () => {
  console.log("http port is working at 5000");
});
