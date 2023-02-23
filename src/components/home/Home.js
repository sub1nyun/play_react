import React from 'react';

// props(변수, 함수 모두 가능) -> Homepage -> Home으로 데이터를 자식에게 넘기는(passing) 기법
// 자식 -> 부모에게 전달은 불가능함

// Function 방식 여러개 일 수 있음, 기본적으로 props 라고 함
const Home = (props) => {

    // 구조분할 할당
    const {boards, setBoards, number, setNumber} = props; // props의 boards가 자동으로 들어감 key 값과 동일해야함

    return (
        <div>
            <h1>홈:{number}</h1>
            <button onClick={() => setNumber(number+1)}>번호증가</button>
            <button onClick={() => setBoards([])}>전체 삭제</button>
            {boards.map((board) => <h3>제목 : {board.title} 내용: {board.content}</h3>)}
        </div>
    );
};

export default Home;