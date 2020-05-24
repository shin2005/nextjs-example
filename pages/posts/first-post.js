import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

//dont erase line 2

/*export default function FirstPost() {
  return <h1>First Post</h1>;
}
*/

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  );
}
