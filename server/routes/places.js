const express = require('express');
const Place = require('../db/schemas/place');

const router = express.Router();

//.api/places
router.post('/', async (req, res, next) => {
  //dining에 오게되면 /api/places로
  const filter_condition = {};
  for (const item in req.body) {
    if (req.body[item] !== '') {
      filter_condition[item] = req.body[item];
    }
  }
  if ('place_name' in filter_condition) {
    filter_condition.place_name = new RegExp(filter_condition.place_name);
  }
  if ('place_position' in filter_condition) {
    filter_condition.place_position = new RegExp(filter_condition.place_position);
  }
  try {
    let places;
    places = await Place.find(filter_condition);
    console.log(new Date());
    console.log(places);
    console.log('==================================================================');
    res.json({ data: places });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router; //라우터를 export 안해주면 에러나옴
