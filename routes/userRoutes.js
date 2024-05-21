const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

// 객체 디스트럭처링을 통해 필요한 함수만 가져오기
const { adduser } = userControllers;

router.get('/adduser', adduser);

module.exports = router;
