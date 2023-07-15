import React from 'react';
import Header from '../Header/Header'
import Article from '../Article/ArticleContainer'
// import { BrowserRouter } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';



const Profile = () => {
    return (
        <>
            <div style={{ marginLeft: "100px" }}>
                <Header />
                <Article />
            </div>
            <SideBar />
        </>
    );
};

export default Profile;