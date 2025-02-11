import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

function ProductCard({ product, cart, setCart }) {
    const dialogRef = useRef();
    const [multiAdd, setMultiAdd] = useState(0);

    function openDialog() {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }

    function closeDialog() {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    }

    const addToCart = () => {
        if (cart.length >= 100) {
            alert(
                "Sorry, you may only buy 100 items at a time! For a larger order, contact us via the Policies page."
            );
            return;
        }
        setCart((prev) => [...prev, product.id]);
    };

    const addAllToCart = () => {
        if (cart.length + 1 * multiAdd > 100) {
            alert(
                "Sorry, you may only buy 100 items at a time! Please adjust your order as necessary. For a larger order, contact us via the Policies page."
            );
            return;
        }

        let addItems = [];

        for (let i = 0; i < multiAdd; i++) {
            addItems = [...addItems, product.id];
        }
        setCart((prev) => [...prev, ...addItems]);
        setMultiAdd(0);
    };

    const removeFromCart = () => {
        const itemIndex = cart.indexOf(product.id);
        itemIndex >= 0
            ? setCart((prev) => {
                  return prev.toSpliced(itemIndex, 1);
              })
            : null;
    };

    const removeAllFromCart = () => {
        setCart((prev) => {
            return prev.filter((productId) => productId !== product.id);
        });
    };

    const onChange = (e) => {
        setMultiAdd(e.target.value);
    };

    return (
        <>
            <div className={styles.productCard}>
                <button className={styles.imageWrapper} onClick={openDialog}>
                    <img src={product.image} alt={product.title} />
                </button>
                <div className={styles.productFooter}>
                    <div className={styles.productInfo}>
                        <p className={styles.title}>{product.title}</p>
                        <p className={styles.price}>${product.price}</p>
                    </div>
                    <div className={styles.actions}>
                        <button
                            className={styles.removeBtn}
                            onClick={removeFromCart}
                            aria-label="Remove one item from cart"
                        >
                            ➖
                        </button>
                        <button
                            className={styles.removeAllBtn}
                            onClick={removeAllFromCart}
                            aria-label="Remove all items of this product from cart"
                        >
                            🗑️{" "}
                            {cart.reduce(
                                (accumulator, currentValue) =>
                                    accumulator +
                                    (currentValue === product.id ? 1 : 0),
                                0
                            )}
                        </button>
                        <button
                            className={styles.addBtn}
                            onClick={addToCart}
                            aria-label="Add one item to cart"
                        >
                            ➕
                        </button>
                        <div className={styles.multiAdd}>
                            <input
                                name="multiadd"
                                aria-label="Enter quantity to add"
                                id="multiadd"
                                className={styles.multiAddInput}
                                type="number"
                                onChange={onChange}
                                value={multiAdd}
                                max={100 - cart.length}
                                min={0}
                                step={1}
                            />
                            <button
                                className={styles.addAllBtn}
                                onClick={addAllToCart}
                                aria-label="Add multiple items to cart"
                            >
                                🛍️{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <dialog
                ref={dialogRef}
                className={styles.productCardDialog}
                onClick={closeDialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialogTitle"
            >
                <div className={styles.dialogContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={product.image} alt={`${product.title}`} />
                    </div>
                    <p id="dialogTitle" className={styles.title}>
                        {product.title}
                    </p>
                    <p className={styles.category}>
                        Category: {product.category}
                    </p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                    <button
                        onClick={closeDialog}
                        aria-label="Close details dialog"
                    >
                        Close
                    </button>
                </div>
            </dialog>
        </>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
    product: {
        id: 0,
        title: "example product",
        price: 100,
        category: "example",
        description: "this product appears when there was an unknown error",
        image: "an error occurred",
    },
    cart: [],
    setCart: () => alert("an error occurred"),
};

export { ProductCard };
