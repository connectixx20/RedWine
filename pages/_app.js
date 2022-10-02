import "../styles/css/index.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import { ScrollTo,Chat } from "../src";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Chat />
          <ScrollTo />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
