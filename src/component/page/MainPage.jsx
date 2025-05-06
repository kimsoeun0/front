import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data.json';
import FileUpload from './FileUpload';


const Banner = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 70px;
    display: flex;
    align-items: center;
    color: black;
    font-size: 25px;
    font-weight: bold;
    padding: 0 20px;
    z-index: 1000;
`;

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Wrapper2 = styled.div`
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; /* 가운데 정렬 */
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding-bottom: 50px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const LoginButton = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 80px;
    height: 30px;
    border: 1px solid #000000;
    border-radius: 50px;
    background-color: white;
    color: black;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const Sidenav = styled.div`
    height: 100vh;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #f1f1f1;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
`;

const SidenavLink = styled.a`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
        color: #111;
    }
`;

const Closebtn = styled.a`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
`

const Divider = styled.div`
    height: 1px;
    background-color: gray;
    margin: 20px 0;
`;

const Summary = styled.div`
    background-color: #f1f1f1;
    border-radius: 12px;
    padding: 16px;
    width: 100%;
    max-width: 720px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    color: #333;
`;

const SlideshowContainer = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
`;

const Slide = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: opacity 1s ease;
    opacity: ${(props) => (props.active ? 1 : 0)};
`;

const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SlideTextGroup = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.color || "white"};
    text-align: center;
`;

const SlideTitle = styled.h2`
    font-size: 36px;
    margin-bottom: 8px;
`;


const SlideSubtitle = styled.h4`
    font-size: 24px;
    margin-bottom: 4px;
`;

const SlideDescription = styled.p`
    font-size: 16px;
`;

const SlideButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);

    &:hover {
        background-color: #f0f0f0;
    }
`;

function MainPage(props) {
    const navigate = useNavigate();
    const [sidenavOpen, setSidenavOpen] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "첫번째 타이틀",
            subtitle: "첫번째 서브타이틀",
            description: "첫번째 설명 텍스트",
            color: "black",
            buttonText: "자세히 알아보기",
            buttonLink: "/building"
        },
        {
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "두번째 설명 텍스트",
            buttonText: "자세히 알아보기",
            buttonLink: "SubPage/lease"
        },
        {
            image:"https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            subtitle: "세번째 서브타이틀"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const openNav = () => {
        setSidenavOpen(true);
    };

    const closeNav = () => {
        setSidenavOpen(false);
    };

    const handleLoginClick = () => {
        navigate('/login');
    }
    

    return (
        <>
            <Banner>
                <span>구해조</span>
            </Banner>

            <LoginButton onClick={handleLoginClick}>로그인</LoginButton>

            <Wrapper>
                <span style={{ fontSize: "25px", cursor: "pointer"}} onClick={openNav} >
                    &#9776; 
                </span>

                <Sidenav style={{ width: sidenavOpen ? '250px' : '0'}}>
                    <Closebtn onClick={closeNav}>&times;</Closebtn>
                    <SidenavLink href="./page/SubPage/lease.jsx">임대차 계약</SidenavLink>
                    <SidenavLink href="./page/SubPage/phone.jsx">휴대폰 계약</SidenavLink>
                    <SidenavLink href="./page/Subpage/building.jsx">건축물 계약</SidenavLink>

                    <Divider />
                    <SidenavLink href="./page/previous.jsx">이전 계약서 확인하기</SidenavLink>
                    <SidenavLink href="./page/pna.jsx">질문 및 챗봇</SidenavLink>
                </Sidenav>
            </Wrapper>


            <Wrapper2>
                <SlideshowContainer>
                    {slides.map((slide, index) => (
                        <Slide key={index} active={index === activeSlide}>
                            <SlideImage src={slide.image} alt={`슬라이드 ${index + 1}`} />
                            <SlideTextGroup color={slide.color}>
                                <SlideTitle>{slide.title}</SlideTitle>
                                <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
                                <SlideDescription>{slide.description}</SlideDescription>
                                
                                {slide.buttonText && slide.buttonLink && (
                                    <SlideButton
                                    onClick={() => {
                                      console.log("버튼 클릭됨", slide.buttonLink);  // ← 추가
                                      navigate(slide.buttonLink);
                                    }}
                                  >
                                    {slide.buttonText}
                                  </SlideButton>
                                )}
                            </SlideTextGroup>
                        </Slide>
                    ))}
                </SlideshowContainer>

                <Container>
                    <h1> 파일 업로드</h1>
                    <FileUpload />

                </Container>
            </Wrapper2>
        </>
    );
}

export default MainPage;