import logo from './logo.svg';
import './App.css'; 
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 순서를 맞춰야 작동함;
import LoginPage from './pages/LoginPage';

// route 페이지가 변하는 것이 아닌 객체를 바꿔치는 것
function App() {
  return (
    <div>
      <Header/>
        <Router>
          <Routes>
              <Route path="/" exact={true} element={<HomePage/>}/>
              <Route path="/login" exact={true} element={<LoginPage/>}/> 
          </Routes>
        </Router>     
      <Footer/>
    </div>  
  );
}
export default App; 

