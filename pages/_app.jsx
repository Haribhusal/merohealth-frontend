import "../styles/vendor/bootstrap.min.css";
import "../styles/style.scss";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store/CreateStore";
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
