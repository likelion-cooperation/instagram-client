import React from 'react';
import TestProfileImage from './TestProfileImage.jpg';
import './Header.css';
import SettingModal from './SettingModal'
import { Link } from 'react-router-dom';


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
        {/* 1행 */}
        <div className="row align-items-center">
          {/* 1행 1열(프로필 이미지) */}
          <div className="col-4">
            <div className="row justify-content-center">
              <img className="profileImage p-0" src={TestProfileImage} alt="ProfileImage" />
            </div>
          </div>
          {/* 1행 2열 */}
          <div className="col-6 headInformationContainer">
            {/* 닉네임, 프로필 편집, 설정 */}
            <div className="row justify-content-start">
              {/* 닉네임 */}
              <div className="col-3 fs-5 align-self-center" style={{ marginTop: '10px' }}>
                {User.NickName}
              </div>
              {/* 프로필 편집 */}
              <div className="col-3 align-self-center" style={{ paddingLeft: '0px', marginTop: '10px' }}>
                <Link to="/ProfileEdit" > 
                    <div className='editButton align-self-center fw-bold'>프로필 편집</div>
                </Link>
              </div>
              {/* 설정 버튼 */}
              <div className="col-3 fs-5 align-self-center">
                <SettingModal />
              </div>
              {/* 게시물, 팔로워, 팔로우 수 */}
              <div className="w-100"></div>
              <div className="col-3">
                게시물 <span className="fw-semibold">{User.ArticleCount}</span>
              </div>
              <div className="col-3">
                팔로워 <span className="fw-semibold">{User.FollowersCount}</span>
              </div>
              <div className="col-3">
                팔로우 <span className="fw-semibold">{User.FollowsCount}</span>
              </div>
              {/* 이름, 소개글 */}
              <div className="w-100"></div>
              <div className="col">
                <span className="fw-semibold">{User.Name}</span>
                <br />
                <a href={User.Link} target="_blank" rel="noopener noreferrer">
                  sooncoding.tistory.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
