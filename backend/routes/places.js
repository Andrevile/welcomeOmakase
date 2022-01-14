const express = require("express");
const Place = require("../schemas/place");

const router = express.Router();

//./places
router.get("/places", async (req, res, next) => {
  //dining에 오게되면 /api/places로
  console.log(req.query);
  const query = req.query;
  try {
    //데이터 베이스 안에 있는 places collection의 데이터를 모두 가져옴

    const places = await Place.find(query);
    console.log("here", places);
    res.json({ data: places });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router; //라우터를 export 안해주면 에러나옴
