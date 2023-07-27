import React, { useState } from 'react';
import Header from './Header/Header';
import Article from './Article/ArticleContainer'
import SideBar from '../SideBar/SideBar';
import axios from 'axios';
import TestProfileImage from './Header/TestProfileImage.jpg';


const Profile = () => {
    const [user, setUser] = useState({
        imageurl: TestProfileImage,
        nickname: 'ldk.kdl',
        postcount: '29',
        followercount: '158',
        followcount: '217',
        name: '이동규',
        introducetext: 'https://sooncoding.tistory.com/m/',
    })
    
    // Make a request for a user with a given ID
    axios.get('api/user/login')
        .then(function (response) {
            // handle success
            console.log(response);
            setUser(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    return (
        <>
            <div style={{ marginLeft: "100px" }}>
                <Header
                    imgUrl={user.imageurl}
                    nickName={user.nickname}
                    postCount={user.postcount}
                    followerCount={user.followercount}
                    followCount={user.followcount}
                    name={user.name}
                    introduceText={user.introducetext}
                />
                <Article />
            </div>
            <SideBar />
        </>
    );
};

export default Profile;