import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from 'styled-components';
import ArticleFavoriteComment from './ArticleFavoriteComment';

// Styled-component
// 모달 css
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 0,
};

// 모달 컨테이너
const StyledModalContainer = styled.div`
  `;

// 모달 좌측 컨텐츠
const StyledModalLeft = styled.div`
    width:100px;
    height:100px;
    border:1px solid black;
    background-color:red;
    `;

// 모달 우측 컨텐츠(좌측 컨텐츠 스타일 상속)
const StyledModalRight = styled(StyledModalLeft)`
    background-color:blue;
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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // 각 행 Article1,2,3 호버 감지
    const [Ishover, setIsHover] = useState(0);
    const onMouseEnter1 = () => setIsHover(1)
    const onMouseEnter2 = () => setIsHover(2)
    const onMouseEnter3 = () => setIsHover(3)
    const onMouseLeave = () => setIsHover(0)

    // 렌더링
    return (
        <>
            {/* 빈줄 */}
            <div className='w-100'></div>

            {/* Article1 */}
            <ArticleDiv onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave} onClick={handleOpen} className='ArticleImage col-3 m-1 p-0 '>
                <img src={src1} alt={alt1} width="100%" height="100%"></img>
                {Ishover === 1 && <ArticleFavoriteComment fav={fav1} com={com1} ></ArticleFavoriteComment>}
            </ArticleDiv>

            {/* Article2 */}
            <ArticleDiv onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave} onClick={handleOpen} className='ArticleImage col-3 m-1 p-0'>
                <img src={src2} alt={alt2} width="100%" height="100%"></img>
                {Ishover === 2 && <ArticleFavoriteComment fav={fav2} com={com2} ></ArticleFavoriteComment>}
            </ArticleDiv>

            {/* Article3 */}
            <ArticleDiv onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave} onClick={handleOpen} className='ArticleImage col-3 m-1 p-0'>
                <img src={src3} alt={alt3} width="100%" height="100%"></img>
                {Ishover === 3 && <ArticleFavoriteComment fav={fav3} com={com3} ></ArticleFavoriteComment>}
            </ArticleDiv>

            {/* 모달 */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <StyledModalContainer className='container'>
                        <div className='row'>
                            <StyledModalLeft className='col'></StyledModalLeft>
                            <StyledModalRight className='col'></StyledModalRight>
                        </div>
                    </StyledModalContainer>
                </Box>
            </Modal>
            {/* End of 모달 */}
        </>
    );
};



export default ArticleRow;