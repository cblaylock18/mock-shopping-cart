import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Nav({ cart, cartTotal }) {
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
                                ? `${cart.length} items: $${cartTotal}`
                                : "Add a product"}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

Nav.propTypes = {
    cart: PropTypes.array.isRequired,
    cartTotal: PropTypes.number.isRequired,
};

Nav.defaultProps = {
    cart: [],
    cartTotal: 0,
};

export { Nav };
