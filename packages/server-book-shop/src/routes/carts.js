import express from "express";
import { body, checkExact, validationResult } from "express-validator";

/**
 * validationHandler
 */
const validationHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return next();
};

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
 * 장바구니 담기
 */
router.post("/", (req, res) => {
  res.json("post /carts");
});

/**
 * 장바구니 조회
 */
router.get(
  "/",
  [
    body("items").optional().isArray().toArray(),
    checkExact([], { message: "Only itemId array are allowed" }),
    validationHandler,
  ],
  (req, res) => {
    const body = {};

    Object.assign(body, req.body);

    if (body.items === undefined) {
      // 장바구니 도서 전체 조회
      return res.json("get /carts");
    } else {
      // 장바구니 도서 선택 조회
      return res.json("get /carts selected");
    }
  }
);

/**
 * 장바구니 도서 삭제
 */
router.delete("/", (req, res) => {
  res.json("delete /likes");
});

export default router;
