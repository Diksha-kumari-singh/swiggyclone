import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartslicer.js";

export const store = configureStore({
    reducer:{
        cartslice:cartreducer,
    }
})