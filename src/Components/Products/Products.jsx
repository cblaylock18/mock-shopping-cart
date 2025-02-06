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
        // if (cart.length > 100) {
        //     alert(
        //         "Sorry, you may only buy 100 items at a time! For a larger order, contact us via the Policy page."
        //     );
        // }
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
                <div onClick={openDialog}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <img
                        src={product.image}
                        alt={product.description}
                        height="150px"
                    />
                </div>
                <button onClick={addToCart}>Add to Cart</button>
                <button onClick={removeFromCart}>Remove from Cart</button>
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
                <img
                    src={product.image}
                    alt={product.description}
                    height="150px"
                />
                <button onClick={closeDialog}>Close</button>
            </dialog>
        </>
    );
}

// left off needing a way for user to add something to the cart!

function Products() {
    const { products, error, loading, cart, setCart } = useOutletContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

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
