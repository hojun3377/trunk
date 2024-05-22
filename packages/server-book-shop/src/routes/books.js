import express from "express";
import { param, query, checkExact, validationResult } from "express-validator";

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
 * /books 라우터 생성
 */
const router = express.Router();

/**
 * express.json(): express 내장 미들웨어 함수
 * 수신된 request body의 JSON을 Javascript 객체로 파싱(parsing)
 * ref: https://expressjs.com/en/api.html#express.json
 */
router.use(express.json());

/**
 * 도서 목록 조회
 */
router.get(
  "/",
  [
    query("category").optional().isInt().toInt(),
    query("new").optional().isBoolean().toBoolean(),
    checkExact([], { message: "Only category and new are allowed" }),
    validationHandler,
  ],
  (req, res) => {
    // 전체 도서 목록 조회
    const queryLength = Object.keys(req.query).length;
    if (queryLength === 0) {
      return res.json("get /books");
    }

    // 카테고리별 도서 목록 조회
    const categoryId = req.query.category;
    const isNew = req.query.new || false;

    if (categoryId !== undefined) {
      return res.json(`get /books?categoryId=${categoryId}&new=${isNew}`);
    }
  }
);

/**
 * 도서 상세 조회
 */
router.get(
  "/:bookId",
  [param("bookId").isInt().toInt(), validationHandler],
  (req, res) => {
    const { bookId } = req.params;

    res.json(`get /books/${bookId}`);
  }
);

export default router;
