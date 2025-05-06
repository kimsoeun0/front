import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../test.css';  // CSS 파일 import
import Button from '../ui/Button';
import Menu from '../../ui/Menu';
import data from '../../data.json';


function Main(props) {
    const navigate = useNavigate();
    const [sidenavOpen, setSidenavOpen] = useState(false);

    const openNav = () => {
        setSidenavOpen(true); 
    };

    const closeNav = () => {
        setSidenavOpen(false);
    };

    return (
        <div>
            {/* 헤더 영역 */}
            <div className="header"></div>

            {/* 슬라이드 영역 */}
            <div className="slideshow"></div>

            {/* 이미지 영역 */}
            <div className="image"></div>

            {/* 이미지/텍스트 영역 */}
            <div className="ImgText"></div>

            {/* 카드 영역 */}
            <div className="card"></div>

            {/* 배너 영역 */}
            <div className="banner"></div>

            {/* 텍스트 영역 */}
            <div className="text"></div>

            {/* 푸터 영역 */}
            <div className="footer"></div>

            {/* 사이드 네비게이션 */}
            <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
                &#9776; open
            </span>

            <div className={`sidenav`} style={{ width: sidenavOpen ? '250px' : '0' }}>
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <div className="container">
                <Menu
                    onClick={() => {
                        navigate('/post-write');
                    }}
                />
            </div>
        </div>
    );
}

export default Main;