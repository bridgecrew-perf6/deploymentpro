const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.use(express.static(path.join(__dirname, "../public")));
app.use(
  "/image/bookstore",
  express.static(path.join(__dirname, "../image/bookstore.jpg"))
);

const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`It is running on port ${port}`);
});
