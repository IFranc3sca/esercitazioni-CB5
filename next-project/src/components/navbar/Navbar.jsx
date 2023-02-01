import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/posts">POSTS</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
