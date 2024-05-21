const User = require('../models/User'); // User 모델 가져오기

const adduser = async (req, res) => {
  const user = new User({
    name: '김금동',
    email: 'golddong98@naver.com',
  });

  try {
    await user.save();
    res.send('User added successfully!');
  } catch (error) {
    res.status(500).send('Error adding user: ' + error.message);
  }
};

// 객체로 묶어서 내보내기
module.exports = {
  adduser,
};
