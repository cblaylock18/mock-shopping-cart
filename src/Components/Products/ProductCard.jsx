import { useRef, useState } from "react";
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
        if (cart.length + multiAdd > 100) {
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
                <div className={styles.imageWrapper} onClick={openDialog}>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.productFooter}>
                    <div className={styles.productInfo}>
                        <p className={styles.title}>{product.title}</p>
                        <p className={styles.price}>${product.price}</p>
                    </div>
                    <div className={styles.actions}>
                        <button
                            className={styles.removeBtn}
                            onClick={removeFromCart}
                        >
                            ➖
                        </button>
                        <button
                            className={styles.removeAllBtn}
                            onClick={removeAllFromCart}
                        >
                            🗑️{" "}
                            {cart.reduce(
                                (accumulator, currentValue) =>
                                    accumulator +
                                    (currentValue === product.id ? 1 : 0),
                                0
                            )}
                        </button>
                        <button className={styles.addBtn} onClick={addToCart}>
                            ➕
                        </button>
                        <div className={styles.multiAdd}>
                            <input
                                name="multiadd"
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
            >
                <div className={styles.dialogContainer}>
                    <div className={styles.imageWrapper}>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.category}>
                        Category: {product.category}
                    </p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                    <button onClick={closeDialog}>Close</button>
                </div>
            </dialog>
        </>
    );
}

export { ProductCard };
