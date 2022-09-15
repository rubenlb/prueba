var express = require("express");
const revertirMensage = require("../lib/lib");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/data", function (req, res, next) {
  try {
    const revertido = revertirMensage(req.body.messaje);
    res.status(200).json({"res":"ok","status":"200","message": revertido});
  } catch (error) {
    res.status(412).json({ "res":"error","status":"412","reason":error });
  }
});

module.exports = router;
