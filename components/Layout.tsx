import { ReactNode } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from 'styles/Layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header title={'Mary Sedarous'} />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
