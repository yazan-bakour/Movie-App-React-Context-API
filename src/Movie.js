import React from 'react';

const Movie = ({name, price, id}) => {
    return(
        <div className="jcse if w90 jcs aic">
            <h3 className='tl'>{name}</h3>
            <span className='ml10px'>{price}</span>
        </div>
    );
};

export default Movie;
