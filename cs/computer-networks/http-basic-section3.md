# URI와 웹 브라우저 요청 흐름

## URI(Uniform Resource Identifier)

- URI? URL? URN?
- URI는 로케이터(locator), 이름(name) 또는 둘 다 추가로 분류될 수 있음
- URI는 가장 큰 개념
  - 그 안에 URL, URN이 있음
  - URL: Uniform Resource Locator
  - URN: Uniform Resource Name
  - 거의 URL만 사용함

- URI 뜻
  - Uniform: 리소스를 식별하는 통일된 방식
  - Resource: 자원, URI로 식별할 수 있는 모든 것(제한 없음)
  - Identifier: 다른 항목과 구분하는 데 필요한 정보
- URL 뜻
- Locator: 리소스가 있는 위치를 저장
- 위치는 변할 수 있음
- URN 뜻
  - Name: 리소스에 이름을 부여
  - 이름은 변하지 않음
  - URN만으로 실제 리소스를 찾을 수 있는 방법이 보편화되지 않음
- 강의에서는 URI를 URL과 같은 의미로 설명함

### URL 전체 문법

- 예시
  - https://www.google.com:443/search?q=hello&hl=ko
  - scheme://[userinfo@]host[:port][/path][?query][#fragment]

- scheme
  - https
  - 주로 프로토콜 사용
  - 프로토콜
    - 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙
    - e.g., http, https, ftp 등
  - http는 80 포트, https는 443 포트를 주로 사용
  - 포트는 생략 가능

- userinfo
  - URL에 사용자 정보를 포함해서 인증해야 될 때가 있음
  - 다만 거의 사용하지 않음

- host
  - www.google.com
  - 호스트명
  - 도메인명이나 IP 주소를 직접 입력할 수 있음

- PORT
  - 443
  - 접속 포트
  - 일반적으로 생략
  - 생략 시, http는 80, https는 443

- path
  - search
  - 리소스가 있는 경로
  - 계층적 구조로 되어 있음

- query
  - ?q=hello&hl=ko
  - key=value 형태
  - ?로 시작
  - &로 추가 가능
  - query parameter, query string 등으로 불림

- fragment
  - 잘 사용하지는 않음
  - html 내부 북마크 등에 사용됨
  - 서버에 전송하는 정보는 아님

## 웹 브라우저 요청 흐름

1. 웹 브라우저가 DNS 서버를 조회함
2. IP, 포트 정보를 찾아냄
3. HTTP 메세지를 생성함
4. 소켓 라이브러리를 통해 전달

- TCP/IP 연결
- 데이터 전달

5. TCP/IP 패킷 생성

- 출발지 IP, PORT
- 도착지 IP, PORT
- 전송 데이터(=웹 브라우저가 만든 HTTP 메세지)

6. 인터넷망에 전달
7. 수많은 노드를 통해 웹 서버에 도착함
8. 웹 서버에서 TCP/IP 패킷을 까서 버리고, HTTP 메세지를 해석함
9. 웹 서버에서 HTTP 응답 메세지를 만들어 냄
10. 웹 서버로부터 온 응답 메세지를 까면 HTML 데이터가 있음
11. 웹 브라우저가 HTML 랜더링을 함
