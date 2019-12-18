# Kakao Global Event Page

## 목적

- JSON 데이터를 받아서 동적으로 이벤트 페이지를 뿌려주어야 한다.
- 인도네시아에 들어가는 서비스 이다.

## 개발 스펙

- preact: React의 경량화 버젼
- babel (corejs, regenerator)
- rollup
- prettier
- axios

### preact 사용 이유 

- 인도네시아 네트워크 환경으로 인한 리소스 경량화 필요성
- 동적 rendering에 최신 트렌드 반영 (jsrender, handlebars 함께 고려했었음)

## 브라우저 대응

- android 4.4.2 이상
- ios 9.0 이상
- pc는 css flex 사용이 가능한 환경만 지원

## 개발 환경

- node 10 이상


## 사용방법

- 사용되는 모듈들 설치 

```bash
npm i
```

- 개발 서버 동작

```bash
npm start
```

- production build

```bash
npm run build
```

## 폴더 구조

```
├── README.md
├── dist
|  ├── bundle.dev.js
|  ├── bundle.dev.js.map
|  ├── index.html
|  └── static-web
|     ├── event.json
|     └── mando.jpeg
├── package-lock.json
├── package.json
├── rollup.config.dev.js
├── rollup.config.js
└── src
   ├── api
   |  └── index.js
   ├── assets
   |  └── style
   ├── component
   ├── constants.js
   ├── hooks
   |  └── useEvent.js
   ├── index.js
   └── public
      └── index.html
```