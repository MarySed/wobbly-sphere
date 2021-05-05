import Head from 'next/head';
import Layout from 'components/Layout';
import Scene from 'components/Scene';
import styles from 'styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Test Portfolio</title>
          <meta
            name='test portfolio'
            content='Test portfolio using next js and mayyyybe react three fiber?'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Scene />

        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sagittis turpis. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Nam dictum porttitor nunc, eget
          egestas nisi faucibus sed. Sed tempus rutrum diam vel fermentum. Pellentesque ornare nibh
          vel libero sollicitudin, sed imperdiet risus sodales. Integer et mauris elit. Donec quis
          felis et ante aliquam maximus. Nullam orci nisl, malesuada quis porta ac, tristique non
          elit. Phasellus et tortor a massa congue dictum quis nec risus. Sed ut lectus ac magna
          porta mattis nec sit amet metus. Fusce commodo mauris quis ullamcorper mattis. Aenean nec
          mollis sapien, a ornare mauris. Nulla sit amet feugiat ex. Donec nunc arcu, feugiat et
          justo dignissim, molestie aliquam lectus. Donec sodales neque ex, eu sagittis leo sodales
          sed. Suspendisse in sagittis urna. Pellentesque lobortis, lectus viverra volutpat porta,
          diam lacus luctus sapien, id sagittis leo risus sit amet lacus. Morbi pharetra nisl a dui
          condimentum sollicitudin. Integer sit amet libero euismod, porta tortor ac, venenatis
          nunc. Duis pharetra, erat at ultrices luctus, dui velit tempus nisl, a tempus odio massa a
          ligula. Duis maximus efficitur diam. Nulla facilisi. Nam tristique ligula eget aliquam
          congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec iaculis odio pellentesque varius venenatis.
          Vestibulum consectetur semper bibendum. Ut viverra eget tellus sed ornare. Aenean dui est,
          efficitur quis facilisis id, ornare in neque. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Morbi non tellus et mi mollis
          sagittis at vel velit. Fusce eleifend eu lectus non mollis. Fusce semper cursus euismod.
          Suspendisse erat purus, venenatis in arcu sed, lobortis suscipit nibh. Vestibulum id
          iaculis sem. Sed hendrerit nisi sed magna porttitor dignissim. Ut ut blandit nisl. Morbi
          dictum leo urna, non vulputate turpis congue sed. In sit amet augue tristique, feugiat dui
          a, luctus nunc. In hac habitasse platea dictumst. Etiam orci turpis, scelerisque nec
          rhoncus non, molestie ac sem. Donec suscipit tempor nisi, a efficitur neque. Aenean
          vulputate rhoncus mi sit amet fermentum. Sed hendrerit ex massa, id tempus massa
          consectetur id. Ut pretium gravida elit, sed porttitor nisi sagittis at. Morbi at dolor eu
          mi feugiat dignissim in at nisi. Nullam sed rutrum purus. Nam a velit nisi. In mollis nunc
          et orci scelerisque suscipit. Vestibulum non laoreet lorem, nec mattis risus. Quisque
          ligula nunc, vehicula vel iaculis a, faucibus et erat. Sed dictum, sem placerat
          condimentum aliquam, nisi justo consectetur nulla, luctus gravida enim quam et ipsum.
          Aenean id auctor turpis, in luctus lectus. Vestibulum vel ante diam. Nunc urna dolor,
          maximus nec volutpat sodales, ultrices vel erat. Donec risus ex, tristique eget ligula at,
          consequat vestibulum elit. Vivamus sit amet congue odio. Curabitur laoreet placerat lorem
          eget facilisis. Suspendisse ornare, sem vel mollis luctus, dui odio ultrices ante, vitae
          laoreet urna tellus lobortis nisi. Suspendisse potenti. Duis tristique odio ut ligula
          vulputate, a porta ligula iaculis. Sed nec mauris nibh. Sed quis aliquet nulla.
          Pellentesque non arcu justo.
        </div>
      </Layout>
    </>
  );
};

export default Home;
