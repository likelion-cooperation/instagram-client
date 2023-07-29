import React, { useState } from 'react';
import Test from "../../../assets/icon.png"
import HeartBtn from "../../../components/Button/HeartButton"
import Logo from '../../../assets/logo.jpg'
import CommentBtn from "../../../assets/message.png"
import DirectBtn from "../../../assets/direct.png"
import BookmarkBtn from "../../../assets/book.png"
//import CommentForm from '../../../components/Comment/CommentForm';
//import Comment from '../../../components/Comment/Comment';
import {
    Plus,
    BookmarkButton,
    ButtonLine,
    CommentButton,
    CommentInput,
    DirectButton,
    FeedComment,
    FeedContainer,
    FeedImage,
    FeedItem,
    HeartButton,
    HeartLine,
    Profileimg,
    User,
    Comment,
    UserInfo,
    ProfileAnchor,
    UserNameContainer,
    PlusComment
} from './style';
import { Link } from 'react-router-dom';
import ModalComponent from "../../../components/Modal/Modal"


const InstagramFeed = () => {
    const [feed, setFeed] = useState([
        {
            id: 'User_1',
            image: Logo,
            comments: ['안녕하세요', 'good'],
        },
        {
            id: 'User_2',
            image: Test,
            comments: ['반갑습니다', '좋아요'],
        },
    ]);

    const [comment, setComment] = useState('');
    const [showAllComments, setShowAllComments] = useState(false);
    const handleShowAllComments = () => {
        setShowAllComments(!showAllComments);
    };

    const handleKeyDown = (index) => (e) => {
        if (e.key === 'Enter') {
            handleComment(index, comment);
        }
    };

    const handleComment = (index, comment) => {
        const newFeed = [...feed];
        newFeed[index].comments.push(comment);
        setFeed(newFeed);
        setComment('');
    };



    return (
        <FeedContainer>
            {feed.map((post, index) => (
                <FeedItem key={index}>
                    <UserNameContainer>
                        <User>
                            <Profileimg $test={Test} />
                            <UserInfo>
                                <Link to="/Profile" style={{ textDecoration: "none", color: 'black' }}>{post.id}</Link>
                                <span>• 12시간</span>
                            </UserInfo>
                        </User>
                        <Plus>
                            <ModalComponent />
                        </Plus>
                    </UserNameContainer>
                    <FeedImage>
                        <img src={post.image} alt={`Post ${index}`} />
                    </FeedImage>
                    <ButtonLine>
                        <HeartButton>
                            <HeartBtn />
                        </HeartButton>
                        <CommentButton>
                            <img src={CommentBtn} alt='./link' />
                        </CommentButton>
                        <DirectButton>
                            <img src={DirectBtn} alt='./link' />
                        </DirectButton>
                        <BookmarkButton>
                            <img src={BookmarkBtn} alt='./link' />
                        </BookmarkButton>
                    </ButtonLine>
                    <HeartLine>
                        <ProfileAnchor />
                        <span><b>User_1</b>님 <b>외 123명이</b> 좋아합니다</span>
                    </HeartLine>
                    <FeedComment>
                        <a>{post.id}</a>
                        <span>얏호</span>
                    </FeedComment>
                    <Comment>
                        {post.comments
                            .slice(0)
                            .map((comment, commentIndex) => (
                                commentIndex >= 2 && !showAllComments ? null : (
                                    <div key={commentIndex}>
                                        <a>MainUser</a>
                                        <span>{comment}</span>
                                    </div>
                                )
                            ))}
                    </Comment>
                    <PlusComment>
                        {post.comments.length > 2 && (
                            <button onClick={handleShowAllComments}>
                                {showAllComments ? '접기' : '더 보기'}
                            </button>
                        )}
                    </PlusComment>
                    <CommentInput>
                        <input
                            type="text"
                            placeholder="댓글 달기..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            onKeyDown={handleKeyDown(index)}
                        />
                    </CommentInput>
                </FeedItem>
            ))}
        </FeedContainer>
    );
};

export default InstagramFeed;
