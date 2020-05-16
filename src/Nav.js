import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
    const [movies] = useContext(MovieContext);
    return(
        <div className="Nav">
            <h3>JetFlex</h3>
            <span>List of Movies: {movies.length}</span>
        </div>
    );
};

export default Nav;
