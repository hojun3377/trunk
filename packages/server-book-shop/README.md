# Book Shop Web API Server

도서 쇼핑몰 WAS입니다.

### 사양

| 프로그램     | 버전     |
| ------------ | -------- |
| **node.js**  | v20.13.1 |
| **corepack** | v0.28.0  |
| **yarn**     | v4.2.2   |

## 로컬 환경 구축 및 실행

```
git clone https://github.com/hojun3377/trunk.git

cd trunk

corepack enable
yarn install

yarn server-book-shop start
```

## ERD

![book-shop](https://github.com/hojun3377/trunk/assets/76763854/bd9cc077-9eea-4572-a69f-a72e81e7fbe2)

## 패키지 구조

```
server-book-shop
├── src
│   ├── middlewares
│   ├── routes
│   │   ├── books.js
│   │   ├── carts.js
│   │   ├── likes.js
│   │   ├── orders.js
│   │   └── users.js
│   └── app.js
├── README.md
└── package.json
```

| 파일 및 폴더 이름 |                 설명                  |      상세       |                                     참고                                      |
| :---------------: | :-----------------------------------: | :-------------: | :---------------------------------------------------------------------------: |
|        src        |      소스 코드 파일을 모은 폴더       |      폴더       |                                                                               |
|    middlewares    | 라우트 핸들러 전처리 파일을 모은 폴더 |      폴더       |                                                                               |
|      routes       |  API 기능별 라우터 파일을 모은 폴더   |      폴더       |                                                                               |
|       books       |         도서 API 라우터 파일          | Javascript 파일 |                                                                               |
|       carts       |       장바구니 API 라우터 파일        | Javascript 파일 |                                                                               |
|       likes       |        좋아요 API 라우터 파일         | Javascript 파일 |                                                                               |
|      orders       |         주문 API 라우터 파일          | Javascript 파일 |                                                                               |
|      app.js       |       서버를 실행하는 메인 파일       | Javascript 파일 |                                                                               |
|     README.md     |          프로젝트 설명 파일           |  markdown 파일  |                                                                               |
|   package.json    |          프로젝트 명세 파일           |    JSON 파일    | [Manifest (package.json) \| Yarn](https://yarnpkg.com/configuration/manifest) |
