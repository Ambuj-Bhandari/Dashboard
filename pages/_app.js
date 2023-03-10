import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import "../styles/globals.css"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
