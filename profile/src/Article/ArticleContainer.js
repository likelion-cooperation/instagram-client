import React from 'react';
import './ArticleContainer.css'
import ArticleRow from './ArticleRow';

const ArticleContainer = () => {
    return (
        <>
            <div className='ArticleContainer container text-center'>
                <div className='row '>
                    <ArticleRow></ArticleRow>
                    <ArticleRow></ArticleRow>
                    <ArticleRow></ArticleRow>
                </div>
            </div>
        </>
    );
};

export default ArticleContainer;