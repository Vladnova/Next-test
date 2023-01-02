import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import Heading from '../../components/Heading';
import { postType } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

type postsProps = {
  posts: [postType];
};

const Posts: FC<postsProps> = ({ posts }) => (
  <>
    <Head>
      <title>Posts</title>
    </Head>
    <Heading text="Post list" />
    <ul>
      {posts &&
        posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
    </ul>
  </>
);

export default Posts;
