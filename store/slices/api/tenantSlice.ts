import { apiSlice } from "@/store/slices/api/apiSlice";
import { APISingleResourceResponse, Academy, AppSlug } from "@/types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    fetchTenant: builder.query<Academy, void>({
      query: () => ({
        url: "",
        method: "GET"
      }),
      transformResponse: (response: APISingleResourceResponse<Academy>) => {
        return {
          ...response.data,
          msaaqpay_enabled: !!response.data.apps.find((app) => app.slug === AppSlug.Msaaqpay)
        };
      }
    })
  })
});

// Export hooks for usage in functional components
export const {
  useFetchTenantQuery,
  util: { getRunningQueriesThunk: getRunningTenantQueries }
} = extendedApiSlice;

// export endpoints for use in SSR
export const { fetchTenant } = extendedApiSlice.endpoints;
