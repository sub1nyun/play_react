import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';

const HomePage = () => {

    //http 요청 (jquery ajax(리액트 사용 불가) -> js에서는 fetch로 통함, axios(다운))
    // 다운받을 빈 배열 생성 -> 컴포넌트에서 상태 값을 주기보다 페이지가 들고있게하기
    const [boards, setBoards] = useState([]);
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({});

    useEffect(() => {
        //다운로드 가정 -> Io발생 -> 비동기로 돌기때문에 -> 빈데이터가 먼저 들어감
        //빈데이터에서 -> 다운 후 -> 데이터가 들어온다면 렌더되야 하기때문에 상태 변수여야함
        let data = [
            {id:1, title:"제목1", content:"내용1"},
            {id:2, title:"제목2", content:"내용2"},
            {id:3, title:"제목3", content:"내용3"},
        ];
        setBoards([...data]); // Home에 뿌려질 데이터
        setUser({id: 1, username:'cos'});
    }, []); // 빈 배열이라면 최초 한 번만 실행됨 -> 의존 x

    // <Home boards={boards}/> -> props(속성) 라고 하며 -> 데이터 넘기기
    return (
        <div>
            <Header/>
            <Home boards={boards} setBoards={setBoards} number={number} setNumber={setNumber} user={user}/> 
            <Footer/>
        </div>
    );
};

export default HomePage;