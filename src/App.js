import logo from './logo.svg';
import './App.css'; 
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
// import 순서를 맞춰야함
import LoginPage from './pages/LoginPage';

// route 페이지가 변하는 것이 아닌 객체를 바꿔치는 것
// 6v -> exact 옵션 삭제 됐음 -> 하위 경로에 여러 라우팅 매칭시키고 싶다면 url/* 사용
function App() {
  return (
    <div>
      <Header/>
          <Routes>
              <Route path="/" exact={true} element={<HomePage/>}/>
              <Route path="/login/:id" exact={true} element={<LoginPage/>}/> 
          </Routes>
      <Footer/>
    </div>  
  );
}
export default App; 

