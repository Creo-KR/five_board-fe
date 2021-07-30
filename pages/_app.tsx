import type { AppProps /*, AppContext */ } from 'next/app'

import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;