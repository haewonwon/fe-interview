class FixedArrayStack {
  // 생성자
  constructor(capacity) {
    this.capacity = capacity; // 스택 용량
    this.array = new Array(capacity); // 길이가 고정된 배열 생성
    this.top = -1; // 상단 인덱스 초기화
  }

  // 스택이 비어있는지 확인
  isEmpty() {
    return this.top === -1;
  }

  // 스택이 가득 찼는지 확인
  isFull() {
    return this.top === this.capacity - 1;
  }

  // 삽입 연산
  push(item) {
    if (!this.isFull()) {
      this.top += 1; // top을 하나 올리고
      this.array[this.top] = item; // 그 위치에 값 저장
      console.log(`Pushed: ${item}`);
    } else {
      console.log('Stack Overflow! (더 이상 넣을 수 없습니다)');
    }
  }

  // 삭제 연산
  pop() {
    if (!this.isEmpty()) {
      const item = this.array[this.top]; // 현재 top에 있는 값을 꺼냄
      this.top -= 1; // top을 하나 내림 (실제 데이터를 지우진 않고 인덱스만 이동)
      return item;
    } else {
      console.log('Stack Underflow! (꺼낼 데이터가 없습니다)');
      return null;
    }
  }

  // 맨 위 요소 확인
  peek() {
    if (!this.isEmpty()) {
      return this.array[this.top];
    } else {
      console.log('Stack is Empty');
      return null;
    }
  }

  // 현재 요소 개수 반환
  size() {
    return this.top + 1;
  }
}

// --- 사용 예시 ---
const stack = new FixedArrayStack(5); // 크기가 5인 스택 생성
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20
console.log(stack.size()); // 1

// 자바스크립트의 배열은 동적(Dynamic)이라서 크기가 알아서 늘어남
// 따라서 capacity나 isFull 검사가 필요 없음
class Stack {
  constructor() {
    this.stack = []; // 빈 배열 생성
  }

  push(item) {
    this.stack.push(item); // JS 배열의 내장 메서드 push 사용
  }

  pop() {
    if (this.isEmpty()) return null; // 혹은 에러 처리
    return this.stack.pop(); // JS 배열의 내장 메서드 pop 사용 (맨 뒤 요소 제거 및 반환)
  }

  peek() {
    if (this.isEmpty()) return null;
    // 배열의 마지막 인덱스 접근 (length - 1)
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}
