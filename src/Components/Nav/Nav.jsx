import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ cart }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shopping">Shopping</Link>
                </li>
                <li>
                    <Link to="/policies">Policies</Link>
                </li>
                <li>
                    <Link to="/cart">
                        🛒<span>{cart.length}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { Nav };
