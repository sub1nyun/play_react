import React from 'react';

// rsc로 자동완성함 

const Sub = () => {
// 리턴을 못하게 막으면 -> 부모가 리턴될때 -> 재리턴 되지 않음
// 다시 렌더링을 할지 함수를 제공해줌
    return (
        <div>
            <h1>Sub입니다.</h1>    
        </div>
    );
};

export default Sub;