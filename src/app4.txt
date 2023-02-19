import logo from './logo.svg';
import './App.css'; // ./ -> 같은 폴더를 의미함
import { useState } from 'react';
import { useEffect } from 'react';
// import { num } from './Sub'; -> 다른 js에서 num넘겨주면 -> {num} 형식으로 사용이 가능함 


function App() {
  const [data, setData] = useState(0);
  //값이 변경 될때 실행해보기
   const [search, setSearch] = useState(0);
  const download = () => {
    //다운로드 받고(통신)
    let downloadData = 5; // 가정한 데이터
    setData(downloadData);
  }

  // 실행시점 : (1) App() 함수가 최초 실행될 때 -> 마운트 될때(그림이 그려질 때)
  // (2) ->상태 변수가 변경될 때  -> App() 재실행 -> 리턴해서 그릴 수 있기 때문에
  // (3) 의존리스트를 관리를 할 수 있음 -> 특정 조건을 뜻함
  // 상태변수가 변경 되어도 -> 변경 전과 동일한 값으로 변경할 경우 작동하지 않음 
  useEffect(() => {
    console.log("userEffect 실행됨");
    download();
  }, [search]); // [] -> 어디에도 의존하지 않는다는 의미 -> 최초에 한 번만 실행
  
  return (
    <div>
      <button onClick={()=>{setSearch(2)}}>검색하기</button>
      <h1>데이터 : {data} </h1>
      <button onClick={()=>{setData(data+1)}}>더하기</button>
    </div>
  );
}

export default App; // 외부에 노출할 함수
// default는 무조건 하나만 가능
// 추가는 export { ~~~ }
