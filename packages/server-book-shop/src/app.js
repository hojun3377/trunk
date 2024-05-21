import express from "express";
import dotenv from "dotenv";

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
