import React from 'react';
import {useAppSelector} from "../Hooks/useAppSelector";


const SearchResult = () => {
    const {search} = useAppSelector(state => state.SearchSlice)
    console.log(search, 'serch results')
    return (
        <div id='popular'>
            <div className='popular'>
                {
                    search.map((el, idx) => (
                        <div>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            <h1>{el.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchResult;