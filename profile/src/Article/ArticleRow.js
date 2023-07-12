import React from 'react';
import './ArticleRow.css';

const ArticleRow = ({src1, src2, src3, alt1, alt2, alt3}) => {
    return (
        <>
            {/* 빈줄 */}
            <div className='w-100'></div>
            <div className='ArticleImage col-3 m-1 p-0 '>
                <img src={src1} alt={alt1} width="100%" height="100%">

                </img>
            </div>
            <div className='ArticleImage col-3 m-1 p-0'>
                <img src={src2} alt={alt2} width="100%" height="100%">

                </img>
            </div>
            <div className='ArticleImage col-3 m-1 p-0'>
                <img src={src3} alt={alt3} width="100%" height="100%">

                </img>
            </div>
        </>
    );
};



export default ArticleRow;