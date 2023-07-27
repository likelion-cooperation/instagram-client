import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from 'styled-components';

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

const SettingModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <StyledModalContainer>

          <SettingsIcon onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <div className='menuContainer'>
                <StyledModalItem>앱 및 웹사이트</StyledModalItem>
                <StyledModalItem>QR 코드</StyledModalItem>
                <StyledModalItem>알림</StyledModalItem>
                <StyledModalItem>설정 및 개인정보</StyledModalItem>
                <StyledModalItem>관리 감독</StyledModalItem>
                <StyledModalItem>로그아웃</StyledModalItem>
                <StyledModalItem onClick={handleClose} >취소</StyledModalItem>
              </div>
            </Box>
          </Modal>
        </StyledModalContainer>
      </div>

    </>
  );
};

export default SettingModal;

