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
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/policies">Policies</Link>
                </li>
                <li>
                    <Link to={"/cart"}>
                        Cart 🛒 <br />
                        <span>
                            {" "}
                            {cart.length > 0
                                ? `${cart.length} items`
                                : "Add a product"}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { Nav };
