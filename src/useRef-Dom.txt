import logo from './logo.svg';
import './App.css'; 
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const inputRef = useRef();

  useEffect(() => {
   // console.log(inputRef);
   inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    //로그인을 마친 후 다시 포커스
    inputRef.current.focus();
  }
  //input의 밸류를 얻을때, e.target.value 뿐만 아니라 
  //useRef를 써서 inputRef.current.value로
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='username'/>
      <button onClick={login}>로그인</button>
    </div>
  );
}
export default App; 

