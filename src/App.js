import logo from './logo.svg';
import './App.css'; 
import styled from 'styled-components';

// div~ 가상의 태그를 만들어서 지정해줌 `` 백틱 사용하는게 좋음
// vscode-styled-components 확장 설치
// js 파일과 css 파일이 하나로 합쳐지기에 -> 컴포넌트화 됨 -> 하나의 파일에서 관리가 가능
const Parent = styled.div` 
  display: flex;
`;

const ChlidBoxOne = styled.div`
  background-color: pink;
  width: 100px;
  height: 100px;
`;

const ChlidBoxTwo = styled.div`
  background-color: black;
  width: 100px;
  height: 100px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: red;
`;

function App() {
  return (
    <div>
      <Title>헬로</Title>
    </div>  
  );
}
export default App; 

