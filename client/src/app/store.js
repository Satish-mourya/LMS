// configure the store 
import {configureStore} from "@reduxjs/toolkit"
// import authReducer from "../features/authSlice.js"  // we are exporting the reducer that's why we can take any name
import rootReducer from "./rootReducer.js";
import authApi from "@/features/api/authApi.js";
const appStore = configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware)
});

export default appStore;