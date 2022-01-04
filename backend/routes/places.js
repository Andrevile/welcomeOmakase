const express = require("express");
const Place = require("../schemas/place");

const router = express.Router();

//./places
router.get("/places", async (req, res, next) => {
  try {
    const places = await Place.find({});
    console.log(places);
    res.json({ data: places });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
