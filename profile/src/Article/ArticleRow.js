import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from 'styled-components';
import ArticleFavoriteComment from './ArticleFavoriteComment';
import InArticleImage from './InArticleImage';
import InArticleComment from './InArticleComment';

// Styled-component
// 모달 박스
const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height:85%;
    background-color: white;
    border-radius: 2px;
    padding: 0px;
`;


// 모달 좌측 컨텐츠
const StyledModalLeft = styled.div`
    height:100%;
    border:1px solid black;
    background-color:antiquewhite;
    `;

// 모달 우측 컨텐츠(좌측 컨텐츠 스타일 상속)
const StyledModalRight = styled(StyledModalLeft)`
    background-color:white;
    `;

// Article 스타일
const ArticleDiv = styled.div`
    position:relative;
    &:hover {
        cursor: pointer;
    }
    `;


// End of Styled-component

const ArticleRow = ({ src1, src2, src3, alt1, alt2, alt3, fav1, fav2, fav3, com1, com2, com3 }) => {
    // 모달 열기/닫기 state
    const [open, setOpen] = React.useState(false);
    const handleOpen1 = () => { setModalSrc(src1); setOpen(true);}
    const handleOpen2 = () => { setModalSrc(src2); setOpen(true);}
    const handleOpen3 = () => { setModalSrc(src3); setOpen(true);}
    const handleClose = () => setOpen(false);

    // 각 행 Article1,2,3 호버 감지
    const [Ishover, setIsHover] = useState(0);
    const onMouseEnter1 = () => setIsHover(1);
    const onMouseEnter2 = () => setIsHover(2);
    const onMouseEnter3 = () => setIsHover(3);
    const onMouseLeave = () => setIsHover(0);

    // 모달 열기 전 이미지 경로 설정
    const [modalSrc, setModalSrc] = useState('')


    // 렌더링
    return (
        <>
            {/* 빈줄 */}
            <div className='w-100'></div>

            {/* Article1 */}
            <ArticleDiv onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave} onClick={handleOpen1} className='ArticleImage col-3 m-1 p-0 '>
                <img src={src1} alt={alt1} width="100%" height="100%"></img>
                {Ishover === 1 && <ArticleFavoriteComment fav={fav1} com={com1} ></ArticleFavoriteComment>}
            </ArticleDiv>

            {/* Article2 */}
            <ArticleDiv onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave} onClick={handleOpen2} className='ArticleImage col-3 m-1 p-0'>
                <img src={src2} alt={alt2} width="100%" height="100%"></img>
                {Ishover === 2 && <ArticleFavoriteComment fav={fav2} com={com2} ></ArticleFavoriteComment>}
            </ArticleDiv>

            {/* Article3 */}
            <ArticleDiv onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave} onClick={handleOpen3} className='ArticleImage col-3 m-1 p-0'>
                <img src={src3} alt={alt3} width="100%" height="100%"></img>
                {Ishover === 3 && <ArticleFavoriteComment fav={fav3} com={com3} ></ArticleFavoriteComment>}
            </ArticleDiv>

            {/* 모달 */}
            <Modal open={open} onClose={handleClose}>
                {/* <Box sx={style}> */}
                <StyledBox className='container'>
                        <div className='row h-100'>
                            <StyledModalLeft className='col-7'>
                                <InArticleImage src={modalSrc} alt={alt1}></InArticleImage>
                            </StyledModalLeft>
                            <StyledModalRight className='col-5'>
                                <InArticleComment></InArticleComment>
                            </StyledModalRight>
                        </div>
                {/* </Box> */}
                </StyledBox>
            </Modal>
            {/* End of 모달 */}
        </>
    );
};



export default ArticleRow;