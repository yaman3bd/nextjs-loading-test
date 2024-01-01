import { apiSlice } from "@/store/slices/api/apiSlice";
import { APISingleResourceResponse, Page } from "@/types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    fetchHomePage: builder.query<Page, string | void>({
      query: (slug) => ({
        url: "/pages/home",
        method: "GET",
        params: {
          slug
        }
      }),
      transformResponse: (response: APISingleResourceResponse<Page>) => response.data
    }),
    fetchPage: builder.query<Page, string>({
      query: (slug) => ({
        url: `/pages/${slug}`,
        method: "GET"
      }),
      transformResponse: (response: APISingleResourceResponse<Page>) => response.data
    })
  })
});

export const {
  useFetchPageQuery,
  useFetchHomePageQuery,
  util: { getRunningQueriesThunk: getRunningPageQueries }
} = extendedApiSlice;
export const { fetchPage, fetchHomePage } = extendedApiSlice.endpoints;
