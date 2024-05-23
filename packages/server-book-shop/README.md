# Book Shop Web API Server

도서 쇼핑몰 Web API Server입니다.

### 사양

| 프로그램     | 버전     |
| ------------ | -------- |
| **node.js**  | v20.13.1 |
| **corepack** | v0.28.0  |
| **yarn**     | v4.2.2   |

## 로컬 환경에서 프로젝트 구축 및 실행

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
│   ├── config
│   │   └── database.js
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

| 파일 및 폴더 이름 |            설명             |                  상세                  |                                                   참고                                                    |
| :---------------: | :-------------------------: | :------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
|        src        | 소스 코드 파일 및 폴더 저장 |  model, controller, config, routes 등  |                                                                                                           |
|      config       |     app 환경 설정 저장      |             database.js 등             |                                                                                                           |
|    database.js    |        db 연결 설정         |  db 연결에 필요한 config로 pool 생성   | [createPool \| Quickstart](https://sidorares.github.io/node-mysql2/docs/examples/connections/create-pool) |
|      routes       | API 기능별 라우터 파일 저장 |   /books, /carts, /likes, /orders 등   |                                                                                                           |
|     books.js      |       도서 API 라우터       |  /books route에 대한 middleware 수행   |                                                                                                           |
|     carts.js      |     장바구니 API 라우터     |  /carts route에 대한 middleware 수행   |                                                                                                           |
|     likes.js      |      좋아요 API 라우터      |  /likes route에 대한 middleware 수행   |                                                                                                           |
|     orders.js     |       주문 API 라우터       |  /orders route에 대한 middleware 수행  |                                                                                                           |
|      app.js       |      express app 설정       | express app에 대한 route, port 등 설정 |                                                                                                           |
|     README.md     |    프로젝트 패키지 설명     |             markdown 파일              |                                                                                                           |
|   package.json    |    프로젝트 패키지 명세     |       프로젝트 패키지 명세 파일        |               [Manifest (package.json) \| Yarn](https://yarnpkg.com/configuration/manifest)               |
