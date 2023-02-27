import React from 'react';
import styled from 'styled-components';

const StyledHeaderButtonDiv = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundColor};
    // ▲ 부모로부터 데이터를 받는 것이 아님
`;

const Header = () => {
    return (
        <StyledHeaderButtonDiv backgroundColor={"blue"}>
            <ul>
                 <li>메뉴 1</li>
                 <li>메뉴 2</li>
             </ul>    
        </StyledHeaderButtonDiv>
    );
};

export default Header;