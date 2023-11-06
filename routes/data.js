const express = require("express");
const dataRouter = express.Router();
const { db } = require("../db/db");
const ExcelJs = require("exceljs");

dataRouter.get("/get-all", async (req, res) => {
  const getQuery = "SELECT * FROM automation";

  await db.query(getQuery, (err, res) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: err.sqlMessage });
    } else {
      console.log("Results Fetched.");
      res.status(200).send({ msg: "Data Fetched Successfully", data: results });
      db.end();
    }
  });
});

dataRouter.post("post", async (req, res) => {
  const path = "./parent-task-created-sept.xlsx";
  const workbook = new ExcelJS.Workbook();
  let data = [];

  await workbook.xlsx.readFile(path).then((res) => {
    const worksheet = workbook.getWorksheet(1);
    worksheet.eachRow({ includeEmpty: false }, (row) => {
      let [
        summary,
        custom_field_location,
        issue_key,
        issue_id,
        creator,
        ticket_label,
        extra_label,
        dummy_label,
        complexity,
        assignee,
        status,
        created,
        resolved,
        priority,
        custom_feiled_date_time,
        custom_field_client_review_date,
        custom_field_reason_for_ammends,
        time_spent,
        custom_feilds_satisfication_score,
        custom_feild_client,
        custom_feild_client_review_date,
        custom_feild_due_date_time,
        task_type,
        custom_feild_project_manager,
        due_date,
        updated,
      ] = row.values;
      data.push({
        summary,
        custom_field_location,
        issue_key,
        issue_id,
        creator,
        ticket_label,
        extra_label,
        dummy_label,
        complexity,
        assignee,
        status,
        created,
        resolved,
        priority,
        custom_feiled_date_time,
        custom_field_client_review_date,
        custom_field_reason_for_ammends,
        time_spent,
        custom_feilds_satisfication_score,
        custom_feild_client,
        custom_feild_client_review_date,
        custom_feild_due_date_time,
        task_type,
        custom_feild_project_manager,
        due_date,
        updated,
      });
      res.send(data);
    });
  });
});

module.exports = { dataRouter };
