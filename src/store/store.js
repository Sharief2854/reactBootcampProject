import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

let store=configureStore({
    reducer:{
        todo:todoSlice.reducer,
        // counter:counterSlice.reducer
    }
});
export default store;