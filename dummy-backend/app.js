const express = require('express');
const bodyParser = require('body-parser');

const { getStoredPosts, storePosts } = require('./data/posts');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// '/posts'로 get요청을 보내면 모든 포스트 반환
app.get('/posts', async (req, res) => {
  const storedPosts = await getStoredPosts();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500)); // 실제 서버와 유사하게 딜레이를 주는 코드
  res.json({ posts: storedPosts });
});

// 게시 요청이 아래 API route(API경로) 에서 처리
// 게시 요청을 백엔드의 아래 경로로 보내면 데이터 가공 후 posts.json파일에 저장된다.
app.put('/cart', async (req, res) => {
  const postData = req.body;
  console.log('req>>>', req.body);
  
  const _message = postData.items.length > 0 ? 'Stored new cart.' : 'Initialized';

  await storePosts([postData]);
  res.status(201).json({ message: _message, post: postData });
});

app.listen(8080);
