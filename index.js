const express = require("express");
const ExcelJs = require("exceljs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = 8080;
const { dataRouter } = require("./routes/data");
const cors = require("cors");

const app = express();
const { db } = require("./db/db");

app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

// routers
app.use("/data", dataRouter);

app.listen(PORT, async () => {
  try {
    db.connect(async (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Connected to mysql server");
      }
    });
    console.log(`Server is running on Port: ${PORT}`);
  } catch (err) {
    console.error("Error message: " + err);
  }
});
