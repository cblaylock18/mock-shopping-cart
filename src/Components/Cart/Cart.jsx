import { ProductCard } from "../Products/ProductCard";
import { useOutletContext, Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
    const { products, error, loading, cart, setCart, cartTotal } =
        useOutletContext();

    if (loading)
        return (
            <div className={styles.loading}>
                Loading...<div></div>
            </div>
        );
    if (error)
        return (
            <div className={styles.error}>We encountered a network error.</div>
        );

    const productsInCart = products.filter((product) =>
        cart.includes(product.id)
    );

    const checkoutClick = () => {
        cart.length > 0
            ? alert("Your funds have been deducted. Have a nice day!")
            : alert("Add something to your cart first!");
        setCart([]);
    };

    return (
        <>
            <h3 className={styles.header}>Your Cart</h3>
            <div className={styles.checkoutContainer}>
                <div className={styles.checkoutHeader}>
                    Current Total: ${cartTotal}
                </div>
                <button className={styles.checkoutBtn} onClick={checkoutClick}>
                    Checkout
                </button>
            </div>
            <div className={styles.cartItems}>
                {productsInCart.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            cart={cart}
                            setCart={setCart}
                        />
                    );
                })}
            </div>

            <Link to="products" className={styles.link}>
                Click here to {cart.length === 0 ? "start" : "keep"} shopping!
            </Link>
        </>
    );
}

export { Cart };
