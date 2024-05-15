import express from "express";

import loginController from "./controllers/loginController.js";

/**
 * express 서버 생성 및 시작
 */
const app = express();

app.listen(1234, () => {
  console.log(`Start server on port ${1234}!`);
});

/**
 * API 라우팅
 */
app.use(express.json()); // JSON 파싱을 위한 미들웨어

// POST
app.post("/login", loginController.login); // login
