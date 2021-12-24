const express = require("express");

const router = express.Router();

router.get("/dining", (req, res) => {
  res.send("hello here is dining");
});

module.exports = router;
