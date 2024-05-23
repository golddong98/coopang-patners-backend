const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // 중앙 라우트 파일 가져오기
const app = express();
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';

// 환경별로 적절한 .env 파일을 로드합니다.
if (env === 'production') {
  dotenv.config({ path: '.env.prod' });
} else {
  dotenv.config({ path: '.env.local' });
}
const port = process.env.APP_PORT;

// 현재 환경을 가져옵니다. 기본값은 'development'입니다.

app.use(express.json()); // JSON 요청 바디를 파싱

// MongoDB 연결
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error:', error));

// 기본 라우트 (원형)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// // 라우트 설정 (수정)
// app.use('/', homeRoutes);

// 중앙 라우트 사용(수정2)
app.use('/', routes);

// // 새로운 사용자 생성 라우트 (원형)
// app.post('/users', async (req, res) => {
//     const { name, email, password } = req.body;
//     const user = new User({ name, email, password });

//     try {
//       await user.save();
//       res.status(201).send(user);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   });

// 예제 사용자 데이터 삽입(원형)
// app.get('/adduser', async (req, res) => {
//   const user = new User({
//     name: '김금동',
//     email: 'golddong98@naver.com'
//   });

//   try {
//     await user.save();
//     res.send('User added successfully!');
//   } catch (error) {
//     res.status(500).send('Error adding user: ' + error.message);
//   }
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// test
