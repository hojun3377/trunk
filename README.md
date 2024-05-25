# Trunk

공부 및 토이 프로젝트 저장소입니다.  
yarn으로 관리하는 모노레포입니다.

### 프로젝트 사양

| 프로그램               | 버전      |
| ---------------------- | --------- |
| **Visual Studio Code** | v1.89.1   |
| **Node.js**            | v20.13.1  |
| **corepack**           | v0.28.0   |
| **yarn**               | v4.2.2    |
| **typescript**         | 5.3.3 SDK |

## 설치

```
corepack enable
yarn install
```

## 디렉토리 구조

```
trunk
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── .yarn
│   ├── sdks
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

| 파일 및 폴더 이름 |                        설명                        |                               상세                                |                                                                                       참고                                                                                        |
| :---------------: | :------------------------------------------------: | :---------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      .vscode      |             vscode 프로젝트 단위 설정              |                 extensions.json, settings.json 등                 |                                                                                                                                                                                   |
|  extensions.json  |               추천 확장 리스트 설정                |                            vscode 설정                            |                   [Default settings - Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings#_default-settings)                   |
|   settings.json   |               워크스페이스 단위 설정               |                            vscode 설정                            | [Workspace recommended extensions - Managing Extensions in Visual Studio Code](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) |
|       .yarn       |        yarn에서 사용하는 파일 및 폴더 저장         | 메타데이터, 캐시 파일(종속 패키지), 플러그인 및 기타 설정 파일 등 |                                                                                                                                                                                   |
|       sdks        |     yarn에서 사용하는 도구 및 라이브러리 저장      |                           typescript 등                           |                                                      [Editor SDKs \| Yarn](https://yarnpkg.com/getting-started/editor-sdks)                                                       |
|       docs        |              프로젝트 관련 문서 저장               |               git, github 실습에 대한 text 파일 등                |                                                                                                                                                                                   |
|     packages      |             개별 프로젝트 패키지 저장              |                 토이 프로젝트, 연습용 프로젝트 등                 |                                                                           각 패키지는 하나의 workspace                                                                            |
|   .editorconfig   |     코드 에디터의 설정을 프로젝트 단위로 설정      |                         에디터 설정 파일                          |                                                                     [EditorConfig](https://editorconfig.org/)                                                                     |
|  .gitattributes   | Git 저장소에서 특정 파일이나 경로에 대한 속성 설정 |                           Git 설정 파일                           |    [Git - Git Attributes](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Attributes)<br>[Git - gitattributes Documentation](https://git-scm.com/docs/gitattributes)     |
|    .gitignore     |       Git이 추적하지 않을 파일 및 폴더 설정        |                           Git 설정 파일                           |                                                        [Git - gitignore Documentation](https://git-scm.com/docs/gitignore)                                                        |
|    .yarnrc.yml    |                  yarn의 기능 설정                  |                          yarn 설정 파일                           |                                                    [Settings (.yarnrc.yml) \| Yarn](https://yarnpkg.com/configuration/yarnrc)                                                     |
|     README.md     |                프로젝트 패키지 설명                |                           markdown 파일                           |                                                                                                                                                                                   |
|   package.json    |                프로젝트 패키지 명세                |                     프로젝트 패키지 명세 파일                     |                                                   [Manifest (package.json) \| Yarn](https://yarnpkg.com/configuration/manifest)                                                   |
|     yarn.lock     |       종속성 트리에 대한 정확한 버전을 기술        |                     프로젝트 패키지 lock 파일                     |                                                     [yarn.lock \| Yarn](https://classic.yarnpkg.com/lang/en/docs/yarn-lock/)                                                      |
