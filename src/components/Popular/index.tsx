import React, {useEffect} from 'react';
import {useAppDispatch} from "../Hooks/useAppDispatch";
import {getPopular} from "../../store/Reducer/CreateUrl";
import PopularDetail from "../page/Popular/PopularDetail";
import {useAppSelector} from "../Hooks/useAppSelector";
import './index.scss'



const Popular = () => {
    const dispatch = useAppDispatch()
    const {users, loading, error} = useAppSelector((state) => state.PopularSlice)
    const {language} = useAppSelector(( state) => state.DetailSlice)
    console.log(language)
    useEffect(() => {
        dispatch(getPopular(language))
    }, [language])

    return (
        <div id='popular'>
            <div className='containers'>
                <div className='popular basis-1/4'>
                    {
                        users.map((el) => (
                            <div key={el.id}><PopularDetail el={el} /></div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;