# TanStack Query (React Query)

### 정의

- TanStack Query는 클라이언트 애플리케이션에서 서버 상태를 효율적으로 관리하기 위한 React 기반 라이브러리
- 서버 상태는 클라이언트에서 직접 수정할 수 없고, API 요청 등을 통해 가져오거나 갱신해야 하는 데이터

### TanStack Query의 주요 장점

1. 효율적인 캐싱

- 동일한 데이터를 반복 요청하지 않고 캐시에서 불러옴
- staleTime, cacheTime 등 옵션으로 세밀한 캐시 제어 가능
- UX 개선 및 불필요한 네트워크 비용 절감

2. 선언형 데이터 패칭

- useQuery, useMutation, useInfiniteQuery 등 제공
- 데이터 패칭, 리패칭, 무효화 로직을 선언적으로 구성 가능
- 코드 간결성 증가 및 유지보수 용이

3. 에러/로딩 상태 자동 관리

- isLoading, isError, data, error 등의 상태 제공
- 복잡한 상태 관리 코드 제거 가능

4. 자동 리패칭 & 백그라운드 업데이트

- 포커스 시 자동 재요청 (refetchOnWindowFocus)
- 일정 주기마다 자동 새로고침 (refetchInterval)

5. 무효화 기반 리패칭

- queryClient.invalidateQueries를 통해 필요한 데이터만 갱신
- 효율적인 데이터 일관성 유지

### TanStack Query의 단점 및 한계

1. 학습 곡선

- query key, staleTime, cacheTime, queryFn, mutationFn 등 개념이 많고 유연성이 커서 초기에 부담될 수 있음

2. 캐싱 전략 관리의 복잡성

- 갱신 타이밍을 잘못 조절하면 오래된 데이터 노출 또는 불필요한 요청

3. 클라이언트 상태와의 결합 문제

- 서버 상태만 담당하므로, UI 상태나 글로벌 클라이언트 상태는 다른 상태 관리 라이브러리 필요 (예: Zustand, Jotai, Redux 등과 함께 사용)

---

### 인턴 / 신입 기준 TanStack Query 모범 답안 예시

<details>
<summary>TanStack Query는 어떤 라이브러리인가요?</summary>
<div>

> TanStack Query는 React에서 서버 상태를 효율적으로 관리할 수 있도록 도와주는 라이브러리입니다. 서버 상태란 API를 통해 가져오는 데이터처럼 클라이언트가 직접 수정할 수 없는 데이터를 말합니다. 이 라이브러리를 사용하면 비동기 데이터 요청, 캐싱, 에러 처리, 로딩 상태 등을 간편하게 관리할 수 있어서 사용자 경험이 좋아지고, 코드도 훨씬 깔끔해 집니다.

</div>
</details>

<details>
<summary>React Query를 왜 사용하나요? 직접 fetch로 관리하면 안 되나요?</summary>
<div>

> 직접 fetch로 관리할 수도 있지만, 서버 데이터는 로딩, 에러, 재요청, 캐싱 같은 반복적인 로직이 많아서 코드가 복잡해지기 쉽습니다. React Query는 이런 과정을 추상화해서 useQuery나 useMutation 훅으로 간단하게 처리할 수 있고, 캐싱 기능이 내장되어 있어 성능도 개선됩니다. 그래서 fetch만 사용하는 것보다 유지보수나 사용자 경험 면에서 훨씬 효율적이라고 생각합니다.

</div>
</details>

<details>
<summary>useQuery와 useMutation의 차이는 무엇인가요?</summary>
<div>

> useQuery는 데이터를 가져올 때 사용하고, useMutation은 데이터를 변경할 때 사용합니다. 예를 들어, 게시글 목록을 불러올 땐 useQuery를 쓰고, 게시글을 새로 등록하거나 수정, 삭제할 땐 useMutation을 사용합니다.

</div>
</details>

<details>
<summary>캐싱은 어떻게 작동하나요?</summary>
<div>

> React Query는 내부적으로 데이터를 저장해두는 캐시를 유지합니다. 같은 query key로 요청하면 네트워크를 다시 타지 않고 캐시된 데이터를 먼저 보여주고, 필요할 때 다시 백그라운드에서 데이터를 갱신합니다. staleTime이나 cacheTime 같은 옵션으로 갱신 주기나 캐시 보관 시간을 조절할 수 있습니다.

</div>
</details>

<details>
<summary>에러나 로딩 상태는 어떻게 처리하나요?</summary>
<div>

> useQuery나 useMutation 훅을 사용하면 isLoading, isError, data, error 같은 상태 값을 자동으로 제공합니다. 저는 보통 isLoading일 땐 스피너를 보여주고, isError일 땐 에러 메시지를 표시하는 식으로 처리합니다. 덕분에 복잡한 상태 코드를 별도로 작성하지 않아도 돼서 편리했습니다.

</div>
</details>

<details>
<summary>React Query를 사용하면서 어려웠던 점이나 배운 점이 있다면?</summary>
<div>

> 처음에는 staleTime, cacheTime 같은 옵션이 헷갈렸는데, 실습하면서 데이터가 너무 자주 refetch되거나 오래된 데이터를 보여주는 문제가 생기면서 이해가 잘 됐어요. 또, 무효화(invalidateQueries) 기능을 써서 mutation 후에 데이터를 다시 불러오는 것도 직접 써보면서 배웠고, 이를 통해 데이터 일관성을 유지할 수 있다는 걸 느꼈습니다.

</div>
</details>
