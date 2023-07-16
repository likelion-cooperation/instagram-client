import React from 'react';
import './ArticleContainer.css'
import ArticleRow from './ArticleRow';
import I1Src from './logo.jpg'

const ArticleContainer = () => {
    // Article 정보
    const ArticleSrc =
    {
        row1: {
            src1: I1Src, alt1: '0-1', fav1: '11', com1: '11',
            src2: I1Src, alt2: '0-2', fav2: '12', com2: '12',
            src3: I1Src, alt3: '0-3', fav3: '13', com3: '13',
        },
        row2: {
            src1: I1Src, alt1: '1-1', fav1: '21', com1: '21',
            src2: I1Src, alt2: '1-2', fav2: '22', com2: '22',
            src3: I1Src, alt3: '1-3', fav3: '23', com3: '23',
        },
        row3: {
            src1: I1Src, alt1: '2-1', fav1: '31', com1: '31',
            src2: I1Src, alt2: '2-2', fav2: '32', com2: '32',
            src3: I1Src, alt3: '2-3', fav3: '33', com3: '33',
        },
    };

    // 렌더링
    return (
        <>
            <div className='ArticleContainer container text-center'>
                <hr />
                <div className='row '>
                    {/* 1행 */}
                    <ArticleRow
                        src1={ArticleSrc.row1.src1} fav1={ArticleSrc.row1.fav1} com1={ArticleSrc.row1.com1}
                        src2={ArticleSrc.row1.src2} fav2={ArticleSrc.row1.fav2} com2={ArticleSrc.row1.com2}
                        src3={ArticleSrc.row1.src3} fav3={ArticleSrc.row1.fav3} com3={ArticleSrc.row1.com3}>
                    </ArticleRow>
                    {/* 2행 */}
                    <ArticleRow
                        src1={ArticleSrc.row2.src1} fav1={ArticleSrc.row2.fav1} com1={ArticleSrc.row2.com1}
                        src2={ArticleSrc.row2.src2} fav2={ArticleSrc.row2.fav2} com2={ArticleSrc.row2.com2}
                        src3={ArticleSrc.row2.src3} fav3={ArticleSrc.row2.fav3} com3={ArticleSrc.row2.com3}>
                    </ArticleRow>
                    {/* 3행 */}
                    <ArticleRow
                        src1={ArticleSrc.row3.src1} fav1={ArticleSrc.row3.fav1} com1={ArticleSrc.row3.com1}
                        src2={ArticleSrc.row3.src2} fav2={ArticleSrc.row3.fav2} com2={ArticleSrc.row3.com2}
                        src3={ArticleSrc.row3.src3} fav3={ArticleSrc.row3.fav3} com3={ArticleSrc.row3.com3}>
                    </ArticleRow>
                </div>
            </div>
        </>
    );
};

export default ArticleContainer;