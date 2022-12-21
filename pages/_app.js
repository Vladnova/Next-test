import Layout from '../components/Layout';
import '../styles/globals.scss';
import Image from 'next/image';
import youtubeImage from '../public/youtube.png';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
