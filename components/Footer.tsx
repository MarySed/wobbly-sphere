import { ReactNode } from 'react';
import styles from 'styles/Footer.module.css';

type Props = {
  content?: ReactNode | string;
};

// TODO: Should Footer component always be displayed? Should it always display the same values? Still thinking

const Footer = ({ content = 'This is a footer' }: Props) => {
  return <footer className={styles.footer}>{content}</footer>;
};

export default Footer;
