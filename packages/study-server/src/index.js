import express from "express";
import dotenv from "dotenv";

import loginController from "./controllers/loginController.js";

/**
 * .env파일에 정의된 환경변수 설정
 */
dotenv.config();

/**
 * express 서버 생성 및 시작
 */
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Start server on port ${process.env.PORT}!`);
});

/**
 * API 라우팅
 */
app.use(express.json()); // JSON 파싱을 위한 미들웨어

// POST
app.post("/login", loginController.login); // login
