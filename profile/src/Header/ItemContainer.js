import React from 'react';

const ItemContainer = ({name, content}) => {
    return (
        <div>
            <div className='row'>
                <div className='col-3 fs-5 fw-bold text-end me-3'>{name}</div>
                <div className='col-7 text-start mb-3'>{content}</div>
            </div>
        </div>
    );
};

export default ItemContainer;