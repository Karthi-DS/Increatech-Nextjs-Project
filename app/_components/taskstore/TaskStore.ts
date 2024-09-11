import {configureStore} from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";

export const TaskStore = configureStore({
    devTools:true,
    reducer:{
        tasks:TaskSlice
    }
})
