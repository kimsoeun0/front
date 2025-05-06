import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
import MainPage from './component/page/MainPage';
import SuccessPage from "./component/page/SuccessPage";
import Login from "./component/page/Login"

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;