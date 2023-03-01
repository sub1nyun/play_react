import React from 'react';
import Login from '../components/login/Login';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const LoginPage = (props) => {
        // props.match.params.id -> 5v버전 방식
        const data = useParams(props);
        console.log("뭔데?", data);
        console.log("아이디?", data.id);
    return (
        <div>
                <Login/>
        </div>    
    );
};

export default LoginPage;