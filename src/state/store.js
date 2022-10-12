import { configureStore } from '@reduxjs/toolkit'
import amountReducer from "./reducers/amountReducer";
import changeTheme from "./reducers/changeTheme";

export const store = configureStore({
    reducer: {
        amount : amountReducer,
        theme : changeTheme,
    }
})