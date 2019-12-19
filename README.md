# preact-practice

## 개발 스펙

- preact: React의 경량화 버젼
- babel (corejs, regenerator)
- rollup
- prettier
- axios


## 개발 환경

- node 10 이상


## 사용방법

### 모듈 설치 

- 사용되는 모듈들 설치 

```bash
npm i
```

### 개발 서버 및 빌드

- page를 별도로 만들기 위해서 각 페이지 별로 개발 및 빌드합니다.
- page는 `src/page` 폴더 안에 작성합니다.

#### 개발 서버 동작

```bash
npm start --context={페이지이름}
```

#### production build

```bash
npm run build --context={페이지이름}
```

