# 1회차: 동적 타입, 타입 변환, 원시 값과 객체

## 오늘 답할 질문

- JS는 왜 동적 타입 언어인가?
- 원시 값과 객체는 왜 복사/변경 방식이 다른가?
- `==`, `||`, `??` 같은 연산자는 내부에서 어떤 변환을 일으키는가?

## 핵심 개념

### 동적 타이핑

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 원시 타입과 객체 타입

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 불변성

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 암묵적 타입 변환과 명시적 타입 변환

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### Truthy와 Falsy

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### `==`와 `===`

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### `null`, `undefined`, `NaN`

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 값에 의한 전달과 참조 값의 전달

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 얕은 복사와 깊은 복사

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

## 실행 결과 예측

### 문제 1: 얕은 복사와 중첩 객체

```js
const original = { profile: { name: 'Kim' } };
const copied = { ...original };

copied.profile.name = 'Lee';

console.log(original.profile.name);
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 2: 동등 비교와 일치 비교

```js
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log([] == false);
console.log(NaN === NaN);
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 3: Truthy/Falsy와 동등 비교의 차이

```js
console.log(Boolean([]));
console.log([] == false);
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 4: ||와 ??

```js
const count = 0;
const username = '';

console.log(count || 10);
console.log(count ?? 10);
console.log(username || 'Guest');
console.log(username ?? 'Guest');
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 5: typeof

```js
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {});
```

- 예상 결과:
- 실제 결과:
- 이유:

## 직접 작성한 예제

```js
// 책 예제를 그대로 복사하지 말고,
// 원시 값 복사와 객체 참조 공유를 비교하는 예제를 직접 작성한다.
// 코드
```

## 프로젝트 연결

- 발견한 코드:
- 관련 개념:
- 개선하거나 확인할 점:

## 아직 설명하지 못하는 것

-

## 다음 복습일

-
