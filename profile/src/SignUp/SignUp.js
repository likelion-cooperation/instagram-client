import * as React from 'react';
import styled from '@emotion/styled';
import Phone from '../Image/Phone.png'
import TextIcon from '../Image/TextIcon.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import GooglePlay from '../Image/GooglePlay.png'
import Microsoft from '../Image/Microsoft.png'


const SytledPhone = styled.img`
    width:80%;
    height:80%;
    `;
const StyledContainer = styled.div`
    width:50%;
    height:80%;
    `;

const InputContainer = styled.div`
    width:100%;
    height:75%;
    padding:5%;
    padding-bottom:0px;
    border: 1px solid #888888;
    `;

const FooterContainer = styled.div`
    width:100%;
    height:10%;
    border: 1px solid #888888;
    display: flex;
    justify-content: center; 
    align-items: center; 
    font-size:12px;
    `;

const HoverSpan = styled.span`
    color:#4CB5F9;
    &:hover{
        cursor:pointer;
    }
`;

const StyledTextIcon = styled.img`
    width:50%;
    margin:5%;
`;

const FacebookButton = styled.button`
    background-color:#0095F6;
    flex-direction:row;
    text-align:center;
`;





const StyledInput = styled.input`
width: 100%;
height: 25px;
border: 1px solid lightgray;
background-color: #FAFAFA;
margin-bottom: 5px;
font-size: 12px;
`;

const StyledInputButton = styled(StyledInput)`
    background-color: #4CB5F9;
    color:white;
    text-align:center;
    margin:0px;
    border:0px;
    border-radius:5px;
    height:30px;
    font-weight:bold;
    font-size:15px;
    padding:0px;
`;

const DownloadContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const DownloadIcon = styled.img`
width: 130px;
height: 40px;
`;

function StyledHorizon({ text }) {
    return (
        <>
            <div className='d-flex w-100 mt-2 mb-2 ms-auto me-auto' style={{ justifyContent: 'center' }}>
                <div><hr className='me-2' style={{ width: '120px' }} /></div>
                {text}
                <div><hr className='ms-2' style={{ width: '120px' }} /></div>
            </div>
        </>
    );
}



const SignUp = () => {


    return (
        <>
            <StyledContainer className='d-flex mt-5 position-absolute top-0 start-50 translate-middle-x'>
                <SytledPhone src={Phone}></SytledPhone>
                <div>
                    <InputContainer className='mb-3'>
                        <StyledTextIcon src={TextIcon}></StyledTextIcon>
                        <div className='text-center fw-bold mb-2' style={{ fontSize: '15px', color: '#737373' }}>친구들의 사진과 동영상을 보려면<br /> 가입하세요.</div>
                        <div className='d-flex justify-content-center'><FacebookButton className='d-flex justify-content-center'><div><FacebookIcon /></div><div>faceBook으로 로그인</div></FacebookButton></div>
                        <StyledHorizon text='또는'></StyledHorizon>
                        <form action='https://reqres.in/api/login' method='POST'>
                            <StyledInput placeholder='휴대폰 번호 또는 이메일 주소' name='loginId' />
                            <StyledInput placeholder='성명' name='name' />
                            <StyledInput placeholder='사용자 이름' name='nickname' />
                            <StyledInput placeholder='비밀번호' name='password' className='mb-3' />
                            <div className='mb-3' style={{ color: '#888888', fontSize: '5px' }}>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <span style={{ color: '#22527F' }}>더 알아보기</span></div>
                            <StyledInputButton type='submit' value='가입'></StyledInputButton>
                        </form>
                    </InputContainer>
                    <FooterContainer className='mb-3'>계정이 있으신가요? <HoverSpan>로그인</HoverSpan></FooterContainer>
                    <div className='mb-3' style={{ fontSize: '12px' }}>앱을 다운로드하세요.</div>
                    <DownloadContainer className='d-flex'><DownloadIcon className='me-2' src={GooglePlay} /><DownloadIcon src={Microsoft} /></DownloadContainer>
                </div>
            </StyledContainer >
        </>
    );
};

export default SignUp;
