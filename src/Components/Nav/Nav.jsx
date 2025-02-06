import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ cart }) {
    return (
        <>
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
                        Shopping Cart 🛒 <br />
                        <span>
                            {" "}
                            {cart.length > 0
                                ? `${cart.length} items`
                                : "Empty!"}
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export { Nav };
