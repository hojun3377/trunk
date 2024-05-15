# Trunk

공부 및 토이 프로젝트 저장소입니다.  
yarn으로 관리하는 모노레포입니다.

### 사양

| 프로그램     | 버전     |
| ------------ | -------- |
| **node.js**  | v20.13.1 |
| **corepack** | v0.28.0  |
| **yarn**     | v4.2.2   |

## 로컬 환경 구축 및 스크립트

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
│   ├── study-server
│   │   ├── src
│   │   │   ├── controllers
│   │   │   │   └── loginController.js
│   │   │   ├── middlewares
│   │   │   │   └── authMiddleware.js
│   │   │   └── index.js
│   │   ├── README.md
│   │   └── package.json
│   └── test-workspace
│       ├── README.md
│       ├── index.js
│       └── package.json
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .yarnrc.yml
├── README.md
├── package.json
└── yarn.lock
```

| 파일 및 폴더 이름 |                                      설명                                       |                                                       상세                                                       |                                                                                    참고                                                                                    |
| :---------------: | :-----------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       .yarn       |                     yarn과 관련된 파일 및 폴더를 담는 폴더                      |                                  종속 패키지, 상태 파일, SDK, yarn 배포 파일 등                                  |                                                                                                                                                                            |
|       docs        |                               문서들을 담은 폴더                                |                                       git, github 실습에 대한 text 파일 등                                       |                                                                                                                                                                            |
|     packages      |                             개별 패키지를 담는 폴더                             |             토이 프로젝트 및 실습 프로젝트를 담는 폴더이며,<br>각 패키지는 하나의 workspace 입니다.              |                                                                                                                                                                            |
|   .editorconfig   | 코딩 스타일을 정의하기 위한 파일 형식과<br>에디터 플러그인 모음으로 구성된 파일 |               yarn 설치 시 자동으로 생성되며,<br>일관된 코딩 스타일을 유지하도록 돕는 파일입니다.                |                                                                 [EditorConfig](https://editorconfig.org/)                                                                  |
|  .gitattributes   |                                  git 설정 파일                                  |        yarn 설치 시 자동으로 생성되며,<br>폴더 및 파일 단위로 git에 대한 다른 설정을 적용할 수 있습니다.         | [Git - Git Attributes](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Attributes)<br>[Git - gitattributes Documentation](https://git-scm.com/docs/gitattributes) |
|    .gitignore     |                        git이 무시하는 경로를 명시한 파일                        | yarn 설치 시 자동으로 생성되며,<br>파일 및 폴더의 경로를 명시하여 git이 관리하지 않는 폴더 및 파일을 설정합니다. |                                                    [Git - gitignore Documentation](https://git-scm.com/docs/gitignore)                                                     |
|    .yarnrc.yml    |                                yarn의 설정 파일                                 |               현재 버전에서는 yarn 설치 시 자동으로 생성되지 않으며,<br>yarn의 기능을 설정합니다.                |                                                 [Settings (.yarnrc.yml) \| Yarn](https://yarnpkg.com/configuration/yarnrc)                                                 |
|     README.md     |                                  markdown 파일                                  |                                         프로젝트 대해 간략히 서술합니다.                                         |                                                                                                                                                                            |
|   package.json    |                            프로젝트의 manifest 파일                             |                                JSON 파일로 만들어지며 프로젝트 명세를 기술합니다.                                |                                               [Manifest (package.json) \| Yarn](https://yarnpkg.com/configuration/manifest)                                                |
|     yarn.lock     |                       yarn의 종속성 트리에 대한 lock 파일                       |                                   종속성 트리에 대한 정확한 버전을 기술합니다.                                   |                                                  [yarn.lock \| Yarn](https://classic.yarnpkg.com/lang/en/docs/yarn-lock/)                                                  |
