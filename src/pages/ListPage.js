import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



const ListPage = () => {

    const [no, setNo] = useState(6)

    const [post, setPost] = useState({
        id:'',
        title:'',
        content:''
    });
    // input 변함 -> 이벤트 발생 -> 해당 이벤트 컨텍스트를 가져오기
    const handleChangeTitle = (e) => {
        console.log(e.target.value);
        setPost({title:e.target.value});
    }

    const handleChangeContent = (e) => {
        console.log(e.target.value)
        setPost({content:e.target.value});
    }
    //하나로 만들기
    const handleForm = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        //변수 동적 -> key값에 변수로 값을 넣을 수 있음 -> let a = "name"
        //computed property names 문법(키값 동적할당)
        setPost({
            ...post, //기존 값이 있다면 업데이트를 위함
            [e.target.name]:e.target.value});
    };
 

    //최초 데이터
    const [posts, setPosts] = useState([
        {id:1, title:"제목1", content:"내용1"},
        {id:2, title:"제목2", content:"내용2"},
        {id:3, title:"제목3", content:"내용3"},
        {id:4, title:"제목4", content:"내용4"},
        {id:5, title:"제목5", content:"내용5"},
    ]);

    const handleWrite = (e) => {
        //form태그가 실행될때 action을 탐
        e.preventDefault(); // from 태그가 하려는 액셜을 중지 시킴
        //ListPage의 setPosts에 
        setPosts([...posts, post]);
        setNo(no +1);
    };


    return (
        <div>
            <h1>리스트 페이지</h1>
            <form onSubmit={handleWrite}>
                <input type="text" placeholder="제목을 써봐라잉" value={post.title} onChange={handleForm} name="title"/>
                <input type="text" placeholder="내용을 써봐라잉" value={post.content} onChange={handleForm} name="content"/>
                <button type='submit'>글쓰기</button>
            </form>
            <hr/>
            {posts.map((item)=> <StyledItemBoxDiv>
                <div>번호: {item.id} / 제목 : {item.title} / 내용 : {item.content}</div>
            <button>삭제</button>
            </StyledItemBoxDiv>)}
        </div>
    );
};

export default ListPage;