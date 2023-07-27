import React from 'react';
import { styled } from 'styled-components';

// Article 내부 이미지
const Img = styled.img`
    width:100%;
    height:100%;
`;
 

const InArticleImage = ({src}) => {
    return (
        <>
            <Img src={src}></Img>
        </>
    );
};

export default InArticleImage;