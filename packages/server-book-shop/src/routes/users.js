import express from "express";

/**
 * 라우터 생성
 */
const router = express.Router();

/**
 * express.json(): express 내장 미들웨어 함수
 * 수신된 request body의 JSON을 Javascript 객체로 파싱(parsing)
 * ref: https://expressjs.com/en/api.html#express.json
 */
router.use(express.json());

/**
 * 회원가입
 */
router.post("/join", (req, res) => {
  res.json("post /users/join");
});

/**
 * 로그인
 */
router.post("/login", (req, res) => {
  res.json("post /users/login");
});

/**
 * 비밀번호 초기화 요청
 */
router.post("/reset", (req, res) => {
  res.json("post /users/reset");
});

/**
 * 비밀번호 초기화
 */
router.put("/reset", (req, res) => {
  res.json("put /users/reset");
});

export default router;
