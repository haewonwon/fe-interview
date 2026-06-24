# 2회차: 함수, 스코프, 호이스팅과 TDZ

## 오늘 답할 질문

- `let`과 `const`도 호이스팅되는데 선언 전에 접근할 수 없는 이유는 무엇인가?
- 함수 선언문과 함수 표현식의 호출 가능 시점이 다른 이유는 무엇인가?
- 렉시컬 스코프는 함수의 호출 위치와 선언 위치 중 무엇으로 결정되는가?
- 자바스크립트에서 함수를 일급 객체라고 부르는 이유는 무엇인가?
- 순수 함수가 외부 상태를 다루는 함수보다 예측하기 쉬운 이유는 무엇인가?

## 핵심 개념

### 선언·초기화·할당

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 변수 호이스팅

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 함수 선언문과 함수 표현식

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 함수 레벨 스코프와 블록 레벨 스코프

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 스코프 체인

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 렉시컬 스코프

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### TDZ

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 일급 객체

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 콜백 함수

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

### 순수 함수와 비순수 함수

- 한 문장 정의:
- 왜 필요한가:
- 동작 원리:
- 관련 개념과 차이:

## 실행 결과 예측

### 문제 1: `var` 호이스팅과 함수 스코프

```js
var x = 1;

function outer() {
  console.log(x);
  var x = 2;
  console.log(x);
}

outer();
console.log(x);
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 2: `let`으로 변경했을 때

```js
let x = 1;

function outer() {
  console.log(x);
  let x = 2;
  console.log(x);
}

outer();
console.log(x);
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 3: 함수 선언문과 함수 표현식

```js
console.log(declared());

function declared() {
  return 'function declaration';
}

console.log(expr());

var expr = function () {
  return 'function expression';
};
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 4: 함수 레벨 스코프와 블록 레벨 스코프

```js
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a);
console.log(b);
console.log(c);
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 5: 렉시컬 스코프

```js
const x = 'global';

function outer() {
  const x = 'outer';

  function inner() {
    console.log(x);
  }

  return inner;
}

const innerFn = outer();
innerFn();
```

- 예상 결과:
- 실제 결과:
- 이유:

### 문제 6: 순수 함수와 비순수 함수

```js
let count = 0;

function increaseImpure() {
  count += 1;
  return count;
}

function increasePure(value) {
  return value + 1;
}

console.log(increaseImpure());
console.log(increaseImpure());
console.log(increasePure(0));
console.log(increasePure(0));
```

- 예상 결과:
- 실제 결과:
- 이유:

## 직접 작성한 예제

```js
// 책 예제를 그대로 복사하지 말고,
// var/let/const의 스코프 차이 또는
// 함수 선언문과 함수 표현식의 호출 가능 시점 차이를 보여주는 예제를 직접 작성한다.
```

## 프로젝트 연결

- 발견한 코드:
- 관련 개념:
- 개선하거나 확인할 점:

## 아직 설명하지 못하는 것

-

## 다음 복습일

-
