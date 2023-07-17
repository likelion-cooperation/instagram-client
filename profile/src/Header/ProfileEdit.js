import React, { useState } from 'react';
import styled from 'styled-components';
import ItemContainer from './ItemContainer';
import TestProfileImage from './TestProfileImage.jpg';

// Styled-components
// 그리드 컨테이너
const GridContainer = styled.div`
    width:800px;
    height:1000px;
    border:1px solid gray;
    margin-top:100px;
    padding-top:100px;
    padding-left:50px
`;

/* 프로필 사진 바꾸기 텍스트 */
const ChangeProfile = styled.span`
    color: #5295F6;
    &:hover{
        cursor: pointer;
    }
`;

/* 웹사이트 인풋 텍스트 */
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

/* 설명 텍스트 */
const ExplanationText = styled.div`
    color:gray;
    font-size: 15px;
`;

/* 소개 텍스트 박스 */
const IntroductionInputArea = styled.textarea`
        height:80px;
`;


// End of Styled-components


/* Component */
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
        changeImage: [<span>ldk._.kdl</span>, <br />, <ChangeProfile>프로필 사진 바꾸기</ChangeProfile>],
        webSite: [<WebSiteInput className='w-100' type='text' placeholder='웹사이트' disabled></WebSiteInput>, <br />, <ExplanationText>링크 수정은 모바일에서만 가능합니다. Instagram 앱으로 이동하여 프로필의 소개에서 웹사이트를 변경하여 수정하세요.</ExplanationText>],
        introduction: [<IntroductionInputArea className='w-100' onChange={onInputHandler} maxLength="150" ></IntroductionInputArea>, inputCount, '/150'],
        gender: [<input className='w-100' type='text' value='남성'></input>, <ExplanationText>이 정보는 공개 프로필에 포함되지 않습니다.</ExplanationText>],
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

/* End of Component */


export default ProfileEdit;