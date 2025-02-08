import { useOutletContext } from "react-router-dom";
import { useState, useRef } from "react";
import { ProductCard } from "./ProductCard";
import styles from "./Products.module.css";

function Products() {
    const { products, error, loading, cart, setCart } = useOutletContext();
    const [filter, setFilter] = useState(false);

    const unfilter = () => {
        setFilter(false);
    };

    const onCategoryClick = (e, cat) => {
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
                <button className={styles.unfilter} onClick={unfilter}>
                    Unfilter
                </button>
                {Array.from(categories).map((category) => (
                    <button
                        key={category}
                        onClick={(e) => onCategoryClick(e, category)}
                        className={category === filter ? styles.selected : ""}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className={styles.products}>
                {products.map((product) => {
                    return product.category === filter || filter === false ? (
                        <ProductCard
                            key={product.id}
                            product={product}
                            cart={cart}
                            setCart={setCart}
                        />
                    ) : null;
                })}
            </div>
        </>
    );
}

export { Products };
