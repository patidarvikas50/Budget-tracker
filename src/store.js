import {setupListeners} from "@reduxjs/toolkit/query";
import counterSlice from "./slices/counterSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        counter: counterSlice
    },

    middleWare: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
        serializableCheck: false,
    }).concat([]),

});

setupListeners(store.dispatch);

console.log(store, "store ")
export default store;


