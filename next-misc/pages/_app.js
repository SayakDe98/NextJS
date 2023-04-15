import Head from 'next/head';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import 'styles/globals.css';
import 'styles/layout.css';


const MyApp = ({ Component, pageProps }) => {
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
    <>
    <Head>
      <title>Codevolution</title>
      <meta name = 'description' content = 'Awesome youtube channel' />
    </Head>
    <Header />
      <Component {...pageProps} />
    <Footer />
    </>
    );
};

export default MyApp;
