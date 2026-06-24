# 2026년 6~8월 프론트엔드 스터디 계획

## 1. 스터디 목표

UMC 10기 Web 워크북과 미션을 구현 학습의 중심축으로 사용하되, 워크북에 포함되지 않았거나 깊이가 부족한 웹 기반 지식과 프론트엔드 생태계를 별도로 학습한다.

8월 말에는 단순히 React 프로젝트를 만들어본 상태가 아니라 다음을 설명하고 증명할 수 있는 상태를 목표로 한다.

- 시맨틱 HTML과 CSS 레이아웃을 사용해 반응형 UI를 구현할 수 있다.
- 브라우저가 HTML, CSS, JavaScript를 받아 화면을 그리는 과정을 설명할 수 있다.
- HTTP 요청부터 브라우저 렌더링까지의 흐름을 설명할 수 있다.
- React의 렌더링, 상태, Effect, 컴포넌트 설계 원리를 설명할 수 있다.
- 클라이언트 상태와 서버 상태를 구분하고 적절한 관리 방법을 선택할 수 있다.
- TypeScript로 컴포넌트, API 응답, 상태의 타입을 안전하게 설계할 수 있다.
- Vite와 Webpack의 역할, 개발 서버와 프로덕션 빌드의 차이를 설명할 수 있다.
- 접근성, 성능, 테스트를 고려해 기능을 구현할 수 있다.
- CSR, SSR, SSG와 hydration의 차이를 설명할 수 있다.
- GitHub Actions를 이용해 lint, typecheck, test, build를 자동화할 수 있다.
- 기술 선택 이유와 트레이드오프를 면접에서 자신의 프로젝트 사례로 답할 수 있다.

---

## 2. 전체 학습 구조

프론트엔드 학습은 다음 다섯 축으로 진행한다.

```text
1. UMC 워크북과 미션
   └── React 서비스 구현 경험

2. 웹 기반 지식
   ├── HTML·CSS·접근성
   ├── 브라우저 렌더링
   ├── HTTP·네트워크·보안
   └── 웹 성능

3. React와 TypeScript
   ├── 렌더링과 상태 모델
   ├── Effect와 컴포넌트 설계
   ├── 타입 모델링
   └── 상태 관리

4. 프론트엔드 생태계
   ├── Vite·Webpack
   ├── 테스트
   ├── Git·CI/CD
   └── SSR·Next.js

5. 면접과 포트폴리오
   ├── fe-interview 문서
   ├── 기술 선택 이유
   ├── 트레이드오프
   └── 측정 가능한 개선 경험
```

UMC 워크북은 전체 학습의 뼈대이지, 프론트엔드 공부의 전체 범위가 아니다.

---

## 3. 월별 핵심 목표

| 기간        | 단계        | 핵심 목표                                     | 최종 결과물                                 |
| ----------- | ----------- | --------------------------------------------- | ------------------------------------------- |
| 6월 20~30일 | 기반 정리   | HTML·CSS·브라우저·React 핵심 원리 이해        | 기초 노트, React 미니 앱, 면접 답변         |
| 7월         | 서비스 구현 | 인증, API, 서버 상태, 상태 관리, 테스트, 배포 | UMC 서비스 기능, 테스트, CI                 |
| 8월         | 심화와 증명 | MANDA 재구현, 성능, 접근성, 빌드, SSR         | 배포 프로젝트, 성능 보고서, 포트폴리오 자료 |

### 월별 우선순위

#### 6월

1. 웹과 React의 기반 원리
2. UMC Chapter 00~03 복습 및 구현
3. `fe-interview`에 정확한 개념 정리

#### 7월

1. UMC Chapter 04~10 서비스 구현
2. TypeScript와 상태 관리
3. 테스트, Vite, GitHub Actions

#### 8월

1. MANDA React 재구현
2. 성능·접근성 측정과 개선
3. SSR·Next.js·WebView 개념
4. 면접과 포트폴리오 결과물 완성

---

## 4. 공부 방법

### 한 주제를 네 단계로 공부한다

```text
개념 확인
→ 작은 예제로 검증
→ UMC 또는 MANDA에 적용
→ 면접 답변으로 정리
```

예를 들어 `useEffect`를 공부할 때는 다음 순서를 따른다.

1. Effect가 필요한 경우와 필요 없는 경우를 공식 문서에서 확인한다.
2. 이벤트 구독과 정리 함수를 포함한 작은 예제를 작성한다.
3. 프로젝트의 API 요청 또는 이벤트 등록 코드를 점검한다.
4. "`useEffect`는 언제 사용해야 하나요?"에 2분 이내로 답한다.

### 매 회차 남길 결과물

각 회차마다 다음 네 가지를 남긴다.

1. 핵심 개념 노트
2. 직접 작성한 최소 예제
3. 프로젝트 적용 또는 기존 코드 분석
4. 면접 질문과 자신의 답변

### 자료의 우선순위

1. 공식 문서와 웹 표준
2. UMC 워크북
3. 검증된 서적과 기술 문서
4. 블로그와 영상

UMC 문서와 `fe-interview` 문서에서 공식 문서와 다른 설명을 발견하면 공식 문서를 기준으로 수정한다.

### 학습 완료 기준

다음 세 조건을 만족해야 해당 주제를 공부한 것으로 본다.

- 코드를 작성할 수 있다.
- 동작 원리를 자신의 말로 설명할 수 있다.
- 언제 사용하고 언제 사용하지 않을지 판단할 수 있다.

단순히 문서를 읽거나 예제를 따라 친 것은 완료로 계산하지 않는다.

---

# 5. 6월 20일~30일 계획

## 6월 목표

짧은 기간 동안 많은 라이브러리를 익히기보다, React 학습에 필요한 웹 기반 지식과 React의 핵심 모델을 정리한다.

JS Deep Dive 스터디와 동시에 진행하므로 프론트엔드 스터디는 5회로 제한한다.

| 회차 |   권장일 | 주제                                         | UMC 연결      |
| ---- | -------: | -------------------------------------------- | ------------- |
| 1    | 6월 21일 | 시맨틱 HTML, CSS 레이아웃, 반응형, 접근성    | Chapter 00    |
| 2    | 6월 23일 | 브라우저 렌더링, DOM, 이벤트, HTTP 요청 흐름 | Chapter 00·03 |
| 3    | 6월 25일 | React 렌더링, JSX, 컴포넌트, props와 state   | Chapter 02    |
| 4    | 6월 27일 | 상태 설계, Effect, Context, Router           | Chapter 02·03 |
| 5    | 6월 30일 | API 통신 미니 앱과 6월 종합 복습             | Chapter 03    |

권장 시간은 회차당 2~3시간이다. 프로젝트 일정이 많은 날에는 개념 노트와 실습을 다른 날로 분리한다.

---

## 6월 1회차: HTML·CSS·접근성

### 학습 범위

- 시맨틱 HTML
- 제목 구조와 문서 구조
- form, label, button의 의미
- block formatting context의 기초
- CSS cascade, 상속, 명시도
- box model과 `box-sizing`
- Flexbox와 Grid의 선택 기준
- `position`과 stacking context
- 반응형 레이아웃
- 키보드 탐색과 포커스
- 접근 가능한 이름
- ARIA의 기본 원칙

### UMC 활용

- `keyword/chapter00/html.md`
- `keyword/chapter00/css.md`
- Chapter 00 HTML·CSS 미션

UMC 문서는 빠른 복습에 사용하고, 접근성과 CSS 동작 원리는 MDN을 기준으로 보충한다.

### 반드시 답할 질문

1. `div` 대신 시맨틱 요소를 사용하면 무엇이 좋아지는가?
2. `<button>`과 클릭 이벤트를 붙인 `<div>`는 어떤 차이가 있는가?
3. CSS cascade에서 어떤 선언이 최종 적용되는가?
4. Flexbox와 Grid는 각각 어떤 레이아웃에 적합한가?
5. `z-index`를 크게 설정했는데도 요소가 위로 올라오지 않을 수 있는 이유는 무엇인가?
6. 접근 가능한 폼 오류 메시지는 어떻게 제공해야 하는가?

### 실습

Chapter 00의 화면 하나를 다음 조건으로 다시 구현한다.

- 시맨틱 요소 사용
- 마우스 없이 모든 기능 사용 가능
- 모바일·태블릿·데스크톱 대응
- Flexbox와 Grid를 각각 한 번 이상 사용
- 포커스 스타일 제거 금지
- 이미지에 적절한 대체 텍스트 적용

### 완료 기준

- Lighthouse Accessibility 검사를 실행한다.
- 키보드만으로 모든 인터랙션을 수행한다.
- 사용한 HTML 요소의 선택 이유를 설명한다.
- Flexbox와 Grid의 선택 이유를 설명한다.
- `fe-interview`에 `semantic-html-and-accessibility.md` 초안을 작성한다.

---

## 6월 2회차: 브라우저·DOM·HTTP

### 학습 범위

- URL 입력 후 화면이 나타날 때까지의 과정
- DNS, TCP, TLS의 역할
- HTTP 요청과 응답
- HTTP 메서드와 주요 상태 코드
- HTML 파싱과 DOM
- CSS 파싱과 CSSOM
- render tree
- style, layout, paint, composite
- JavaScript 실행과 HTML 파싱
- `async`와 `defer`
- 이벤트 캡처링과 버블링
- 이벤트 위임
- History API와 SPA 라우팅

### UMC 활용

- `keyword/chapter00/js.md`
- `keyword/chapter03/react-router.md`
- 영화 API 미션의 Network 탭

### 반드시 답할 질문

1. 주소창에 URL을 입력하면 어떤 과정을 거쳐 화면이 나타나는가?
2. DOM과 CSSOM은 무엇이며 render tree와 어떤 관계인가?
3. layout, paint, composite는 어떻게 다른가?
4. 이벤트 버블링은 무엇이며 이벤트 위임에 어떻게 활용되는가?
5. SPA에서 URL이 바뀌어도 전체 HTML을 다시 받지 않을 수 있는 이유는 무엇인가?
6. CORS 에러는 요청이 서버에 도달하지 않았다는 뜻인가?

### 실습

브라우저 개발자 도구로 UMC 영화 앱 또는 다른 웹페이지를 분석한다.

- Network waterfall 확인
- document, JS, CSS, image 요청 구분
- 요청·응답 헤더 확인
- HTTP 상태 코드 확인
- DOM 이벤트 전파 예제 작성
- `pushState`와 `popstate`로 간단한 라우팅 예제 작성

### 완료 기준

- URL 입력부터 첫 화면까지의 흐름을 그림으로 작성한다.
- Network 패널에서 요청 하나를 골라 요청과 응답을 설명한다.
- 이벤트 위임 예제를 직접 작성한다.
- `fe-interview`에 `browser-rendering-and-request-flow.md`를 작성한다.

---

## 6월 3회차: React 렌더링과 상태

### 학습 범위

- React가 해결하려는 문제
- JSX와 React Element
- 컴포넌트와 props
- 컴포넌트 순수성
- 단방향 데이터 흐름
- state가 스냅샷이라는 의미
- 렌더링을 발생시키는 조건
- render phase와 commit phase
- batching
- 함수형 상태 업데이트
- reconciliation과 `key`
- state 보존과 초기화

### UMC 활용

- `keyword/chapter02/jsx.md`
- `keyword/chapter02/react.md`
- `keyword/chapter02/use-state.md`
- Chapter 02 Todo 미션

### 반드시 답할 질문

1. React 컴포넌트의 렌더링과 실제 DOM 변경은 같은 의미인가?
2. `setState`를 호출한 직후 기존 state 값이 보일 수 있는 이유는 무엇인가?
3. 함수형 업데이트는 언제 필요한가?
4. 리스트의 `key`는 왜 필요한가?
5. `key`를 변경하면 컴포넌트 state가 초기화되는 이유는 무엇인가?
6. 컴포넌트 렌더링 중 부수 효과를 실행하면 안 되는 이유는 무엇인가?

### 실습

Chapter 02 Todo를 대상으로 다음을 수행한다.

- 컴포넌트 경계 다시 설계
- state의 소유 위치 표시
- 배열과 객체를 불변하게 업데이트
- 잘못된 index key 수정
- 연속된 상태 업데이트에서 일반 업데이트와 함수형 업데이트 비교

### 완료 기준

- Todo 앱의 상태 흐름을 그림으로 표현한다.
- 불필요하게 중복 저장된 state를 하나 이상 제거한다.
- render와 commit을 자신의 말로 설명한다.
- `fe-interview`에 `react-rendering-and-state.md`를 작성한다.

---

## 6월 4회차: 상태 설계·Effect·Context·Router

### 학습 범위

- state를 어디에 둘 것인가
- derived state
- controlled·uncontrolled component
- 상태 끌어올리기
- reducer가 적합한 상황
- Context의 역할과 한계
- Effect의 목적
- Effect가 필요 없는 경우
- 의존성 배열
- cleanup
- stale closure
- React Router와 History API
- 중첩 라우트와 URL 상태

### UMC 활용

- `keyword/chapter02/use-context.md`
- `keyword/chapter03/use-effect.md`
- `keyword/chapter03/react-router.md`
- Chapter 02 다크 모드
- Chapter 03 영화 앱

### 반드시 답할 질문

1. 계산할 수 있는 값을 별도 state로 저장하면 어떤 문제가 생길 수 있는가?
2. Context를 모든 전역 상태에 사용하면 어떤 문제가 생기는가?
3. `useEffect`는 어떤 외부 시스템과 동기화할 때 필요한가?
4. 이벤트 핸들러에서 처리할 일을 Effect로 옮기면 어떤 문제가 생길 수 있는가?
5. stale closure는 무엇인가?
6. URL을 상태로 사용하면 어떤 장점이 있는가?

### 실습

영화 앱에 다음 기능을 추가하거나 기존 코드를 분석한다.

- 검색 조건을 URL search params에 저장
- API 요청 취소 또는 오래된 응답 무시
- 로딩·에러·빈 결과 UI 분리
- 이벤트 또는 타이머 cleanup
- 불필요한 Effect 한 개 제거

### 완료 기준

- Effect가 필요한 코드와 필요 없는 코드를 구분한다.
- Context, props, URL state 중 어떤 방법을 선택할지 설명한다.
- cleanup이 필요한 예제를 직접 작성한다.
- `fe-interview`에 `effect-context-and-url-state.md`를 작성한다.

---

## 6월 5회차: API 통신 미니 앱과 종합 복습

### 구현 과제

공개 API를 이용해 작은 React 애플리케이션을 만든다.

필수 조건:

- TypeScript 사용
- React Router 사용
- 목록과 상세 페이지
- 로딩·에러·빈 결과 상태
- 검색 조건을 URL에 저장
- API 함수와 UI 컴포넌트 분리
- semantic HTML 사용
- 모바일 대응
- 키보드 탐색 가능
- Vercel 또는 유사 플랫폼에 배포

TanStack Query는 7월에 깊게 공부하므로 6월에는 기본 `fetch` 또는 Axios로 구현해도 된다.

### 종합 면접 질문

1. SPA란 무엇인가?
2. CSR과 SSR은 어떻게 다른가?
3. Virtual DOM은 무엇이며 항상 빠른가?
4. React에서 state를 직접 변경하면 안 되는 이유는 무엇인가?
5. `useEffect`는 언제 사용하는가?
6. 브라우저 렌더링 과정은 어떻게 진행되는가?
7. 시맨틱 HTML이 접근성과 SEO에 어떤 영향을 주는가?
8. CORS는 무엇인가?

### 6월 최종 결과물

- React 미니 앱 1개
- 배포 URL
- `fe-interview` 문서 4개 이상
- 웹 요청·렌더링 흐름 그림 1개
- Lighthouse 접근성 검사 결과
- 8개 면접 질문의 답변

---

# 6. 7월 계획

## 7월 목표

UMC Chapter 04~10을 이용해 실제 서비스 기능을 구현하면서 TypeScript, 인증, 서버 상태, 전역 상태, 테스트, 빌드와 CI를 학습한다.

7월에는 UMC 프로젝트도 진행되므로 새 토이 프로젝트를 여러 개 만들지 않는다. UMC 미션 또는 실제 프로젝트 한 곳에 학습 내용을 적용한다.

## 7월 주차별 계획

| 주차  | UMC 중심 주제               | 별도 보충 주제                  | 결과물                   |
| ----- | --------------------------- | ------------------------------- | ------------------------ |
| 1주차 | 폼, 인증, 유효성 검사       | TypeScript 타입 모델링, 웹 보안 | 인증 폼과 보안 흐름 문서 |
| 2주차 | OAuth, CORS, 토큰           | HTTP 캐시, API 계층, 에러 처리  | 안전한 API 클라이언트    |
| 3주차 | TanStack Query, 무한 스크롤 | 서버 상태, 테스트               | Query 기반 목록과 테스트 |
| 4주차 | Mutation, 상태 관리, 최적화 | Vite, Webpack, CI/CD            | 상태 설계 문서와 CI      |
| 월말  | 전체 통합                   | 성능·접근성 점검                | 배포 가능한 서비스 기능  |

---

## 7월 1주차: TypeScript·폼·인증

### UMC 범위

- Chapter 04
- React Hook Form
- Zod
- 사용자 인증과 인가
- 클라이언트 저장소
- Access Token과 Refresh Token

### TypeScript 보충

- 타입 추론
- 구조적 타이핑
- `any`, `unknown`, `never`
- 타입 좁히기
- discriminated union
- 제네릭
- `keyof`, `typeof`
- API 응답 타입
- 폼 상태 타입
- strict mode

### 실습

- 로그인·회원가입 폼 구현
- 서버 에러와 클라이언트 검증 에러 구분
- 폼 상태를 discriminated union으로 표현
- API 응답에 `any` 사용 금지
- 토큰 저장 전략과 위협 모델 작성

### 반드시 답할 질문

1. `any`와 `unknown`은 어떻게 다른가?
2. 타입 좁히기가 필요한 이유는 무엇인가?
3. 클라이언트 검증만으로 입력 보안을 보장할 수 있는가?
4. 인증과 인가는 어떻게 다른가?
5. Access Token과 Refresh Token을 분리하는 이유는 무엇인가?
6. 토큰을 localStorage에 저장할 때의 위험은 무엇인가?

### 완료 기준

- 인증 폼 구현
- 타입 오류 없이 `tsc --noEmit` 통과
- 토큰 저장 전략 문서
- 폼 테스트 3개 이상
- 관련 면접 답변을 `fe-interview`에 추가

---

## 7월 2주차: HTTP·보안·API 계층

### UMC 범위

- Chapter 05
- CORS
- OAuth 2.0
- RBAC·ABAC
- 보호 라우트
- Axios 인스턴스

### 별도 보충

- HTTP 메서드의 의미
- 주요 상태 코드
- idempotency
- `Content-Type`과 `Accept`
- HTTP 캐시
- `Cache-Control`, `ETag`
- 쿠키 속성
- XSS, CSRF, CSP
- 요청 취소
- API 에러 모델링
- 재시도 정책

### 실습

- 공통 API 클라이언트 작성
- 요청·응답 인터셉터의 책임 제한
- 401 응답 처리
- 토큰 재발급 동시 요청 문제 분석
- 보호 라우트 구현
- CORS preflight를 Network 탭에서 확인
- 에러를 UI 메시지로 변환하는 함수 작성

### 반드시 답할 질문

1. CORS는 브라우저와 서버 중 누가 적용하는가?
2. preflight 요청은 언제 발생하는가?
3. 쿠키 인증과 Authorization 헤더 방식은 어떤 차이가 있는가?
4. 401과 403은 어떻게 다른가?
5. Axios interceptor에 모든 비즈니스 로직을 넣으면 어떤 문제가 생기는가?
6. GET 요청을 무조건 재시도해도 되는가?

### 완료 기준

- 공통 API 계층 구현
- 인증 실패와 일반 API 실패 처리 분리
- CORS 요청 캡처와 설명
- 보안 체크리스트 작성
- `fe-interview`의 HTTP·보안 문서 보완

---

## 7월 3주차: TanStack Query·서버 상태·테스트

### UMC 범위

- Chapter 06
- `useQuery`
- `useInfiniteQuery`
- `staleTime`, `gcTime`
- pagination
- Intersection Observer
- Skeleton UI

### 별도 보충

- 클라이언트 상태와 서버 상태
- query key 설계
- 캐시 신선도
- loading과 background fetching
- offset·cursor pagination
- Error Boundary
- React Testing Library
- Vitest
- MSW

### 실습

- 목록 조회를 TanStack Query로 이전
- query key factory 작성
- 무한 스크롤 구현
- 로딩·에러·빈 상태 구분
- 요청 중복과 캐시 동작 확인
- MSW로 성공·실패·빈 결과 테스트

### 반드시 답할 질문

1. 서버 상태를 `useEffect + useState`로만 관리하면 무엇이 어려운가?
2. `staleTime`과 `gcTime`은 어떻게 다른가?
3. query key를 잘못 설계하면 어떤 문제가 생기는가?
4. `isPending`과 `isFetching`은 어떻게 다른가?
5. offset과 cursor pagination의 장단점은 무엇인가?
6. 구현 세부사항보다 사용자 행동을 테스트해야 하는 이유는 무엇인가?

### 완료 기준

- Query 기반 목록과 무한 스크롤
- 테스트 5개 이상
- 캐시 동작을 Devtools로 확인한 기록
- query key 설계 문서
- `fe-interview` TanStack Query 문서 개선

---

## 7월 4주차: Mutation·상태 관리·빌드·CI

### UMC 범위

- Chapter 07~10
- `useMutation`
- 캐시 무효화
- 낙관적 업데이트
- debounce·throttle
- Redux Toolkit
- Zustand
- referential equality
- `memo`, `useMemo`, `useCallback`
- Vercel 배포

### 상태 관리 보충

- local state
- lifted state
- URL state
- Context
- reducer
- external store
- server cache
- 상태 종류에 따른 도구 선택

### 빌드 도구 보충

- 브라우저 ESM
- 개발 서버와 프로덕션 빌드
- transpile과 bundle
- dependency pre-bundling
- HMR
- tree shaking
- code splitting
- dynamic import
- source map
- 환경 변수
- Vite와 Webpack 비교

### CI 보충

- lint
- typecheck
- unit·integration test
- production build
- GitHub Actions
- preview deployment

### 실습

- 생성·수정·삭제 Mutation 구현
- 실패 시 rollback되는 낙관적 업데이트 구현
- 검색에 debounce 적용
- 상태를 종류별로 분류
- Redux Toolkit 또는 Zustand 중 하나를 선택해 적용
- 선택하지 않은 도구와의 트레이드오프 기록
- route-level code splitting 적용
- GitHub Actions에 lint, typecheck, test, build 추가

### 반드시 답할 질문

1. 낙관적 업데이트가 적합하지 않은 작업은 무엇인가?
2. Redux Toolkit과 Zustand는 어떤 상황에서 선택할 수 있는가?
3. Context는 상태 관리 라이브러리를 완전히 대체하는가?
4. `useMemo`와 `useCallback`은 언제 오히려 비용이 되는가?
5. Vite의 개발 서버가 빠른 이유는 무엇인가?
6. tree shaking이 가능하려면 어떤 조건이 필요한가?
7. CI에서 typecheck와 build를 모두 실행하는 이유는 무엇인가?

### 완료 기준

- Mutation 기능 2개 이상
- rollback 가능한 낙관적 업데이트 1개
- 상태 분류와 도구 선택 문서
- route code splitting
- GitHub Actions CI 통과
- Preview 배포 URL

---

## 7월 월말 통합 점검

### 기능 점검

- 인증과 보호 라우트
- 폼 검증
- 서버 상태 조회
- Mutation과 캐시 갱신
- 로딩·에러·빈 상태
- 전역 상태
- 반응형 UI
- 접근성
- 테스트
- CI와 배포

### 7월 최종 결과물

- UMC 서비스 또는 프로젝트에 설명 가능한 기능 3개 이상
- 테스트 8개 이상
- GitHub Actions workflow
- 상태 관리 선택 문서
- 인증·보안 흐름 문서
- Vite와 Webpack 비교 문서
- `fe-interview` 문서 8개 이상 추가 또는 개선

---

# 7. 8월 계획

## 8월 목표

8월에는 새로운 개념을 계속 추가하기보다, 학습한 내용을 MANDA React 재구현에 통합하고 측정 가능한 개선 경험을 만든다.

핵심은 다음 세 가지다.

1. 설계 근거가 있는 React 애플리케이션
2. 접근성과 성능을 측정하고 개선한 기록
3. 면접과 포트폴리오에서 설명 가능한 기술 의사결정

## 8월 주차별 계획

| 주차  | 프로젝트 단계 | 학습 주제                   | 결과물                    |
| ----- | ------------- | --------------------------- | ------------------------- |
| 1주차 | 분석·설계     | 요구사항, 아키텍처, 접근성  | 설계 문서와 프로젝트 골격 |
| 2주차 | 핵심 구현     | 컴포넌트, 상태, API, 테스트 | 주요 사용자 흐름          |
| 3주차 | 품질 개선     | 성능, 빌드, 접근성, 반응형  | 전후 측정 보고서          |
| 4주차 | 확장·정리     | SSR, Next.js, WebView, 배포 | 배포본과 포트폴리오 문서  |

---

## 8월 1주차: MANDA 분석과 설계

### 수행 작업

- 기존 MANDA 기능 목록 작성
- 핵심 사용자 흐름 선정
- 페이지와 라우트 정의
- 컴포넌트 경계 설계
- 상태 종류 분류
- API 또는 저장소 인터페이스 설계
- 접근성 요구사항 작성
- 반응형 기준 작성
- 기술 스택 선택 이유 작성

### 상태 분류표

각 상태를 다음 중 하나로 분류한다.

| 상태 종류            | 예시                     | 기본 선택            |
| -------------------- | ------------------------ | -------------------- |
| 지역 UI 상태         | 모달, 입력값             | `useState`           |
| 복잡한 지역 상태     | 다단계 폼                | `useReducer`         |
| URL 상태             | 검색, 필터, 페이지       | Router search params |
| 공유 클라이언트 상태 | 테마, 사용자 UI 설정     | Context 또는 Zustand |
| 서버 상태            | 목표 목록, 사용자 데이터 | TanStack Query       |

### 문서

- 프로젝트 목표
- 사용자 흐름
- 디렉터리 구조
- 상태 관리 전략
- API 계층 전략
- 접근성 체크리스트
- 테스트 전략
- 배포 전략

### 완료 기준

- 핵심 사용자 흐름 3개 정의
- 화면·컴포넌트 구조 작성
- 상태별 관리 도구 결정
- 구현 전 Lighthouse 기준값 측정 또는 기존 버전 분석
- ADR 형식의 기술 선택 문서 2개 작성

---

## 8월 2주차: 핵심 기능 구현

### 구현 기준

- TypeScript strict mode
- 의미 있는 컴포넌트 경계
- API와 UI 로직 분리
- 로딩·에러·빈 상태
- 키보드 조작
- 모바일·데스크톱 대응
- 사용자 행동 기반 테스트
- 핵심 기능마다 작은 PR 단위 유지

### 필수 구현

- 목표 또는 계획 생성
- 목록 조회
- 수정·삭제
- 필터 또는 검색
- 상태 유지
- 오류 복구

### 테스트

- 핵심 사용자 흐름 통합 테스트
- 폼 검증 테스트
- API 성공·실패 테스트
- 상태 변경 테스트
- 가능하면 Playwright E2E 1개

### 완료 기준

- 핵심 사용자 흐름 3개 동작
- 테스트 10개 이상
- lint, typecheck, test, build CI 통과
- Preview 배포
- 주요 기능별 구현 이유 기록

---

## 8월 3주차: 성능·접근성·빌드 최적화

### 측정 도구

- Lighthouse
- Chrome Performance
- Chrome Network
- React Profiler
- 번들 분석 도구

### 성능 학습 범위

- LCP
- INP
- CLS
- critical rendering path
- long task
- main thread
- 이미지와 폰트 로딩
- code splitting
- lazy loading
- cache strategy
- 불필요한 리렌더링
- 리스트 가상화가 필요한 조건

### 개선 후보

- route-level code splitting
- 이미지 크기와 포맷 개선
- font preload 또는 font-display
- 불필요한 JavaScript 제거
- 컴포넌트 경계 조정
- 실제 병목이 확인된 부분만 memoization
- 레이아웃 이동 방지
- 요청 캐시 정책 개선
- 검색 입력 debounce

### 접근성 점검

- 시맨틱 구조
- 제목 순서
- label과 오류 메시지
- focus order
- focus visibility
- modal focus trap
- 색상 대비
- 키보드 사용
- 스크린 리더 이름
- reduced motion

### 성능 보고서 형식

```text
문제:
측정 도구:
개선 전 수치:
원인 가설:
적용한 변경:
개선 후 수치:
부작용 또는 트레이드오프:
```

### 완료 기준

- 성능 문제 2개 이상 측정
- 개선 전후 수치 기록
- 접근성 문제 3개 이상 수정
- 번들 구성 확인
- 불필요한 memoization 제거 또는 실제 병목에 적용
- 성능·접근성 보고서 작성

---

## 8월 4주차: SSR·Next.js·WebView·최종 정리

### SSR 학습 범위

- CSR, SSR, SSG, ISR
- hydration
- hydration mismatch
- 서버와 클라이언트 실행 환경
- Server Component와 Client Component
- 데이터 패칭과 캐시
- SEO와 metadata

MANDA 전체를 Next.js로 다시 만들 필요는 없다. 핵심 페이지 한 개를 대상으로 렌더링 전략을 비교하거나 작은 별도 예제로 검증한다.

### WebView 학습 범위

- 웹과 네이티브 앱의 경계
- WebView의 장단점
- JavaScript bridge
- 인증과 쿠키
- 뒤로 가기와 navigation
- safe area와 키보드
- 파일 업로드
- 외부 링크 처리
- 보안 고려사항

실제 모바일 앱 내 웹앱 경험이 없다면 경험을 과장하지 않고, 구조와 고려사항을 설명할 수 있는 수준까지 학습한다.

### 최종 정리

- README 작성
- 아키텍처 그림
- 기술 선택 이유
- 주요 트레이드오프
- 성능 개선 결과
- 접근성 개선 결과
- 테스트 전략
- 배포 구조
- 회고

### 완료 기준

- MANDA React 배포본
- README
- 아키텍처 문서
- 성능·접근성 보고서
- 테스트와 CI
- SSR 비교 실습
- WebView 고려사항 문서
- 프로젝트 면접 답변

---

# 8. 주간 운영 방식

## 권장 주간 루틴

프로젝트 일정과 함께 운영할 수 있도록 프론트엔드 공부는 주 4회로 제한한다.

| 요일 유형          | 수행 내용                    | 권장 시간 |
| ------------------ | ---------------------------- | --------: |
| 개념 학습 1회      | 공식 문서와 원리 학습        |   60~90분 |
| 워크북·실습 1회    | UMC 내용과 작은 예제         |  90~120분 |
| 프로젝트 적용 1회  | 실제 기능 구현 또는 리팩터링 |   2~3시간 |
| 복습·면접 정리 1회 | 설명, 테스트, 문서화         |   60~90분 |

### 한 회차 운영

```text
10분: 오늘 답할 질문 작성
40분: 공식 문서와 워크북 확인
60분: 최소 예제 또는 프로젝트 적용
20분: 면접 답변 작성
10분: 다음에 확인할 문제 기록
```

### 주간 계획 원칙

- 한 주에 핵심 주제는 최대 2개만 잡는다.
- 라이브러리 사용법보다 문제와 선택 이유를 먼저 적는다.
- 프로젝트에 적용하지 못한 개념은 작은 예제로 검증한다.
- 일요일에 다음 주 P1 작업 3개만 선정한다.
- 밀린 학습은 다음 주에 모두 이월하지 않고 중요도를 다시 평가한다.

---

# 9. `fe-interview` 저장소 운영 방식

`fe-interview`는 복사한 지식 저장소가 아니라, 검증한 답변을 축적하는 면접용 지식 베이스로 사용한다.

## 문서 작성 기준

각 문서는 다음 구조를 따른다.

```markdown
# 질문

## 한 문장 답변

## 동작 원리

## 예제

## 장점과 한계

## 언제 사용하는가

## 프로젝트에서의 경험

## 꼬리 질문

## 참고한 공식 자료
```

## 우선 작성할 문서

### 6월

- 시맨틱 HTML과 접근성
- 브라우저 렌더링
- URL 입력부터 화면까지
- React 렌더링과 state
- Effect와 외부 시스템 동기화
- CSR과 SPA routing

### 7월

- TypeScript 타입 좁히기
- 인증과 인가
- 쿠키와 토큰
- CORS
- HTTP cache
- TanStack Query
- 상태 관리 도구 선택
- Vite와 Webpack
- 프론트엔드 테스트
- CI/CD

### 8월

- Core Web Vitals
- React 성능 최적화
- 접근성 점검
- SSR과 hydration
- Server Component
- WebView
- 프로젝트 기술 선택
- 점진적 리팩터링과 마이그레이션

## 면접 답변 기준

답변은 다음 순서로 구성한다.

```text
정의
→ 동작 원리
→ 장단점
→ 선택 기준
→ 프로젝트 경험
```

경험이 없는 내용은 경험한 것처럼 작성하지 않는다. 대신 다음처럼 구분한다.

- 직접 구현한 경험
- 프로젝트 코드를 분석한 경험
- 작은 예제로 검증한 경험
- 개념만 학습한 상태

---

# 10. 최종 프로젝트에서 만들어야 할 경험

채용 공고의 요구를 단순 키워드가 아니라 실제 결과물로 연결한다.

| 채용 키워드  | 만들어야 할 증거                            |
| ------------ | ------------------------------------------- |
| HTML·CSS·JS  | 시맨틱·반응형 UI와 접근성 점검              |
| React        | 상태와 컴포넌트 설계가 포함된 프로젝트      |
| TypeScript   | strict mode와 안전한 API·상태 타입          |
| 상태 관리    | 상태 분류와 도구 선택 근거                  |
| Vite·Webpack | 빌드 흐름과 번들 분석 문서                  |
| 성능 최적화  | 개선 전후 측정 수치                         |
| 웹 표준      | 키보드·스크린 리더·시맨틱 점검              |
| SSR          | CSR·SSR 비교 예제와 hydration 설명          |
| WebView      | 연동 고려사항과 작은 검증 예제              |
| 마이그레이션 | 기존 MANDA를 단계적으로 React로 이관한 기록 |
| Git·CI       | 작은 PR, 코드 리뷰, 자동화된 CI             |
| 협업         | 요구사항 변경과 의사결정 기록               |
| 문제 해결    | 문제 발견 → 원인 분석 → 해결 → 검증 문서    |

---

# 11. 학습 범위 조정 기준

## 시간이 부족할 때 반드시 유지

1. React 렌더링과 상태
2. HTTP·브라우저
3. TypeScript
4. 서버 상태와 API
5. 테스트
6. 접근성
7. 측정 기반 성능 개선

## 시간이 부족할 때 축소 가능

- Redux와 Zustand를 모두 깊게 구현하기
- Webpack 설정을 처음부터 직접 작성하기
- 고급 타입 체조
- 복잡한 애니메이션
- WebView 실제 앱 배포
- Next.js 전체 프로젝트 재작성

Redux Toolkit과 Zustand는 둘 다 사용법을 암기하기보다 하나를 실제 프로젝트에 적용하고, 다른 하나와의 선택 기준을 설명할 수 있으면 된다.

## 하지 않을 것

- 학습용 프로젝트를 여러 개 동시에 시작하기
- 측정 없이 `useMemo`와 `useCallback`을 추가하기
- 모든 상태를 전역 상태로 만들기
- 모든 API 요청을 Effect에 직접 작성하기
- 블로그 내용을 검증 없이 면접 답변으로 사용하기
- 라이브러리 사용 경험을 원리 이해로 착각하기

---

# 12. 월별 최종 완료 조건

## 6월 완료 조건

- React 미니 앱 배포
- HTML·CSS·접근성 점검
- 브라우저 요청·렌더링 흐름 설명
- React 렌더링과 Effect 설명
- `fe-interview` 문서 4개 이상

## 7월 완료 조건

- 인증과 API 기능 구현
- TanStack Query와 Mutation 적용
- 상태 관리 도구 선택 및 적용
- 테스트 8개 이상
- GitHub Actions CI
- Vite·Webpack 비교 설명
- `fe-interview` 문서 8개 이상 추가 또는 개선

## 8월 완료 조건

- MANDA React 재구현 및 배포
- 핵심 사용자 흐름 테스트
- 접근성 점검
- 성능 개선 전후 수치
- SSR 비교 실습
- 프로젝트 README와 아키텍처 문서
- 프로젝트 면접 답변

---

# 13. 회차별 학습 노트 템플릿

````markdown
# 주제

## 오늘 답할 질문

-

## 한 문장 설명

-

## 동작 원리

-

## 최소 예제

```tsx
// 직접 작성한 코드
```

## UMC 내용과 연결

- 관련 Chapter:
- 확인한 코드:
- 보완이 필요한 설명:

## 프로젝트 적용

- 적용 위치:
- 변경 이유:
- 선택하지 않은 대안:
- 트레이드오프:

## 검증

- 테스트:
- 개발자 도구:
- 측정 결과:

## 면접 답변

- 기본 질문:
- 답변:
- 예상 꼬리 질문:

## 아직 설명하지 못하는 것

-

## 다음 복습일

-
````

---

# 14. 주요 학습 자료

공식 자료를 우선 사용한다.

## 웹 기반

- [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [web.dev Learn Performance](https://web.dev/learn/performance)
- [web.dev Learn Accessibility](https://web.dev/learn/accessibility)

## React

- [React Learn](https://react.dev/learn)
- [React Reference](https://react.dev/reference/react)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

## TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 『이펙티브 타입스크립트』

## 상태와 데이터

- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Zustand Documentation](https://zustand.docs.pmnd.rs/)

## 빌드·테스트·배포

- [Vite Guide](https://vite.dev/guide/)
- [Webpack Concepts](https://webpack.js.org/concepts/)
- [Vitest Guide](https://vitest.dev/guide/)
- [Testing Library](https://testing-library.com/docs/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## SSR

- [Next.js Documentation](https://nextjs.org/docs)

## 학습용 저장소

- [haewonwon/10th_Web](https://github.com/haewonwon/10th_Web)
- [haewonwon/fe-interview](https://github.com/haewonwon/fe-interview)
