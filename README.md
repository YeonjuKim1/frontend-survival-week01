# frontend-survival-week01

프론트엔드 생존코스 1주차 과제

1.node 버전 18.18.0 이상 설치 필요
>node -v  # 노트 버전 확인
>nvm install 18.20.4  # LTS 버전
>nvm list  # 설치된 node 버전 전부 확인 가능
>nvm use 18.20.4  # 이걸로 변경

2.npm init 하기
>npm init -y
2-1.[.gitignore] 파일 생성. 

3.typescript 설치
>npm i -D typescript  # 개발도구라 -D
3-1. tsc(type script compiler) 설치
>npx tsc --init
3-2. tsconfig.json 파일에서 jsx 부분 주석 제거

4. ESLint 설치
>npm i -D eslint
>npx eslint --init
-> To check syntax and find problems
-> javaScript modules(import/export)
-> React
-> Yes  #typescript 사용
-> Browser
-> Yes  #지금 설치?
-> npm
==> 안타깝게도 eslint.config.mjs 파일이 생성 됨.
4-1.eslintjs 파일에 jest:true 추가 -> 못함.
4-2.eslintjs 파일에 plugin:react/jsx-runtime 추가 -> 그냥 모든 파일에 React import 중
4-3.[.eslintignore] 파일은 이제 더 이상 지원하지 않는단다. 설정 파일에 ignore 항목 형식으로 추가하는 것 같은데. 못 함.

5. React 설치
>npm i react react-dom 
>npm i -D @types/react @types/react-dom

6. jest(테스팅 도구) 설치
>npm i -D jest @types/jest @swc/core @swc/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom@5.16.4
6-1. jset.config.js 파일 만들기

7. Parcel 설치
>npm i -D parcel
7-1. package.json 파일 scripts 에 아래 명령어 추가.
"scripts": {
    "start": "parcel --port 8080",
    "build": "parcel build",
    "check": "tsc --noEmit",
    "lint": "eslint --fix src/**/*.{ts,tsx}",
    "test": "jest",
    "coverage": "jest --coverage --coverage-reporters html",
    "watch:test": "jest --watchAll"
},

8.기타
8-1.package.json 기본 파일 잡아주기.
"source": "index.html",

8-2. ts-node 실행
>npx ts-node  # ts-node 명령모드로 전환 됨.

8-3. static에 넣은 이미지를 보기 위해
>npm i -D parcel-reporter-static-files-copy
[.parcelrc] 파일 생성
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}

8-4. 빌드하면, 배포용 이미지. dist 폴더에 생김. 배포
>npx parcel build
>npx servor dist

8-5. 확장 프로그램 설치. eslint

8-6. [.vscode] 폴더 생성. settings.json 파일 생성
{
    "editor.rulers": [
        80
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "trailing-spaces.trimOnSave": true
}