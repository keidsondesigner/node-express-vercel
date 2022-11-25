const express = require("express");
const router = express.Router();

const test = [
  {
    "nome": "Keidson",
    "sobrenome": "Roby",
    "email": "keidsondesigner@gmail.com",
    "idade": "21",
    "peso": "78",
    "altura": "1.75"
  }
];

router.post("/", async (req, res, next) => {
  test.push(req.body);
  return res.status(200).json(req.body);
});


router.get("/", async (req, res, next) => {
  test.push(req.body);
  return res.status(200).json(test);
});

module.exports = router;
