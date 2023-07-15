import React, { useState } from 'react';
import styled from 'styled-components';
import ItemContainer from './ItemContainer';
import TestProfileImage from './TestProfileImage.jpg';


const GridContainer = styled.div`
    width:1000px;
    height:100px;
`;

const WebSiteInput = styled.input`
            background-color:#EFEFEF;
            border:1px;
            border-radius:10px;
        &:hover{
            cursor: not-allowed;
        }
`;

const ExplanationText = styled.div`
    font-size:5px;
`;

const IntroductionInputArea = styled.textarea`
`;





const ProfileEdit = () => {
    const [inputCount, setInputCount] = useState(0);

    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
    };


    const contents = {
        changeImage : [<span>ldk._.kdl</span>, <br/>, <span style={{color:'#5295F6'}}>프로필 사진 바꾸기</span>],
        webSite: [<WebSiteInput type='text' placeholder='웹사이트' className='webSiteInput' disabled></WebSiteInput>, <br />, <ExplanationText>링크 수정은 모바일에서만 가능합니다. Instagram 앱으로 이동하여 프로필의 소개에서 웹사이트를 변경하여 수정하세요.</ExplanationText>],
        introduction: [<IntroductionInputArea onChange={onInputHandler} maxLength="150" ></IntroductionInputArea>, inputCount, '/150'],
        gender: [<input type='text' value='남성'></input>, <ExplanationText>이 정보는 공개 프로필에 포함되지 않습니다.</ExplanationText>],
        recommendations: [<input type='checkbox'></input>, <span className='fw-bold fs-5'> 사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수 있는지와 회원님의 계정이 다른 프로필에서 추천될 수 있는지를 선택하세요.</span>],
    };

    return (
        <>

            <GridContainer>
                <div className='row'>
                    <div className='col fs-4 text-end mb-3'>프로필 편집</div>
                    <div className='col text-start'></div>
                </div>
                <ItemContainer name={[<img className="profileImage p-0" src={TestProfileImage} alt="ProfileImage" style={{width:'40px', height:'40px',}}/>]} content={contents.changeImage}></ItemContainer>
                <ItemContainer name='웹사이트' content={contents.webSite}></ItemContainer>
                <ItemContainer name='소개' content={contents.introduction}></ItemContainer>
                <ItemContainer name='성별' content={contents.gender}></ItemContainer>
                <ItemContainer name='프로필에 계정 추천 표시' content={contents.recommendations}></ItemContainer>
            </GridContainer>
        </>
    );
};

export default ProfileEdit;