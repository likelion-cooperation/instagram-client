import React, { useState } from 'react';
import Modal from 'react-modal';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ModalItem = styled.div`
  border-bottom: 1px solid gray;
  text-align: center;
  font-size: 14px;
  padding: 12px 0;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  `;

function ModalComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <MoreHorizIcon style={{ cursor: 'pointer' }} onClick={() => setModalIsOpen(true)} />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
          },
          content: {
            width: '400px',
            height: '40vh',
            margin: 'auto',
            padding: '1px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '8px',
          },
        }}>
        <div>
          <ModalItem style={{ color: 'red', fontWeight: 'bold' }}>신고</ModalItem>
          <ModalItem style={{ color: 'red', fontWeight: 'bold' }}>팔로우 취소</ModalItem>
          <ModalItem>즐겨찾기에 추가</ModalItem>
          <ModalItem>게시물로 이동</ModalItem>
          <ModalItem><Link to="/Profile" style={{ textDecoration: "none", color: 'black' }}>이 계정 정보</Link></ModalItem>
          <ModalItem onClick={() => setModalIsOpen(false)} >취소</ModalItem>
        </div>
      </Modal >
    </>
  )
}

export default ModalComponent;
