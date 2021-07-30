import Layout from "../components/layout";

export default ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);