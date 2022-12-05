import {configureStore} from "@reduxjs/toolkit"
import testsSlice from "./testsSlice"
export const store = configureStore({
    reducer:{
        tests: testsSlice.reducer
    }
})