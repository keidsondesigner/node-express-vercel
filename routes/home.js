const express = require("express");
const router = express.Router();

const test = [];

router.post("/", async (req, res, next) => {
  test.push(req.body);
  return res.status(200).json(req.body);
});


router.get("/", async (req, res, next) => {
  test.push(req.body);
  return res.status(200).json(test);
});

module.exports = router;
