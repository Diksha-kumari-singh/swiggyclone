import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartslicer"

export const store = configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})