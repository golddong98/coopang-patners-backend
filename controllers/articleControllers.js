const Article = require('../models/Article'); // User 모델 가져오기

// const getArticle = async (req, res) => {
//   const user = new Article({
//     name: '김금동',
//     email: 'golddong98@naver.com',
//   });

//   try {
//     await user.save();
//     res.send('User added successfully!');
//   } catch (error) {
//     res.status(500).send('Error adding user: ' + error.message);
//   }
// };

async function getArticleTitles(req, res) {
  try {
    const articlesTitle = await Article.find({}, 'title'); // title 필드만 선택
    console.log('Article Titles:', articlesTitle);
    const articleTitle2 = articlesTitle[1].title;
    res.send({ articlesTitle: articleTitle2 });
  } catch (error) {
    console.error('Error fetching article titles:', error);
    res.status(500).send('Error adding user: ' + error.message);
  }
}

// const adduser = async (req, res) => {
//     const user = new User({
//       name: '김금동',
//       email: 'golddong98@naver.com',
//     });

//     try {
//       await user.save();
//       res.send('User added successfully!');
//     } catch (error) {
//       res.status(500).send('Error adding user: ' + error.message);
//     }
//   };

// 객체로 묶어서 내보내기
module.exports = {
  getArticleTitles,
};
