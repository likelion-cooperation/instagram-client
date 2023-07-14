import React from 'react';
import TestProfileImage from './TestProfileImage.jpg'
import './Header.css';
import BasicModal from './BasicModal';


const Header = () => {
    const User = {
        NickName: 'ldk._.kdl',
        ArticleCount: '29',
        FollowersCount: '152',
        FollowsCount: '212',
        Name: '이동규',
        Link: 'https://sooncoding.tistory.com/m/',
    };

    return (
        <>
            {/* 헤더 컨테이너 */}
            <div className="Header container justify-content-start text-start mb-5 mt-5">
                <div className="row align-items-center">
                    {/* 헤더 이미지_1열 */}
                    <div className="col-4">
                        <div className='row justify-content-center'>
                            <img className='profileImage p-0' src={TestProfileImage} alt='ProfileImage'></img>
                        </div>
                    </div>
                    {/* 헤더 인포메이션_2열*/}
                    <div className="col-6 headInformationContainer       ">
                        {/* 2열 1행 */}
                        <div className='row justify-content-start'>
                            {/* <div className='col-3 fs-5' style={{marginTop:'10px'}}>{User.NickName}</div> */}
                            <div className='col-3 fs-5'>{User.NickName}</div>
                            {/* <div className='col-3'><button className='editButton fw-semibold px-4 py-1'>프로필 편집</button></div> */}
                            {/* <div className='col-3 fs-5' style={{paddingLeft:'0px'}}><BasicModal/></div> */}
                            <div className='col-3 fs-5'><BasicModal/></div>
                            <div className='col-3 fs-5'>
                                <button className='settingButton'>
                                    <svg xmlns="http://www.w3.org/2000/svg" widt  h="30" height="30" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                    </svg>
                                </button>
                            </div>

                            <div className='w-100'></div>
                            {/* 2열 2행 */}
                            <div className='col-3'>게시물 <span className='fw-semibold'>{User.ArticleCount}</span></div>
                            <div className='col-3'>팔로워 <span className='fw-semibold'>{User.FollowersCount}</span></div>
                            <div className='col-3'>팔로우 <span className='fw-semibold'>{User.FollowsCount}</span></div>

                            <div className='w-100'></div>
                            {/* 2열 3행 */}
                            <div className='col'><span className='fw-semibold'>{User.Name}</span><br /><a href={User.Link} target='blank'>sooncoding.tistory.com</a></div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;