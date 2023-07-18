import React from 'react';
import profile from '../Image/profile.jpg'
import { styled } from 'styled-components';
import '../Header/Header.js'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { Link } from 'react-router-dom';
import ArticleSetting from './ArticleSetting';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledProfileImage = styled.img`
    border-radius:50%;
    width:30px;
    height:30px;
`;

const StyledTime = styled.span`
    font-size:12px;
`;

const StyledRipple = styled(StyledTime)`
    color:#737373;
    font-weight:bold;
`;

const StyledFavoriteIcon = styled(FavoriteIcon)`
    &:hover{
        cursor:pointer;
    }
    `;

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
    &:hover{
        cursor:pointer;
    }

`;

function NickName({ NickName, className }) {
    return (
        <span className={className}>{NickName}</span>
    );
}


function Header() {
    return (
        <div class="d-flex flex-row mb-3 mt-3">
            <Link to='/'><div className='me-3'><StyledProfileImage src={profile} alt='1'></StyledProfileImage></div></Link>
            <NickName NickName={<Link to='/' className='text-dark link-underline link-underline-opacity-0'>ldk._.kdl</Link>} className='me-auto'></NickName>
            <ArticleSetting></ArticleSetting>
        </div>
    );
};

function Comment() {
    const [isFavorite, setIsFavorite] = useState(false);
    const FavoriteTrue = () => setIsFavorite(true);
    const FavoriteFalse = () => setIsFavorite(false);

    return (
        <div class="d-flex flex-row mb-4 mt-3">
            <div className='me-3'><Link to='/'><div className='me-3'><StyledProfileImage src={profile} alt='1'></StyledProfileImage></div></Link></div>
            <div className='me-auto'>
                {/* 닉네임, 댓글 */}
                <div>
                    <NickName NickName={<Link to='/' className='text-dark link-underline link-underline-opacity-0'>ldk._.kdl</Link>} className='me-auto'></NickName>
                    <span>에에엥 왜 댓글이 두번 씩 써지지?에에엥 왜 댓글이 두번 씩 써지지?에에엥 왜 댓글이 두번 씩 써지지?에에엥 왜 댓글이 두번 씩 써지지?에에엥 왜 댓글이 두번 씩 써지지?</span>
                </div>
                {/* 댓글 시간, 답글 달기 */}
                <div>
                    <StyledTime className='me-2' >10주</StyledTime>
                    <StyledRipple>답글 달기</StyledRipple>
                </div>
                {/* 답글 보기 */}
                <div>
                    <StyledRipple className='me-3'>———</StyledRipple>
                    <StyledRipple>답글 보기</StyledRipple>
                </div>
            </div>
            {isFavorite ?
                (<div onClick={FavoriteFalse}><StyledFavoriteIcon /></div>) :
                (<div onClick={FavoriteTrue}><StyledFavoriteBorderIcon /></div>)
            }

        </div>
    );
};

function Footer() {
    return (
        <>
            <hr style={{ width: '100%' }} />
            <div >
                <div class="d-flex flex-row mb-3 mt-3">
                    <div className='me-3'><FavoriteBorderIcon /></div>
                    <div className='me-auto'><ModeCommentOutlinedIcon /></div>
                    <div><BookmarkBorderOutlinedIcon /></div>
                </div>

                <div class="d-flex flex-row mb-3 mt-3">
                    <div>김 아무개 외 3명이 좋아합니다.</div>
                </div>
                <hr style={{ width: '100%' }} />
                <div class="d-flex flex-row mb-3 mt-3">
                    <div><SentimentSatisfiedAltOutlinedIcon /></div>
                    <div className='ms-1 me-1 flex-grow-1'><input type='text' style={{ border: '0px', width: '100%' }}></input></div>
                    <div style={{ color: 'skyblue' }}>게시</div>
                </div>
            </div>
        </>

    );
};

const InArticleComment = () => {
    return (
        <>
            <Header></Header>
            <hr style={{ width: '100%' }} />
            <Comment></Comment>
            <Comment></Comment>
            <Footer></Footer>
        </>
    );
};

export default InArticleComment;