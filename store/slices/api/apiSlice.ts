import {createApi,} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";

import axiosBaseQuery from "./axiosBaseQuery";

import {AnyAction} from "redux";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery(),
    extractRehydrationInfo(action: AnyAction, {reducerPath}) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: () => ({})
});
