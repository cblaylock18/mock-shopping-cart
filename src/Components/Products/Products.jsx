import { useOutletContext } from "react-router-dom";
import { useState, useRef } from "react";
import styles from "./Products.module.css";

function ProductCard({ product }) {
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

    return (
        <>
            <div className={styles.productCard} onClick={openDialog}>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <img
                    src={product.image}
                    alt={product.description}
                    height="150px"
                />
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
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
}

export { Products };
