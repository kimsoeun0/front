import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data.json';

const container=styled.div`
    padding: 16px;
`;

const psw=styled.div`
    float: right;
    padding-top: 16px;
`;

function Login() {
    return (

        <div className='container'>
            <label htmlFor="uname"><b>ID</b></label>
            <input type="text" name="uname" required />

            <label htmlFor="pw"><b>Password</b></label>
            <input type="password" name="pw" required></input>

            <button type="submit">로그인</button>
        </div>
    )
}

export default Login;