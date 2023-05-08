import React, {useEffect} from 'react';
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {useAppSelector} from "../Hooks/useAppSelector";
import {getTopRated} from "../../store/Reducer/CreateUrl";
import './index.scss'
import PopularDetail from "../page/Popular/PopularDetail";

const TopRated = () => {
    const dispatch = useAppDispatch()
    const {users, loading, error} = useAppSelector((state) => state.TopRatedSlice)


    useEffect(() => {
        dispatch(getTopRated())
    }, [])

    return (
        <div id='topRated'>
            <div className='containers'>
                <div className='topRated basis-1/2'>
                    {
                        users.map((el) => (
                            <PopularDetail el={el} key={el.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;