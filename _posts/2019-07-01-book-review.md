# [책 리뷰] 클린 코드(Clean Code)


## 클린코드 - 애자일 소프트웨어 장인정신 을 읽고
팀에 와서 코드 리뷰를 받으며 기본적인 부분이 많이 부족하다고 느껴 읽어보게 되었습니다.  
책의 예제는 주로 Java로 작성되어 있었지만 저와 같이 Java에 익숙한 개발자가 아니더라도 충분히 이해할 수 있는 내용으로 되어있다고 생각합니다. 전체 내용을 요약하기 보다는 기억에 남는 부분을 정리해 보았습니다.  

### 변수, 상수
  * 매직 숫자는 명명된 상수로 교체하라.
  * 변수와 함수는 사용되는 위치에 가깝게 정의한다.

### 함수
  * 함수는 작게 만들어야 한다.
  * 함수는 한 가지만을 해야 한다.
  * 길고 서술적인 함수 이름이 짧고 어려운 이름보다 좋다.
  * 함수 인수는 적을수록 좋다.
  * 함수 내 추상화 수준을 동일하게 하라
  * 선택자 인수를 사용하지 말라
    * 선택자 인수(함수의 동작을 제어하려는 인수)

### 주석
  * 주석보다는 코드로 의도를 표현해라.

### 테스트
  * 테스트 코드도 실제 코드 못지않게 중요하다.

### 클래스
  * 클래스는 작게 만들어야 한다.
  * 단일 책임 법칙(SRP) - 클래스나 모듈을 변경할 이유가 단 하나뿐이여야 한다.
  * 디미터 법칙 - 모듈은 자신이 조작하는 객체의 속 사정을 몰라 한다.

### 그 외

  * 르블랑의 법칙
    - 나중은 결코 오지 않는다.(나중에 고쳐야지 라고 생각하지 말자. 바로 고치자)
  * 보이스카우트 규칙
    - 체크인할 때 보다 더 깨끗한 코드로 체크아웃하면 코드는 절대 나빠지지 않는다.


### 느낀 점
  책을 읽으면서, 기존에 코드 리뷰 때 받았던 피드백들이 많이 떠올랐습니다.  
  \"코드내 숫자나 문자열은 상수로 교체하는게 좋을 것 같습니다.\",
  \"코드내 일관성을 유지했으면 좋겠다\" 와 같은 피드백이나.  
  테스트 및 예제 코드에서 리뷰를 받을 때 \"이건 예제, 테스트 코드인데 이렇게까지 해야하나..?\" 라는 의문이 생겼던 점도 해소되었습니다.  
  \"함수 이름이 길면 안 이뻐 보인다\" 혹은 \"주석으로 코드를 설명해주면 좋지\" 와 같은 오해를 하고 있었는데 그런 부분도 다시 생각해보게 되었습니다.  
  앞으로 코드를 짤 때 책에서 배운 내용을 활용해서 좀 더 고민해서 개발해봐야겠습니다.

### 같이 보면 좋은 것
 * [clean-code-javascript](https://github.com/qkraudghgh/clean-code-javascript-ko)
    - JS에 관련된 내용이 조금 더 추가되어있다.