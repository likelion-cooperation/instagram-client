import React from 'react';
import ProfileContainer from './ProfileContainer/index';
import InstagramFeed from './MainFeed/index';
import SideBar from '../../SideBar/SideBar';

const Feed = () => {
    return (
        <div>
            <SideBar></SideBar>
            <ProfileContainer></ProfileContainer>
            <InstagramFeed></InstagramFeed>
        </div>
    );
};

export default Feed;