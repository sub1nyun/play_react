import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderButtonDiv = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundColor};
    // ▲ 부모로부터 데이터를 받는 것이 아님
`;
// 스타일드에서는 링크가 없음 ▼ Link객체를 상속해서 사용하기
const StyledHeadLink = styled(Link)`
    color: red;
`;

const Header = () => {
    return (
        <div>
            <StyledHeaderButtonDiv backgroundColor={"blue"}>
                <ul>
                    <li><StyledHeadLink to="/">홈</StyledHeadLink></li>
                    <li><StyledHeadLink to="/login/10">로그인</StyledHeadLink></li>
                    <li>메뉴 1</li>
                    <li>메뉴 2</li>
                </ul>    
            </StyledHeaderButtonDiv>

            <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Test</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>a태그만 Nav.Link = nav-link로 표현</Link>
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/login">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

        </div>
    );
};

export default Header;