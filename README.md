# Description
이 레포지토리는 ```React + Typescript``` 기반으로 제작된 대구소프트웨어마이스터고 질의응답 웹 사이트입니다.
아래에는 이 프로젝트의 사용법에 관해 설명되어 있습니다.

---

## 환경 세팅
### 1. 의존성 설치
```
npm install
```

### 2. 환경변수 설정
프로젝트 루트 폴더에 ```.env``` 파일을 만들어 서버 주소를 설정하세요.
**반드시 ```.gitignore```에 ```.env```가 추가되어 있는지 확인하세요.**
Vite 기반으로 작성해 주세요. (VITE_VARIABLE_NAME 형식)
```
VITE_SERVER_URL = 'https://server.url'
```


## 폴더 구조
### 폴더 기본 구조
```
src/
├── app/                       # App.tsx, router.tsx 등 전역 Provider
├── api/                       # Auth API 등 전역으로 사용되는 API
├── assets/                    a 이미지 등 부가 요소
├── components/                a 공통으로 사용되는 컴포넌트
├── constants/                 a 상수(카테고리 등)
├── pages/                     a 페이지
└── utils/                     a cookie등 공용 로직
```

### 폴더 세부 구조
```
src/
├── components/
│   └── {feature}/ # 도메인/기능별 컴포넌트
│       ├── index.tsx
│       └── style.ts
├── pages/
│   └── {route}/ # 라우팅 단위 페이지
│       ├── index.tsx
│       ├── style.ts
│       └── {route}/ # 하위 라우터 (상세 페이지 등)
│           ├── index.tsx
│           └── style.ts
└── utils/
    └── {feature}/
        └── {util_name}.ts
```

## 주석 작성법
### 기본사항
1. 한글로 작성한다.
2. ```JSDoc(/** **/)``` 형식의 주석 블록으로 작성한다.
3. 무엇을 왜 하는가에 대한 내용을 짧고 간결하게 작성한다.
4. 가능한 경우 예시를 작성한다.
5. Tag를 사용해 변수의 의미, 반환 값, 예제 등을 작성한다.

### 태그 설명
```
@param : 매개변수가 무엇인지 설명
@returns : 이 함수가 무엇을 반환하는지 설명
@example : 실제 사용 예제를 설명
```

### 주석 예시
 ```
/**
 * 두 숫자를 더한 값을 반환합니다.
 * 
 * @param a - 첫 번째 더할 숫자
 * @param b - 두 번째 더할 숫자
 * 
 * @returns 두 숫자의 합계 (number)
 * 
 * @example
 * const result = add(10, 20);
 * console.log(result); // 30
 */
 ```

 ## 코드 컨벤션
 1. 파일 당 컴포넌트는 ```1개```.
 2. 파일, 컴포넌트명은 ````UpperCamelCase````로 작성.
 3. 들여쓰기 단위는 ```2칸```.
 3. 변수 선언은 const 사용 및 ```lowerCamelCase``` 사용.

 ## 파일 네이밍
 1. Route 폴더는 ```UpperCamelCase로``` 작성.
 2. 컴포넌트 파일은 {feature} 폴더 안에 `````index.tsx````` 생성.
 3. 스타일 파일은 ```style.ts``` 또는 ```{name}.style.ts```로 작성.

 ## 페이지
 1. 각 페이지 파일은 ```src/pages/{route}/index.tsx```에 위치

 ## 스타일 가이드
 1. ```styled-components``` 기반으로 작성합니다.
 2. 색상, 폰트 크기 등은 ```theme``` 또는 ```디자인 토큰```에서 불러와 사용합니다. ```하드코딩은 금지됩니다.```
 3. 컴포넌트 이름은 ```UpperCamelCase```로 작성합니다.
 4. **어느 화면 비율, 크기에서도 되도록 깨지지 않도록 스타일링 합니다.**
 5. **페이지 간 컴포넌트 크기 차이가 최소화되도록 신경 써서 스타일링 합니다.**