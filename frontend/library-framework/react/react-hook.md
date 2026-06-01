# React Hook

### 정의

- React Hook은 **함수형 컴포넌트에서 상태 관리와 생명주기 기능을 사용할 수 있도록 하는 함수**
- Hook이 등장하기 전에는 상태 관리가 오직 클래스 컴포넌트에서만 가능했지만, Hook이 도입되면서 함수형 컴포넌트로도 기능을 분리하고 코드 재사용성을 높일 수 있게 되었음

---

### 주요 Hook 종류와 사용 예시

| Hook          | 설명               | 예시                                                  |
| ------------- | ------------------ | ----------------------------------------------------- |
| `useState`    | 컴포넌트 상태 선언 | `const [count, setCount] = useState(0)`               |
| `useEffect`   | 사이드 이펙트 처리 | `useEffect(() => {...}, [deps])`                      |
| `useRef`      | DOM 접근, 값 유지  | `const inputRef = useRef(null)`                       |
| `useMemo`     | 값 캐싱            | `const value = useMemo(() => compute(), [deps])`      |
| `useCallback` | 함수 캐싱          | `const fn = useCallback(() => {...}, [deps])`         |
| `useContext`  | 전역 데이터 접근   | `const theme = useContext(ThemeContext)`              |
| `useReducer`  | 복잡한 상태 관리   | `const [state, dispatch] = useReducer(reducer, init)` |

### 장점

- 클래스 없이도 상태와 생명주기 사용 가능
- 코드의 **응집도**와 **재사용성** 향상
- Custom Hook으로 **공통 로직 분리 용이**
- React의 기능을 더 선언적으로 사용 가능

### Hook의 규칙

1. **항상 컴포넌트 최상단에서 호출해야 함**
   - 조건문, 반복문, 함수 내부 ❌
2. **항상 동일한 순서로 호출되어야 함**
   - 호출 순서가 바뀌면 상태 매핑이 꼬임
3. **React 함수형 컴포넌트 또는 Custom Hook 내부에서만 사용 가능**

> 위 규칙은 `eslint-plugin-react-hooks`를 통해 자동 검사 가능

### 왜 useState를 조건문 안에서 사용하면 안 될까?

- React는 훅을 호출된 **순서대로** 기억하고 상태를 관리함 그런데 `useState`를 조건문 안에서 사용하면 특정 렌더링 시에는 호출되고, 다른 렌더링에서는 호출되지 않을 수 있어 **호출 순서가 꼬이는 문제**가 발생함

### 잘못된 코드 예시

```tsx
function Example({ shouldUseState }) {
  if (shouldUseState) {
    const [count, setCount] = useState(0); // 조건에 따라 호출됨
  }

  return <div>Example Component</div>;
}
```

- shouldUseState가 true일 때는 useState()가 호출됨
- false가 되면 useState() 호출이 생략됨
- 다음 렌더링 시 React의 내부 훅 상태 순서가 어긋남
- 다른 훅들과 매칭이 엇갈려 심각한 버그 발생 가능

### 올바른 코드 예시

```tsx
function Example({ shouldUseState }) {
  const [count, setCount] = useState(0); // 항상 호출

  if (!shouldUseState) return null;

  return <div>{count}</div>;
}
```

### useEffect 안에서는 조건 써도 되나요?

- useEffect는 항상 호출되기만 하면 내부에 조건문을 써도 문제가 없음

```tsx
useEffect(() => {
  if (someCondition) {
    // 조건 로직 OK
  }
}, []);
```

- 조건은 useEffect 내부 로직일 뿐이므로 Hook 호출 순서에는 영향을 주지 않음
