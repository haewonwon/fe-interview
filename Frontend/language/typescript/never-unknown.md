# never, unknown type

### never type

**정의**

- 절대 발생할 수 없는 타입
- 항상 예외를 던지거나 무한 루프를 도는 함수의 반환 타입
- 타입 시스템 상 "모든 타입의 하위 타입 (bottom type)

**특징**

| 특징                  | 설명                                       |
| --------------------- | ------------------------------------------ |
| 반환 불가능           | 함수가 정상적으로 값을 반환할 수 없는 경우 |
| 모든 타입의 하위      | string, number, void 등의 하위 타입        |
| 좁혀진 타입 처리 가능 | exhaustive check를 위해 사용 가능          |

```tsx
function throwError(message: string): never {
  throw new Error(message);
}

function endlessLoop(): never {
  while (true) {}
}
```

**장점**

- 타입 안전: exhaustive check에서 케이스 누락 방지
- 코드 명확성: 반환이 아예 불가능한 함수 의도를 명확히 함

**단점**

- 남용 시 복잡한 코드 가독성 저하.
- 제한적 상황에서만 사용.

**활용**

- switch exhaustive check

```tsx
type Animal = 'cat' | 'dog';

function sound(animal: Animal) {
  switch (animal) {
    case 'cat':
      return 'meow';
    case 'dog':
      return 'bark';
    default:
      const _exhaustiveCheck: never = animal; // 오류 발생 가능
      return _exhaustiveCheck;
  }
}
```

---

### unknown type

**정의**

- 알 수 없는 타입
- any보다 안전하게 "아직 타입이 확정되지 않은 값"을 처리
- 타입 계층 상 모든 타입의 상위 타입 (any와 같은 Top Type)

**특징**

| 특징             | 설명                                                        |
| ---------------- | ----------------------------------------------------------- |
| 안전한 any       | any처럼 모든 값 할당 가능하나 직접 사용 시 타입 좁히기 필요 |
| 런타임 체크 요구 | 사용 전 반드시 타입 체크 필수                               |
| 모든 타입의 상위 | 모든 타입과 호환되지만, 직접 사용 시 제약이 걸림            |

**예시**

```tsx
function handleValue(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (typeof value === 'number') {
    console.log(value + 1);
  }
}
```

**장점**

- 타입 안전: any보다 안전하게 외부 데이터 처리 가능
- 런타임 검증 권장: 타입 좁히기를 통해 오류 가능성 감소

**단점**

- 항상 타입 검증 필요 (귀찮을 수 있음)
- 코드가 장황해질 수 있음

**활용**

- 외부 API 호출 결과
- JSON 파싱 결과
- 사용자가 입력한 값

---

### never, unknown, void 비교

| 구분        | never                             | unknown                      | void                             |
| ----------- | --------------------------------- | ---------------------------- | -------------------------------- |
| 의미        | 절대 발생 불가                    | 알 수 없음                   | 반환 값 없음                     |
| 타입 계층   | 모든 타입의 하위 (bottom)         | 모든 타입의 상위 (top)       | 거의 모든 타입과 별개            |
| 사용처      | 예외, 무한 루프, exhaustive check | 외부 데이터, 안전한 any 대체 | 함수가 아무것도 반환하지 않을 때 |
| 런타임 발생 | 불가 (끝나지 않음)                | 발생 가능 (타입 체크 필요)   | 가능 (정상적으로 종료)           |
| 안전성      | 가장 안전                         | 안전                         | 일반적                           |

---

### 추가로 주의할 점

- never는 모든 타입에 할당 가능하지만 모든 타입에 never를 할당할 수는 없음
- unknown은 모든 타입이 할당 가능하지만 다른 타입에 직접 할당하려면 타입 검증 필수임
- unknown은 실무에서 API 데이터를 받아온 경우, 즉시 unknown을 통해 안전하게 감싸고 typeof나 타입 가드로 검증 후 사용함
- never는 타입 좁히기 체크 시 default case에서 강제 오류를 유도하는 용도로 가장 많이 사용됨
