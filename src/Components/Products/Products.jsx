import { useOutletContext } from "react-router-dom";
import { useState, useRef } from "react";
import styles from "./Products.module.css";

function ProductCard({ product, cart, setCart }) {
    const dialogRef = useRef();

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

    const removeFromCart = () => {
        const itemIndex = cart.indexOf(product.id);
        itemIndex >= 0
            ? setCart((prev) => {
                  return prev.toSpliced(itemIndex, 1);
              })
            : null;
    };

    return (
        <>
            <div className={styles.productCard}>
                <div className={styles.imageWrapper} onClick={openDialog}>
                    <img src={product.image} alt={product.title} />
                </div>

                <div className={styles.productFooter}>
                    <div className={styles.productInfo}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                    </div>
                    <div className={styles.actions}>
                        <button
                            className={styles.removeBtn}
                            onClick={removeFromCart}
                        >
                            Remove from Cart
                        </button>
                        <button className={styles.addBtn} onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <dialog
                ref={dialogRef}
                className={styles.productCardDialog}
                onClick={closeDialog}
            >
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <img src={product.image} alt={product.title} />
                <button onClick={closeDialog}>Close</button>
            </dialog>
        </>
    );
}

// left off needing a way for user to add something to the cart!

function Products() {
    const { products, error, loading, cart, setCart } = useOutletContext();

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

    return (
        <div className={styles.products}>
            {products.map((product) => {
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
    );
}

export { Products };
