import React from 'react';
import './assets/Components.css';

const Grid = ({ elements, columns }) => {
    return (
        <div className='grid' style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {elements}
        </div>
    )
}

export default Grid;