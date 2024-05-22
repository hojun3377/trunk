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
 * 결제하기(주문서 입력)
 */
router.post("/", (req, res) => {
  res.json("post /orders");
});

/**
 * 주문 내역 조회
 */
router.get("/", (req, res) => {
  res.json("get /orders");
});

export default router;
