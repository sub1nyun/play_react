import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';
import { useMemo } from 'react';

// useMemo => 메모라이제이션(기억)

function App() {

  const [list, setList] = useState([1,2,3,4]);
  const [str, setStr] = useState("합계");

  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return { // 오브젝트 넣음  -> {}
      country : isKorea ? '한국' : '외국'
    };
  }, [isKorea]) // useEffect 에서 오래걸리는 작업을 한다면  필요할때만 호출되게 하기



  const getAddResult = () => {
    let sum = 0;
    list.forEach(i => sum = sum + i); // 한 줄이면 {} 필요 없음 -> 리턴을 안 해도 됨
    console.log(sum);
    return sum; // 리턴해주면 화면에 찍힘
  }

 // const addResult = useMemo(()=>getAddResult(), [list]); //기억할 함수를 지정
                                 // ▲ { } 생략을 통해서 return문 생략
 const addResult = useMemo(() => {
  return getAddResult()
 }, [list]);

  return (
    <div>
      <button onClick={() => {setStr("안녕")}}>문자 변경</button>
      <button onClick={() => {setList([...list, 10])}}>리스트값 추가</button>
      <div>
        {list.map(i => <h1>{i}</h1>)}
      </div>
      <div>{str} : {addResult}</div>
    </div>
  );
}

export default App; 

