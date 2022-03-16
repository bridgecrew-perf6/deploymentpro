const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

//Middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use(
  "/image/bookstore",
  express.static(path.join(__dirname, "../image/bookstore.jpg"))
);
app.use(
  "/image/bookstore1",
  express.static(path.join(__dirname, "../image/book2.jpg"))
);
app.use(
  "/image/bookstore2",
  express.static(path.join(__dirname, "../image/book3.jpg"))
);

//Endpoints

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public"));
// });

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// app.get("/styles", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.css"));
// });

// app.get("/image/bookstore", function (req, res) {
//   res.sendFile(path.join(__dirname, "../image/bookstore.jpg"));
// });

// app.get("/image/bookstore1", function (req, res) {
//   res.sendFile(path.join(__dirname, "../image/book2.jpg"));
// });

// app.get("/image/bookstore2", function (req, res) {
//   res.sendFile(path.join(__dirname, "../image/book3.jpg"));
// });
//port
const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`It is running on port ${port}`);
});
