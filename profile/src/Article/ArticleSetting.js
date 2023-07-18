import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from 'styled-components';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


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

const StyledModalItem = styled.div`
  border-bottom : 1px solid gray;
  text-align : center;
  font-size : 20px;
  font-weight:lighter;
  padding : 12px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledMoreHorizIcon = styled(MoreHorizIcon)`
    &:hover{
        cursor:pointer;
    }

`;

export default function ArticleSetting() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledModalContainer>
      <div><StyledMoreHorizIcon onClick={handleOpen}/></div>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <div className='menuContainer'>
              <StyledModalItem className='fw-bold text-danger'>삭제</StyledModalItem>
              <StyledModalItem>수정</StyledModalItem>
              <StyledModalItem>좋아요 수 숨기기</StyledModalItem>
              <StyledModalItem>댓글 기능 해제</StyledModalItem>
              <StyledModalItem onClick={handleClose}>게시물로 이동</StyledModalItem>
              <StyledModalItem>이 계정 정보</StyledModalItem>
              <StyledModalItem onClick={handleClose} >취소</StyledModalItem>
            </div>
          </Box>
        </Modal>
      </StyledModalContainer>
    </div>
  );
}
