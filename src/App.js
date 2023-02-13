import logo from './logo.svg';
import './App.css';

// 1. 실행과정
// 2. 문법 

// return은 하나의 Dom만 리턴 할 수 있음
// 변수 선언은 let 혹은 const로 하는것을 권장
// js jsx에 넣으려면 {}를 사용해야함
// jsx 안에서는 if문 사용이 불가능함 -> 삼항연산자를 사용 지원
// 조건부 렌더링 && -> false가 없기때문에 true면 보여줌 아니면 렌더링 안 함
// css 디자인 방법 크게 2가지있음
// css -1 내부에 적는 방법
// css -2 외부 파일에 적고 불러오기
// css -3 번외로 라이브러리 사용(부트스트랩, component-styled)
// css -> class가 아니라 className 이라고 명칭 지정해야함

let a = 10; // 변수
const b = 20; // 상수

function App() {
  let c; 
  let d = undefined; // 정의 되지 않은 값을 의미함 => null과 유사함

  let list = [1,2,3];

  console.log(1,c);
  return (
    <div>
    <div className='box-style'> 
      반갑다 {a === 10 ? '텐' : '아님'}
    </div>
    <h1>하나에 태그에 넣어야함 {b === 20 && '20이다 이말이야'}련아</h1>
    <hr/>
    <div>{list.map((n)=> n)}</div> 
    </div>
  );
}

export default App;
