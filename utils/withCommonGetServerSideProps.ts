import {GetServerSidePropsContext} from "next";
import {GetServerSidePropsResult} from "next/types";


import {getTenantHost} from "@/lib/axios";

import {AppStore, storeWrapper} from "@/store";
import {fetchTenant, getRunningTenantQueries} from "@/store/slices/api/tenantSlice";
import {setTenantHost} from "@/store/slices/app-slice";


interface ExtendedGetServerSidePropsContext extends GetServerSidePropsContext {
    store: AppStore;
    host: string;
}

export function withCommonGetServerSideProps(
    getServerSidePropsFunc?: (context: ExtendedGetServerSidePropsContext) => Promise<GetServerSidePropsResult<any>>
) {
    return storeWrapper.getServerSideProps((store) => async (context) => {
        const {req} = context;

        const host = getTenantHost(req);


        store.dispatch(setTenantHost(host));


        store.dispatch(fetchTenant.initiate());
        await Promise.all(store.dispatch(getRunningTenantQueries()));

        if (getServerSidePropsFunc) {
            const additionalProps = await getServerSidePropsFunc({
                ...context,
                store,
                host,
            });

            if (typeof additionalProps === "object" && "props" in additionalProps && additionalProps) {
                return {
                    props: {
                        ...additionalProps.props
                    }
                };
            }

            return additionalProps;
        }

        return {
            props: {}
        };
    });
}
