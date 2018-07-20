import Head from 'next/head';
import Link from 'next/link';
import App from '../components/app';

const Index = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/scss/style.css" />
      <title key="title">はじめてのNEXT.js</title>
    </Head>
    <App />
    <div className="logo" />
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
    <img src="/static/images/top_vector.png" alt="" />
  </div>
)

export default Index
