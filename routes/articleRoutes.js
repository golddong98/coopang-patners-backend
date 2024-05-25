const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/articleControllers');

// 객체 디스트럭처링을 통해 필요한 함수만 가져오기
const { getArticleTitles } = articleControllers;

router.get('/articleTitle', getArticleTitles);
// 그냥예시
// router.get('/another', anotherFunction);

module.exports = router;
