import {combineReducers, configureStore} from "@reduxjs/toolkit";
import PopularSlice from "./Reducer/CreateSlice";
import TopRatedSlice from "./Reducer/TopRatedSlice";
import DetailSlice from "./Reducer/DetailSlice";
import ActorSlice from "./Reducer/ActorSlice";
import SearchSlice from "./Reducer/Search";
import DetailActorSlice from "./Reducer/DetailActors";
import TrailerSlice from "./Reducer/TrailerSlice";

const rootState = combineReducers({
    PopularSlice,
    TopRatedSlice,
    DetailSlice,
    ActorSlice,
    SearchSlice,
    DetailActorSlice,
    TrailerSlice
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootState = ReturnType<typeof rootState>

type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]