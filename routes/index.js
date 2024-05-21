const express = require('express');
const router = express.Router();

// 개별 라우트를 가져오기
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

// 라우트를 사용
router.use('/', homeRoutes);
router.use('/user', userRoutes);

module.exports = router;
