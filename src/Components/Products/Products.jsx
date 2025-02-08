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

    const removeAllFromCart = () => {
        setCart((prev) => {
            return prev.filter((productId) => productId !== product.id);
        });
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

// left off needing a way for user to add something to the cart!

function Products() {
    const { products, error, loading, cart, setCart } = useOutletContext();
    const [filter, setFilter] = useState(false);

    const unfilter = () => {
        setFilter(false);
    };

    const onCategoryClick = (cat) => {
        setFilter(cat);
    };

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

    const categories = new Set();
    products.forEach((product) => {
        categories.add(product.category);
    });

    return (
        <>
            <h3 className={styles.header}>
                Click each product for more details!
            </h3>
            <div className={styles.categories}>
                <button onClick={filter ? unfilter : null}>Filter</button>
                {Array.from(categories).map((category) => (
                    <button key={category} onClick={onCategoryClick}>
                        {category}
                    </button>
                ))}
            </div>
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
        </>
    );
}

export { Products };
