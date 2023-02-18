import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

// <button onClick={add()}>더하기</button> ()를 넣으면 실행하라는 의미 
// onClick시에 함수가 실행될 수 있도록 바인딩만 해야함
function App() {


//  let number = 1; // 상태 값이 아님
const [number, setNumber] = useState(2); // React안에 hooks 라이브러리 사용
// number라는 변수가 생김 -> 변수를 변경하기 위해서는 setNumber를 통해야함 
// 1이 -> number로 -> 값 변경은 setNumber로
  const add = () => {
    setNumber(number+1); // ++은 자기한테 다시 값을 할당하는 것이기에 x 
    // 리엑트에게 number 값 변경하도록 요청하는것 -> 리엑트가 내부적으로 변경함
    // 일반적인 변수 변경은 UI가 렌더링이 되지 않음 -> 상태 값으로 넘겨줘야 리턴
    console.log('add', number);
  }

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub/>
    </div>
  );
}

export default App;
