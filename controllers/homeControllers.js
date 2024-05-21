const getHome = (req, res) => {
  res.send('Hello World!');
};

// 다른 함수들 정의
const anotherFunction = (req, res) => {
  res.send('Another Function!');
};

// 객체로 묶어서 내보내기
module.exports = {
  getHome,
  anotherFunction,
};
