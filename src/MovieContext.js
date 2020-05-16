import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setState] = useState([
        {
            name: 'Rick & Morty',
            price: '30$',
            id: 1
        },
        {
            name: 'Baki',
            price: '20$',
            id: 2
        },
        {
            name: 'Avatar',
            price: '20$',
            id: 3
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setState]}>
            {props.children}
        </MovieContext.Provider>
    );
}