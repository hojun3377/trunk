import express from "express";
import { param, validationResult } from "express-validator";

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
 * 사용자 도서 좋아요 추가
 */
router.post(
  "/likes/:bookId",
  [param("bookId").isInt().toInt(), validationHandler],
  (req, res) => {
    const { bookId } = req.params;

    res.json(`post /likes/${bookId}`);
  }
);

/**
 * 사용자 도서 좋아요 삭제
 */
router.delete(
  "/likes/:bookId",
  [param("bookId").isInt().toInt(), validationHandler],
  (req, res) => {
    const { bookId } = req.params;

    res.json(`delete /likes/${bookId}`);
  }
);

export default router;
