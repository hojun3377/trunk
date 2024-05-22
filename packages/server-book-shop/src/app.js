import express from "express";
import dotenv from "dotenv";

import usersRouter from "./routes/users.js";
import booksRouter from "./routes/books.js";
import likesRouter from "./routes/likes.js";
import cartsRouter from "./routes/carts.js";
import ordersRouter from "./routes/orders.js";

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
app.use("/users", usersRouter);
app.use("/books", booksRouter);
app.use("/likes", likesRouter);
app.use("/carts", cartsRouter);
app.use("/orders", ordersRouter);
