import logo from './logo.svg';
import './App.css'; 
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function App() {
  /*
  const [count, setCount] = useState(0);
  const  countRef = useRef(0); // Ref는 하나의 {오브젝트이며} - current 라는 값을 갖음

  const increaseCountState = ()  => {
    setCount(count +1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current +1;
    console.log(countRef.current);
  }

    return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올리세요</button>
      <button onClick={increaseCountRef}>Ref 값 올려</button>
    </div>
  );

  useRef => 변화는 감지해야 하지만 그 변화가 렌더링을 발생시키면 안 될경우

*/
  const [renderer, setRenderer] = useState(0);
   const countRef = useRef(0); //다시 렌더링이 되더라도 값이 유지가 됨
   let countVar = 0; //App()가 호출 될때마다 0으로 초기화

   const increaseRef = () => {
    countRef.current = countRef.current+1;
   }

   const increaseVar = () => {
    countVar = countVar +1;
   }

   const doRendering = () => {
    setRenderer(renderer + 1);
   }

   const [count, setCount] = useState(1);
   const renderCount =useRef(1);

   useEffect(() => {
    renderCount.current = renderCount.current +1;
   })

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올리세요</button>
      <button onClick={increaseVar}>Var 올리세요</button>
    </div>
  );
}
export default App; 

