import NavLink from 'components/NavLink';
import styles from 'styles/Header.module.css';
import typographyStyles from 'styles/typography.module.css';

type Props = {
  title: string;
};

// TODO: Does the header realllllly need to be sticky? Maybe I can have a non sticky header and just some buttons that are sticky
const Header = ({ title }: Props) => {
  return (
    <div className={styles.header}>
      <div className={typographyStyles.headerSm}>{title}</div>
      <div>
        <NavLink to='/' name={'Home'} />
        <NavLink to='/About' name={'About'} />
      </div>
    </div>
  );
};

export default Header;
