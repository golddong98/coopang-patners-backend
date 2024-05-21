const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');

// 객체 디스트럭처링을 통해 필요한 함수만 가져오기
const { getHome, anotherFunction } = homeControllers;

router.get('/', getHome);
// 그냥예시
// router.get('/another', anotherFunction);

module.exports = router;
