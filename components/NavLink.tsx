import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from 'styles/NavLink.module.css';

type Props = {
  to: string;
  name: string;
};

const NavLink = ({ to, name }: Props) => {
  const { pathname } = useRouter();

  const isActive = pathname === to;

  return (
    <Link href={to}>
      <a
        className={classNames(styles['nav-link'], {
          [styles.active]: isActive
        })}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavLink;
