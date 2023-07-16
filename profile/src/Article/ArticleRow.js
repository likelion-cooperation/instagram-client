import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from 'styled-components';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

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

const StyledModalContainer = styled.div`
  `;

const StyledModalLeft = styled.div`
    width:100px;
    height:100px;
    border:1px solid black;
    background-color:red;
    `;

const StyledModalRight = styled(StyledModalLeft)`
    background-color:blue;
  `;

const ArticleDiv =styled.div`
    &:hover {
      cursor: pointer;
    }
`;



  

const ArticleRow = ({ src1, src2, src3, alt1, alt2, alt3 }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='w-100'></div>
            <ArticleDiv onClick={handleOpen} className='ArticleImage col-3 m-1 p-0 '>
                <img src={src1} alt={alt1} width="100%" height="100%"></img>
            </ArticleDiv>
            <ArticleDiv onClick={handleOpen} className='ArticleImage col-3 m-1 p-0'>
                <img src={src2} alt={alt2} width="100%" height="100%"></img>
            </ArticleDiv>
            <ArticleDiv onClick={handleOpen} className='ArticleImage col-3 m-1 p-0'>
                <img src={src3} alt={alt3} width="100%" height="100%"></img>
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