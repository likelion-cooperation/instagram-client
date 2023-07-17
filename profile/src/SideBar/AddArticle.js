import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { styled } from 'styled-components';
import SelectImage from './SelectImage.jpg'

// 모달 박스
const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height:70%;
    background-color: white;
    border-radius: 20px;
    padding: 0px;
`;



const Header = styled.div`
    font-weight:bold;
`;

const StyledButton = styled.button`
    color:white;
    background-color: #0095F6;
    border:0px;
    border-radius:5px;
    padding:5px;
    padding-left:10px;
    padding-right:10px;
    font-size:12px;
    font-weight:bold;
`;

function Body() {
    return (
        <div className='align-middle' style={{marginTop:'20%'}}>
            <div className='mb-3'><img src={SelectImage} alt='' /></div>
            <div className='mb-3 fs-5'>사진과 동영상을 여기다 끌어다 놓으세요</div>
            <div className='mb-3 fs-6'><StyledButton>컴퓨터에서 선택</StyledButton></div>
        </div>
    );
};


export default function AddArticle() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <LibraryAddIcon onClick={handleOpen} />

            <Modal
                open={open}
                onClose={handleClose}
            >
                <StyledBox className='text-center'>
                    <Header className='mt-3 mb-1'>새 게시물 만들기</Header>
                    <hr></hr>
                    <Body></Body>
                </StyledBox>
            </Modal>
        </div>
    );
}
