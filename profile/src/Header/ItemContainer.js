import React from 'react';

const ItemContainer = ({name, content}) => {
    return (
        <div>
            <div className='row'>
                <div className='col fw-bold fs-4 text-end me-3'>{name}</div>
                <div className='col text-start'>{content}</div>
            </div>
        </div>
    );
};

export default ItemContainer;