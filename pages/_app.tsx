import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import Layout from "../components/layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
