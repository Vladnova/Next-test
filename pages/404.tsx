import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />

      <h3>Something is going wrong...</h3>
    </div>
  );
};

export default Error;
