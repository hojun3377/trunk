# Trunk

공부 및 토이 프로젝트 저장소입니다.  
yarn으로 관리하는 모노레포입니다.

### 사양

| 프로그램     | 버전     |
| ------------ | -------- |
| **node.js**  | v20.13.1 |
| **corepack** | v0.28.0  |
| **yarn**     | v4.2.2   |

## 로컬 환경에서 프로젝트 구축

```
corepack enable
yarn install
```

### 스크립트

- **yarn test-workspace start**: "Hello World!!"가 figlet으로 콘솔에 출력
- **yarn dir-tree**: github repo의 폴더 및 파일 트리 구조 콘솔에 출력
- **yarn study-server start**: domain:1234/login에 대한 HTTP POST 수신만 가능한 서버 프로그램 구동
  - `{email: test, password: test}`만 로그인 성공
  - 성공시 jwt 발행(30분) 및 쿠키 송신

## 디렉토리 구조

```
trunk
├── .yarn
├── docs
│   ├── git-test-log.txt
│   └── github-test-log.txt
├── packages
│   ├── server-book-shop
│   ├── study-server
│   └── test-workspace
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .yarnrc.yml
├── README.md
├── package.json
└── yarn.lock
```

| 파일 및 폴더 이름 |                        설명                        |                               상세                                |                                                                                    참고                                                                                    |
| :---------------: | :------------------------------------------------: | :---------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       .yarn       |        yarn에서 사용하는 파일 및 폴더 저장         | 메타데이터, 캐시 파일(종속 패키지), 플러그인 및 기타 설정 파일 등 |                                                                                                                                                                            |
|       docs        |              프로젝트 관련 문서 저장               |               git, github 실습에 대한 text 파일 등                |                                                                                                                                                                            |
|     packages      |             개별 프로젝트 패키지 저장              |                 토이 프로젝트, 연습용 프로젝트 등                 |                                                                        각 패키지는 하나의 workspace                                                                        |
|   .editorconfig   |     코드 에디터의 설정을 프로젝트 단위로 설정      |                         에디터 설정 파일                          |                                                                 [EditorConfig](https://editorconfig.org/)                                                                  |
|  .gitattributes   | Git 저장소에서 특정 파일이나 경로에 대한 속성 설정 |                           Git 설정 파일                           | [Git - Git Attributes](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Attributes)<br>[Git - gitattributes Documentation](https://git-scm.com/docs/gitattributes) |
|    .gitignore     |       Git이 추적하지 않을 파일 및 폴더 설정        |                           Git 설정 파일                           |                                                    [Git - gitignore Documentation](https://git-scm.com/docs/gitignore)                                                     |
|    .yarnrc.yml    |                  yarn의 기능 설정                  |                          yarn 설정 파일                           |                                                 [Settings (.yarnrc.yml) \| Yarn](https://yarnpkg.com/configuration/yarnrc)                                                 |
|     README.md     |                프로젝트 패키지 설명                |                           markdown 파일                           |                                                                                                                                                                            |
|   package.json    |                프로젝트 패키지 명세                |                     프로젝트 패키지 명세 파일                     |                                               [Manifest (package.json) \| Yarn](https://yarnpkg.com/configuration/manifest)                                                |
|     yarn.lock     |       종속성 트리에 대한 정확한 버전을 기술        |                     프로젝트 패키지 lock 파일                     |                                                  [yarn.lock \| Yarn](https://classic.yarnpkg.com/lang/en/docs/yarn-lock/)                                                  |
