import '@/styles/globals.css'
import type {AppProps} from 'next/app'

import {Provider as ReduxProvider} from "react-redux";

import {storeWrapper} from "@/store";

export default function App({Component, pageProps: {session, ...rest}}: AppProps) {
    const {store, props} = storeWrapper.useWrappedStore(rest);
    const {_apiError, ...pageProps} = props;

    return (<ReduxProvider store={store}>
        <Component {...pageProps} />
    </ReduxProvider>)
}
