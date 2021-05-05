import Head from 'next/head';
import Footer from 'components/Footer';
import styles from 'styles/Home.module.css';
import Layout from 'components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Test Portfolio</title>
        <meta
          name='test portfolio'
          content='Test portfolio using next js and mayyyybe react three fiber?'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* TODO: Add react-three-fiber or something else here */}
      <div> React three fiber or whatever I decide to use will go here.</div>
      <div>This is just a test</div>
      <div>
        Still not totally sure what I want to do with this ahhhhhhhhhhhhhh :(
      </div>
    </Layout>
  );
};

export default Home;
