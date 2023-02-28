import React from 'react';
import Login from '../components/login/Login';
import { useParams } from 'react-router-dom';

const LoginPage = ({match}) => {
   // const { userId } = match.params;

    return (
            <Login/>
    );
};

export default LoginPage;