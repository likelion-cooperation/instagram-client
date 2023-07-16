import React from 'react';
import './ArticleContainer.css'
import ArticleRow from './ArticleRow';
import I1Src from './logo.jpg'

const ArticleContainer = () => {
    const ArticleSrc = [
        { id: 0, src1: I1Src, src2: I1Src, src3: I1Src, alt1: '0-1', alt2:'0-2', alt3:'0-3'},
        { id: 1, src1: I1Src, src2: I1Src, src3: I1Src, alt1: '1-1', alt2:'1-2', alt3:'1-3'},
        { id: 2, src1: I1Src, src2: I1Src, src3: I1Src, alt1: '2-1', alt2:'2-2', alt3:'2-3'},

    ];


    return (
        <>
            <div className='ArticleContainer container text-center'>
            <hr />
                <div className='row '>
                    <ArticleRow src1={ArticleSrc[0].src1} alt1={ArticleSrc[0].alt1} src2={ArticleSrc[0].src2} src3={ArticleSrc[0].src3}></ArticleRow>
                    <ArticleRow src1={ArticleSrc[1].src1} alt1={ArticleSrc[1].alt1} src2={ArticleSrc[1].src2} src3={ArticleSrc[1].src3}></ArticleRow>
                    <ArticleRow src1={ArticleSrc[2].src1} src2={ArticleSrc[2].src2} src3={ArticleSrc[2].src3}></ArticleRow>
                </div>
            </div>
        </>
    );
};

export default ArticleContainer;