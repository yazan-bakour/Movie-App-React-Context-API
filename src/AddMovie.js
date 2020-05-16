import React,{useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState();
    const [movies, setMovies] = useContext(MovieContext);
    
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
    //add movie, reset input text, and change the state value
    const addMovie = e => {
        e.preventDefault();
        if (!name || !price) return;
        //preMovies is the latest movies content we had, ... is the number of current objects we have in state array and add to them
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, id: Math.floor(Math.random() * 100) + 1 }]);
        setName('');
        setPrice('');
    }

    return (
        <form onSubmit={addMovie} id="mt">
            <input placeholder="Movie name" type="text" name="name" value={name ?? ''} onChange={updateName} />
            <input placeholder="Movie price" type="text" name="price" value={price} onChange={updatePrice} />
            <button onClick={addMovie} type="submit" key={id}>Add Movie</button>
            {/* {console.log(movies)} */}
        </form>
    );
}

export default AddMovie;