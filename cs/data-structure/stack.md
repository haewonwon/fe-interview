### 우리 주위에서 스택의 예

- 주방의 접시 더미
- 책상에 쌓여 있는 책
- 창고에 쌓여 있는 상자 더미

⇒ 이들의 공통점: 넣고 빼는 동작이 어느 한쪽에서만 이루어짐  
⇒ 넣을 때는 항상 더미의 맨 위에 올리고, 꺼낼 때도 맨 위에서만 꺼냄  
⇒ 다른 위치에서의 삽입과 삭제는 허용하지 않음

### 스택이란?

- 마지막에 들어간 자료가 가장 먼저 나오는 자료구조
- 자료의 입출력이 후입선출(LIFO: Last-In First-Out)의 형태로 제한되는 자료구조
- 다른 통로들은 모두 막고 한쪽만을 열어둔 구조
- 이때 열린 곳을 보통 스택 상단(stack top)이라 부름
- 스택에 저장되는 것을 항목 또는 요소(Element)라 부름
- 결국 스택은 요소의 삽입과 삭제가 상단에서만 가능한 자료구조

### **스택의 활용: 웹 브라우저의 [이전 페이지로 이동]**

- 스택은 입력의 역순으로 자료를 꺼내야 할 때 사용됨
- 편집기에서의 되돌리기(undo) 기능, 웹 브라우저의 이전 페이지로 이동 기능

### **추상 자료형**

- 모든 변수나 상숫값은 정해진 자료형을 가짐
- 새로운 자료형을 정의하기 위해 그 자료형의 자세하고 복잡한 내용 대신 필수적이고 중요한 특징만 골라서 단순화시키는 작업 ⇒ 추상화(abstraction)
- 추상 자료형(ADT: Abstract Data Type): 추상화를 통해 정의한 자료형

### **스택의 연산**

- 삽입과 삭제가 스택의 핵심적인 연산

```python
push(e) # 새로운 요소 e를 스택의 맨 위에 추가
pop() # 스택의 맨 위에 있는 요소를 꺼내서 반환
isEmpty() # 스택이 비어 있으면 True를, 아니면 False를 반환
isFull() # 스택이 가득 차 있으면 True를, 아니면 False를 반환
peek() # 스택의 맨 위에 있는 항목을 삭제하지 않고 반환
size() # 스택에 들어 있는 전체 요소의 수를 반환
```

- 스택에서는 삽입과 삭제를 push와 pop이라 부름
- 스택에 연산을 적용하다 보면 두 가지 오류 상황을 만날 수 있음
  - 포화 상태인 스택에 새로운 요소를 삽입하는 경우
    - 입력이 더는 불가능하므로 오류가 발생하는데, 이것을 스택 오버플로(overflow)라고 함
  - 공백 상태의 스택에서 pop()이나 peek()을 호출하면 삭제나 참조가 불가능하므로 언더플로(underflow) 오류가 발생함
- 스택을 안정적으로 사용하기 위해서는 상태 검사가 필요함

### 자료구조의 구현 방법들

- 배열 구조
  - 자료들을 배열에 모아 저장하는 방법
  - 모든 요소는 인접한 메모리 공간에 저장됨
  - 크기가 고정된 일반 공책과 비슷함
  - 각 페이지를 찾아 편리하게 사용할 수는 있지만, 공책이 가득 차면 더는 저장할 수 없음
- 연결된 구조
  - 인접한 메모리 공간이 아니라 흩어져 있는 요소들을 연결하여 하나로 관리하는 방법
  - 바인더 공책처럼 페이지의 위치를 바꾸거나 새로운 페이지를 쉽게 추가하고 삭제할 수 있어 배열 구조보다 유연하게 사용할 수 있음
  - 하지만 그만큼 관리하기 복잡함

### 배열 구조의 스택을 위한 데이터

- 배열을 이용한 스택의 구조는 요소를 저장하기 위해 하나의 배열을 사용함
- 추가적인 변수를 이용하면 스택을 더 편리하게 관리할 수 있음
- 배열(array)은 요소들을 저장할 공간이고, 용량(capacity)은 이 공간의 크기로 한 번 만들어지고 나면 고정되는 상수임
- 상단을 위한 top은 인덱스를 저장하는 변수로, 가장 최근에 삽입된 요소의 위치를 가리키도록 함

```python
capacity = 10 # 용량을 10으로 지정
array = [None]*capacity # 요소 배열: [None, ... , None] (길이는 capacity)
top = -1 # 공백 상태(-1)로 초기화함
```

### 스택의 연산

- 스택이 비어 있는지 또는 가득 차 있는지는 top을 이용해 확인할 수 있음
- 스택이 공백일 때 top은 -1이고, 포화 상태이면 top은 capacity-1임

```python
def isEmpty() :
		if top == -1 : return True # 공백이면 True 반환
		else : return False # 아니면 False 반환

def isFull() : return top == capacity-1 # 비교 연산 결과를 바로 반환
```

- 삽입을 위해서는 먼저 top을 하나 증가시켜야 함
- 다음에 그 위치에 삽입할 요소 e를 복사하면 삽입이 완료됨
- 다만 삽입이 가능하려면 전제 조건이 있는데, 포화 상태가 아니어야 한다는 것임
- 만약 스택이 포화 상태라면 오버플로 오류 상태가 되어 삽입은 불가능함
- 따라서 push() 연산에서는 스택이 포화 상태가 아닌지를 먼저 검사해야 함

```python
def push(e) :
	# global top
	if not isFull() : # 포화 상태가 아닌 경우
			top += 1 # top 증가 (global top 선언 필요)
			array[top] = e
	else :
			print("stack overflow")
			exit()
```

- 삭제 연산이 가능하려면 스택에 최소한 하나 이상의 요소가 남아 있어야 함
- 따라서 pop() 연산에서는 먼저 공백 상태를 검사해야 함

```python
def pop() :
		# global top
		if not isEmpty() : # 공백 상태가 아닌 경우
				top -= 1 # top 감소
				return array[top+1] # 이전(top+1) 위치의 요소 반환
		else : # 공백 상태: underflow
				print("stack underflow")
				exit()
```

- peek()도 공백이 아니어야 가능함
- 단순히 top 위치의 요소를 반환하면 됨

```python
def peek() :
		if not isEmpty() :
				return array[top]
		else : pass
```

- 현재 스택의 요소 수는 top + 1임

```python
def size() : return top+1
```

- 이러한 스택의 구현에는 두 가지 문제가 있음
  - push()와 pop()에서 오류가 발생함
    - top을 전역 변수로 인식하지 못해 생기는 문제임
    - top을 전역 변수로 선언하는 global top 문장을 각 함수에 추가해 간단히 해결할 수 있음
  - 여러 개의 스택이 동시에 필요한 문제에 사용할 수 없음
    - 전역 변수로 선언된 배열이 하나이므로 위 코드는 하나의 스택이 필요한 경우에만 사용할 수 있음

### 스택을 클래스로 구현

- 자료구조는 함수를 기반으로 하는 절차적 프로그래밍보다 클래스를 기반으로 하는 객체 지향 프로그래밍 기법을 이용해 구현하는 게 훨씬 좋음
- 자료구조의 추상 자료형이 클래스의 개념과 정확히 일치하기 때문임

```python
class ArrayStack :
		def __init__(self, capacity) :
				self.capacity = capacity # 스택 용량
				self.array = [None]*self.capacity # 요소 배열
				self.top = -1 # 상단의 인덱스
```

- 클래스의 멤버 변수들은 생성자(constructor)인 **init**() 함수에서 선언하고 초기화함
- 생성자는 클래스의 객체가 만들어질 때마다 자동으로 호출되는 함수임

```python
s1 = ArrayStack(20) # 용량이 20인 ArrayStack 객체 s1 생성
s2 = ArrayStack(100) # 용량이 100인 ArrayStack 객체 s2 생성
```

- 파이썬에서는 생성자를 포함한 클래스의 모든 멤버 함수의 첫 번째 매개변수로 스택 객체 자신을 나타내는 ‘self’를 넣기로 약속되어 있음

### 클래스의 연산

```python
def isEmpty( self ) : return self.top == -1
def isFull( self ) : return self.top == self.capacity-1

def push( self, item ) :
		if not self.isFull() :
				self.top += 1
				self.array[self.top] = item
		else : pass

def pop( self ) :
		if not self.isEmpty() :
				self.top -= 1
				return self.array[self.top+1]
		else : pass

def peek( self ) :
		if not self.isEmpty() :
				return self.array[self.top]
		else : pass

def size() : return top+1
```

### 시스템 스택과 순환 호출

- 스택은 운영체제에서도 매우 중요한 역할을 함
- 운영체제가 관리하는 메모리에는 스택 영역이 있는데 함수의 호출과 반환을 위해 사용됨
- 함수의 호출과 반환을 위해 시스템 스택이 사용됨
- 이러한 시스템 스택을 적극적으로 사용하는 프로그래밍 기법이 있음 ⇒ 순환
- 같은 일을 되풀이하기 위해 for나 while과 같은 반복문을 이용할 수도 있지만 순환(또는 재귀) 호출로도 가능함

### 순환이란?

- 순환(recursion)이란 어떤 함수가 자기 자신을 다시 호출해 문제를 해결하는 프로그래밍 기법임
- 어떤 함수가 자신을 다시 호출하는 것은 다른 함수를 호출하는 것과 동일함
