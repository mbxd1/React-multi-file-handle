> 배운것

1. SynthecticEvent 는 비동기 함수에서 사용할 수 없다. ( null 값 처리 된다.)
   1. 하지만 e.persist() 를 사용하면 비동기 함수에서도 재사용이 가능하다.
2. Object 를 console.log에 찍었을 때 후처리 된 값이 찍힐수가 있다. 즉, 어떤 코드에서 object 가 null 값인데 후처리 된 값으로 콘솔창에는 있는 값으로 찍힐수가 있다. 
   1. 아직 더 공부를 해봐야 알겠지만, 비동기 콜백을 잘 맞춰 코딩하지 않아서 그런것 같다.
   2. JSON.stringify() 를 사용하면 null 값인지 확인 가능하다. 따라서 Object 를 콘솔에 찍을때는 JSON.stringify 사용하는 습관 갖자



> 공부해야 한다고 느낀것

1. node의 콜 스택, 메시지 큐, 이벤트 루프 
