import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';


//글쓰기, 글삭제, 글목록보기

const Edti = () => {
    return (
        <div>
            <ListPage/>
        </div>
    );
};

export default Edti;