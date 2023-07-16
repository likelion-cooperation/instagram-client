import React from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ArticleFavoriteComment = ({fav, com}) => {
    return (
        <>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '30%',
                color: 'white',
            }}>
                <FavoriteIcon className='me-2' style={{ color: 'white', }}></FavoriteIcon><span className='me-4'>{fav}</span>
                <ModeCommentIcon className='me-2' style={{ color: 'white', }} /><span>{com}</span>
            </div>
        </>
    );
};

export default ArticleFavoriteComment;