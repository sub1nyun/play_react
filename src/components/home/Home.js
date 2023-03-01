import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

// props(변수, 함수 모두 가능) -> Homepage -> Home으로 데이터를 자식에게 넘기는(passing) 기법
// 자식 -> 부모에게 전달은 불가능함

// 스타일 컴포넌트는 함수 밖에
// 부모로부터 받은 props와 내부 props가 다름 
const StyledDeleteButton = styled.button`
    color: ${(props) => (props.user.username === 'ssar' ? "blue" : "red")};
`;

// 스타일 상속 -> 확장
const StyledAddButton = styled(StyledDeleteButton)`
// color 상속 받음
    background-color: green;
`;


// Function 방식 여러개 일 수 있음, 기본적으로 props 라고 함
// 1. 부모로 부터 받은 데이터를 25번 줄에서 user를 넘겨서 스타일 컴포넌트에서 받기
const Home = (props) => {

    // 구조분할 할당
    const {boards, setBoards, number, setNumber, user} = props; // props의 boards가 자동으로 들어감 key 값과 동일해야함

//<StyledDeleteButton user={user} onClick={() => setBoards([])}>전체 삭제</StyledDeleteButton>
//                        ▲ Passing 

    return (
        <div>
            <Button variant="primary">Primary</Button>
            <StyledAddButton user={user}>더하기</StyledAddButton>
            <h1>홈:{number}</h1>
            <h2>뭐임:{user.username}</h2>
            <button onClick={() => setNumber(number+1)}>번호증가</button>
            <StyledDeleteButton user={user} onClick={() => setBoards([])}>전체 삭제</StyledDeleteButton>
            {boards.map((board) => <h3>제목 : {board.title} 내용: {board.content}</h3>)}
        </div>
    );
};

export default Home;