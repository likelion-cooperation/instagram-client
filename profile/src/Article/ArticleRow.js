import React from 'react';
import logo from './logo.jpg';
import './ArticleRow.css';

const ArticleRow = () => {
    return (
        <>
            {/* 빈줄 */}
            <div className='w-100'></div>
            <div className='col-3 m-1 p-0 '>
                <img src={logo} alt='logo' width="100%" height="100%">

                </img>
            </div>
            <div className='col-3 m-1 p-0'>
                <img src={logo} alt='logo' width="100%" height="100%">

                </img>
            </div>
            <div className='col-3 m-1 p-0'>
                <img src={logo} alt='logo' width="100%" height="100%">

                </img>
            </div>
        </>
    );
};



export default ArticleRow;