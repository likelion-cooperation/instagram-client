import React, { useState } from 'react';
import styled from 'styled-components';
import ItemContainer from './ItemContainer';
import TestProfileImage from './TestProfileImage.jpg';
import profileImage from '../Image/profile.jpg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// StyledComponents & ServeComponents
// StyledComponents
// 그리드 컨테이너 스타일
const GridContainer = styled.div`
    width:800px;
    height:1000px;
    border:1px solid gray;
    margin-top:100px;
    padding-top:100px;
    padding-left:50px
`;

/* 웹사이트 인풋 텍스트 스타일*/
const WebSiteInput = styled.input`
        background-color:#EFEFEF;
        border:1px;
        border-radius:5px;
        height:40px;
        font-size:20px;
        margin-bottom:5px;
        &:hover{
            cursor: not-allowed;
        }
`;

/* 설명 텍스트 스타일 */
const ExplanationText = styled.div`
    color:gray;
    font-size: 15px;
`;

/* 소개 텍스트 박스 */
const IntroductionInputArea = styled.textarea`
        height:80px;
`;


//////////프로필 사진 바꾸기 모달
/* 프로필 사진 바꾸기 텍스트 스타일*/
const ChangeProfile = styled.span`
    color: #5295F6;
    &:hover{
        cursor: pointer;
    }
`;

/* 프로필 사진 바꾸기 모달 박스 스타일 */
const ChangeProfileBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    background-color: white;
    border-radius: 20px;
    padding: 0px;
    border:0px solid white;
`;

/* 프로필 사진 바꾸기 모달 아이템 */
const ChangeProfileModalItem = styled.div`
    font-size:18px;
    border-bottom: 1px solid gray;
    padding-top:10px;
    padding-bottom:10px;
    &:hover{
        cursor: pointer;
    }
`;

////////// 성별 모달

/* 라디오 컴포넌트 */
function Radio({ children, value, name, defaultChecked, disabled, className }) {
    return (
        <div className={className}>
        <label>
            <input
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                disabled={disabled}
            />
            {children}
        </label>
        </div>
    );
};

/* 전송 버튼 */
const GenderSubmitButton = styled.input`
`;

/* 모달 박스 스타일 */
const GenderModal = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:30%;
    background-color:white;
    border-radius:15px;
`;

/* 성별 모달 컴포넌트 */
function Gender() {
    /* 선택 값 state */
    const [selection, setSelection] = useState();
    /* 모달 열기/닫기 state */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /* 렌더링 */
    return (
        <>
            <div className='w-100 mb-2 border border-light-subtle' style={{height:'30px'}} onClick={handleOpen}>{selection}</div>

            <Modal open={open} onClose={handleClose}>
                <GenderModal>
                <div className='text-center pt-3 fw-bold'>성별</div>
                <hr className='w-100'/>
                <div className='m-3'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setSelection(e.target.contact.value);
                        handleClose();
                    }}>
                        <Radio name="contact" value="직접 지정" defaultChecked>
                            직접 지정
                        </Radio><br/>
                        <Radio name="contact" value="여성">
                            여성
                        </Radio><br/>
                        <Radio name="contact" value="남성">
                            남성
                        </Radio><br/>
                        <Radio name="contact" value="밝히고 싶지 않음" >
                            밝히고 싶지 않음
                        </Radio><br/>
                        <GenderSubmitButton className='border-0 rounded bg-primary text-white w-100' type='submit' value='제출하기'></GenderSubmitButton>
                    </form>
                    </div>
                </GenderModal>
            </Modal>

        </>
    );
};

// End of Styled-components

/* ServeComponents */
/* 프로필 사진 바꾸기 모달 컴포넌트 */
function ChangeProfileModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ChangeProfile onClick={handleOpen}>프로필 사진 바꾸기</ChangeProfile>

            <Modal open={open} onClose={handleClose}>
                <ChangeProfileBox className='text-center'>
                    <ChangeProfileModalItem className='border-0 pt-3 pb-0 '><img src={profileImage} alt='' style={{ borderRadius: '50%', width: '50px' }}></img></ChangeProfileModalItem>
                    <ChangeProfileModalItem className='border-0 pt-3 pb-0 fs-4 '>동기화된 프로필 사진</ChangeProfileModalItem>
                    <ChangeProfileModalItem className='pt-0 pb-3 text-body-tertiary'>Instagram, Facebook</ChangeProfileModalItem>
                    <ChangeProfileModalItem className='fw-bold text-primary'>사진 업로드</ChangeProfileModalItem>
                    <ChangeProfileModalItem>동기화 설정 관리</ChangeProfileModalItem>
                    <ChangeProfileModalItem className='fw-bold text-danger'>현재 사진 삭제</ChangeProfileModalItem>
                    <ChangeProfileModalItem onClick={handleClose}>취소</ChangeProfileModalItem>
                </ChangeProfileBox>
            </Modal>
        </>
    );
};


/* Main Component */
const ProfileEdit = () => {
    /* 소개 텍스트 박스 글자 수 카운드 State*/
    const [inputCount, setInputCount] = useState(0);
    /* 문자열 길이 감지 후 카운트 반영 */
    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
    };
    /* End of 소개 텍스트 박스 글자 수 카운드 State*/

    /*  우측 열 들어갈 내용 */
    const contents = {
        changeImage: [<span>ldk._.kdl</span>, <br />, <ChangeProfileModal></ChangeProfileModal>],
        webSite: [<WebSiteInput className='w-100' type='text' placeholder='웹사이트' disabled></WebSiteInput>, <br />, <ExplanationText>링크 수정은 모바일에서만 가능합니다. Instagram 앱으로 이동하여 프로필의 소개에서 웹사이트를 변경하여 수정하세요.</ExplanationText>],
        introduction: [<IntroductionInputArea className='w-100 border border-light-subtle' onChange={onInputHandler} maxLength="150" ></IntroductionInputArea>, inputCount, '/150'],
        gender: [<Gender />, <ExplanationText>이 정보는 공개 프로필에 포함되지 않습니다.</ExplanationText>],
    };

    /* Rendering */
    return (
        <>

            <GridContainer className='container'>
                <div className='row'>
                    <div className='col-3 text-end ' style={{ fontSize: '30px', marginBottom: '50px' }}>프로필 편집</div>
                    <div className='col-7 text-start'></div>
                </div>
                <ItemContainer name={[<img className="profileImage p-0" src={TestProfileImage} alt="ProfileImage" style={{ width: '40px', height: '40px', }} />]} content={contents.changeImage}></ItemContainer>
                <ItemContainer name='웹사이트' content={contents.webSite}></ItemContainer>
                <ItemContainer name='소개' content={contents.introduction}></ItemContainer>
                <ItemContainer name='성별' content={contents.gender}></ItemContainer>
            </GridContainer>
        </>
    );
};

/* End of Main Component */


export default ProfileEdit;