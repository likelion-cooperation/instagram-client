import React from 'react';
import TestProfileImage from './TestProfileImage.jpg'
import './Header.css';

const Header = () => {
    return (
        <>
            {/* 헤더 컨테이너 */}
            <div className="row justify-content-start">
                <div className="row">
                    {/* 헤더 이미지 */}
                    <div className="col-4"><img className='profileImage' src={TestProfileImage} alt='ProfileImage'></img></div>
                    {/* 헤더 인포메이션 */}
                    <div className="col-6">
                        <div className='row justify-content-start  text-start'>
                            <div className='col-3'>ldk._.kdl</div>
                            <div className='col-3'>프로필 편집 버튼</div>
                            <div className='col-3'>설정</div>

                            <div className='w-100'></div>

                            <div className='col-3'>게시물29</div>
                            <div className='col-3'>팔로워152</div>
                            <div className='col-3'>팔로우212</div>

                            <div className='w-100'></div>

                            <div className='col'>이동규<br /><a href='https://www.instagram.com/ldk._.kdl/'>sooncoding.tistory.com</a></div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;