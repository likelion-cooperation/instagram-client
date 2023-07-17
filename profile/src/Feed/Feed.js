import React, { useState } from 'react';
import HeartButton from "./HeartButton"
import message from "./img/message.png"
import direct from "./img/direct.png"
import test from "./img/icon.png"
import bookmark from "./img/book.png"


const Feed = () => {
    const [comments, setComments] = useState([]);

    const handleAddComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    return (
        <div className="MainPage">
            {/* {좌측배너} */}
            <div className="Banner">
            </div>
            {/* 피드부분 */}
            <div className="Feed">
                <div className="Feed1">
                    <div className="Feed2">
                        {/* 첫번째 게시글 */}
                        <article className="contents1">
                            <div className="RealFeed">
                                {/* 유저 닉네임 */}
                                <div className="Username_main">
                                    <header className="username_sub">
                                        <div className="profile_img">
                                            <img class="p_img" src={test} />
                                        </div>
                                        <div className="nickname">
                                            <div className="zzinname">
                                                <a className="nn" href="https://www.instagram.com/1sang_aa/"><b>1sang_aa</b></a>
                                            </div>
                                            <div className="time">
                                                <span className="dot">•</span>
                                                <div className="zzintime">
                                                    <time datetime="2023-07-11T16:23:46.000Z" title="7월 12, 2023">12시간</time>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="plus">
                                        <svg aria-label="옵션 더 보기" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5">
                                        </circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                </div>
                                {/* 피드사진 */}
                                <div className="article_img">
                                    <img class="a_img" src="https://images.pexels.com/photos/4571251/pexels-photo-4571251.jpeg?cs=srgb&dl=pexels-cottonbro-studio-4571251.jpg&fm=jpg"></img>
                                </div>
                                {/* 반응 및 공유 */}
                                <div className="buttonLine">
                                    <section className="leftButton">
                                        <span className="heart_img">
                                            <HeartButton />
                                        </span>
                                        <span className="comment">
                                            <img class="comment_img" src={message} />
                                        </span>
                                        <span className="direct">
                                            <img class="direct_img" src={direct} />
                                        </span>
                                    </section>
                                    <span className="bookmark">
                                        <img class="bookmark_img" src={bookmark} />
                                    </span>
                                </div>
                                {/* 좋아요 수 */}
                                <div className="heartLine">
                                    <div className="HL">
                                        <img
                                            className="likeProfile"
                                            src={test}
                                            alt="profile"
                                        />
                                        <span className="text">
                                            <b>1sang_aa</b>님 외 <b>123명</b>이 좋아합니다
                                        </span>
                                    </div>
                                </div>
                                {/* 게시글 내용 */}
                                <div className="contentLine">
                                    <span className="id"><b>1sang_aa</b></span>
                                    <span>
                                        <a>good</a>
                                        <a href="#" className="type3">
                                            ...더 보기
                                        </a>
                                    </span>
                                    <div className="bunyuk">
                                        <span>번역하기</span>
                                    </div>
                                    {/* 댓글 */}
                                    {/* <CommentForm onAddComment={handleAddComment} />
                                    <CommentList comments={comments} /> */}
                                    <span className="time">42분 전</span>
                                </div>
                                {/*<InputCommentLine
                                    commentBox={commentBox}
                                    setCommentBox={setCommentBox}
                                    idx={idx}
                                />*/}
                                {/* </div> */}
                                {/* <section className="commentplus">
                                    <form className="comment">
                                        <div className="comment2">
                                            <div className="imozy2">
                                                <img src={smile} />
                                            </div>
                                        </div>
                                    </form>
                                </section> */}
                            </div>
                        </article>
                    </div>
                    {/* 두번째 피드 */}
                    <div className="Feed2">
                        <article className="contents">
                            <div className="RealFeed">
                                {/* 유저 닉네임 */}
                                <div className="Username_main">
                                    <header className="username_sub">
                                        <div className="profile_img">
                                            <img class="p_img" src={test} />
                                        </div>
                                        <div className="nickname">
                                            <div className="zzinname">
                                                <a className="nn" href="https://www.instagram.com/1sang_aa/"><b>1sang_aa</b></a>
                                            </div>
                                            <div className="time">
                                                <span className="dot">•</span>
                                                <div className="zzintime">
                                                    <time datetime="2023-07-11T16:23:46.000Z" title="7월 12, 2023">12시간</time>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="plus">
                                        <svg aria-label="옵션 더 보기" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5">
                                        </circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </div>
                                </div>
                                {/* 사진 */}
                                <div className="article_img">
                                    <img class="a_img" src="https://i.pinimg.com/474x/9e/85/dc/9e85dcf648f3bc3b37b35ad9314c0795.jpg"></img>
                                    {/* <button className="NextButton">1</button>
                                    <img></img>
                                    <li></li> */}
                                </div>
                                {/* 댓글 */}

                                <div className="buttonLine">
                                    <section className="leftButton">
                                        <span className="heart_img">
                                            <HeartButton />
                                        </span>
                                        <span className="comment">
                                            <img class="comment_img" src={message} />
                                        </span>
                                        <span className="direct">
                                            <img class="direct_img" src={direct} />
                                        </span>
                                    </section>
                                    <span className="bookmark">
                                        <img class="bookmark_img" src={bookmark} />
                                    </span>
                                </div>
                                <div className="heartLine">
                                    <div className="HL">
                                        <img
                                            className="likeProfile"
                                            src={test}
                                            alt="profile"
                                        />
                                        <span className="text">
                                            <b>hsa0123</b>님 외 <b>111명</b>이 좋아합니다
                                        </span>
                                    </div>
                                </div>
                                <div className="contentLine">
                                    <span className="id"><b>1sang_aa</b></span>
                                    <span>
                                        <a>good</a>
                                        <a href="#" className="type3">
                                            ...더 보기
                                        </a>
                                    </span>
                                    <div className="bunyuk">
                                        <span>번역하기</span>
                                    </div>
                                    {/* <Comment feedNum={idx} commentBox={commentBox} /> */}
                                    <span className="time">42분 전</span>
                                </div>
                                {/*<InputCommentLine
                                    commentBox={commentBox}
                                    setCommentBox={setCommentBox}
                                    idx={idx}
                                />*/}
                                {/* </div> */}
                                {/* <section className="commentplus">
                                    <form className="comment">
                                        <div className="comment2">
                                            <div className="imozy2">
                                                <img src={smile} />
                                            </div>
                                        </div>
                                    </form>
                                </section> */}
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Feed;