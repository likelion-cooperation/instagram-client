import React, { useState } from "react";
import {
    RightBody,
    Profile,
    ProfileImg,
    User,
    Recommend,
    Title,
    Profilelist,
    ProfileAnchor,
    Follow
} from "./style"
import Test from "../../../assets/icon.png"

const usersData = [
    {
        id: 'User_1',
        name: 'User 1',
        link: '/user-1-link',
        recommendation: '회원님을 위한 추천 1',
    },
    {
        id: 'User_2',
        name: 'User 2',
        link: '/user-2-link',
        recommendation: '회원님을 위한 추천 2',
    },
    {
        id: 'User_3',
        name: 'User 1',
        link: '/user-1-link',
        recommendation: '회원님을 위한 추천 1',
    },
    {
        id: 'User_4',
        name: 'User 2',
        link: '/user-2-link',
        recommendation: '회원님을 위한 추천 2',
    },
];

function ProfileContainer() {
    return (
        <RightBody>
            <Profile>
                <ProfileImg $test={Test} />
                <User>
                    <a href="/your-link">MainUser</a>
                    <span>유저이름</span>
                </User>
            </Profile>
            <Recommend>
                <Title>
                    <span>회원님을 위한 추천</span>
                    <a href="/your-link">모두 보기</a>
                </Title>
                {usersData.map((user) => (
                    <Profilelist>
                        <ProfileAnchor />
                        <User>
                            <a href="/your-link">{user.id}</a>
                            <span>회원님을 위한 추천</span>
                        </User>
                        <Follow href={user.link}>팔로우</Follow>
                    </Profilelist>
                ))}
            </Recommend>
        </RightBody>
    )
}

export default ProfileContainer;