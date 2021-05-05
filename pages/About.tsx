import Image from 'next/image';
import Head from 'next/head';
import Profile from 'components/Profile';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import styles from 'styles/About.module.css';
import typographyStyles from 'styles/typography.module.css';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Test Portfolio - About</title>
        <meta
          name='test portfolio about page'
          content='Test portfolio using next js and mayyyybe react three fiber?'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className={typographyStyles.headerLg}>Hello World</h1>
      <div className={styles.section}>
        <Image
          //@ts-expect-error
          src={process.env.RANDOM_CAT_URL}
          width={500}
          height={500}
          className={styles['profile-pic']}
        />
      </div>
      <div className={styles.section}>
        <Profile name={'Mary'} />
      </div>
    </Layout>
  );
};

export default About;
