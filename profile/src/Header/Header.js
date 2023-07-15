import React from 'react';
import TestProfileImage from './TestProfileImage.jpg';
import './Header.css';
import SettingModal from './SettingModal';
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
      <div className="Header container justify-content-start text-start mb-5 mt-5">
        <div className="row align-items-center">
          <div className="col-4">
            <div className="row justify-content-center">
              <img className="profileImage p-0" src={TestProfileImage} alt="ProfileImage" />
            </div>
          </div>
          <div className="col-6 headInformationContainer">
            <div className="row justify-content-start">
              <div className="col-3 fs-5" style={{ marginTop: '10px' }}>
                {User.NickName}
              </div>
              <div className="col-3" style={{ paddingLeft: '0px', marginTop: '10px' }}>
                <Link to="/ProfileEdit">
                  <button className="editButton fw-semibold px-4 py-1">
                    프로필 편집
                  </button>
                </Link>
              </div>
              <div className="col-3 fs-5">
                <SettingModal />
              </div>

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
