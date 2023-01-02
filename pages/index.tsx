import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import Heading from '../components/Heading';
import Socials from '../components/Socials';
import styles from '../styles/Home.module.scss';
import { socialType } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

type homeProps = {
  socials: [socialType];
};

const Home: FC<homeProps> = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Home page" />
    <Socials socials={socials} />
  </div>
);

export default Home;
