# HTTP Content-Type 헤더

### 정의

- Content-Type 헤더는 HTTP 요청(Request) 또는 응답(Response) 에서 본문(body)에 포함된 데이터의 형식을 명시하는 헤더임
- 즉, "내가 보내는 데이터는 이런 형식이야" 혹은 "이 데이터는 이런 형식이야" 를 알려주는 역할을 함
- 기본 형식: type/subtype (MIME 타입이라고도 불림)

**예시**

```
Content-Type: application/json
Content-Type: text/html
Content-Type: multipart/form-data
```

### 사용 예시 (프론트엔드 기준)

**1. JSON 전송**

```
fetch('/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: '해원', age: 22 }),
});
```

**2. Form 데이터 전송 (form tag or JS)**

```
const formData = new FormData();
formData.append('file', file);

fetch('/upload', {
  method: 'POST',
  body: formData, // multipart/form-data 자동 설정됨
});
```

**3. URL-encoded 폼 데이터**

```
fetch('/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    name: '해원',
    age: '22'
  }),
});
```

### Content-Type vs Accept

| 항목           | Content-Type                               | Accept                    |
| -------------- | ------------------------------------------ | ------------------------- |
| 의미           | 보내는 데이터의 타입                       | 받고 싶은 데이터의 타입   |
| 요청/응답 위치 | 요청(Request)과 응답(Response) 모두 사용됨 | 요청(Request) 헤더에 사용 |
| 예시           | Content-Type: application/json             | Accept: application/json  |
| 대상           | 본문(body)의 실제 데이터 포맷              | 서버에 기대하는 응답 형식 |

### 추가로 공부하면 좋은 내용

**1. 주요 MIME 타입 목록**

| 형식          | MIME Type                         |
| ------------- | --------------------------------- |
| HTML 문서     | text/html                         |
| 일반 텍스트   | text/plain                        |
| JSON 데이터   | application/json                  |
| XML 데이터    | application/xml                   |
| Form 데이터   | application/x-www-form-urlencoded |
| 파일 업로드용 | multipart/form-data               |
| 이미지 (JPG)  | image/jpeg                        |
| PDF           | application/pdf                   |

**2. multipart/form-data 주의점**

- 파일 전송 시 사용
- boundary 값이 자동으로 포함됨 (개발자가 직접 설정하면 안 됨)
- Content-Type을 직접 설정하면 오류 날 수 있음 → FormData 객체 사용 시 자동 처리됨

**3. charset 지정 (텍스트 인코딩 명시)**

```
Content-Type: text/html; charset=UTF-8
```

### 요약

- Content-Type: 보내는 데이터의 형식을 서버에 명확하게 알리는 역할
- Accept: 받고 싶은 응답 형식을 서버에 요청
- 상황에 맞는 MIME 타입을 정확히 지정해야 의도한 대로 통신이 이루어짐
- 파일 업로드, 폼 전송, JSON API 통신 등에서 자주 사용
