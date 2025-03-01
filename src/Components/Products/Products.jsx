import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import styles from "./Products.module.css";

function Products() {
    const { products, error, loading, cart, setCart } = useOutletContext();
    const [filter, setFilter] = useState(false);

    const unFilter = () => {
        setFilter(false);
    };

    const onCategoryClick = (cat) => {
        cat === filter ? unFilter() : setFilter(cat);
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
                {Array.from(categories).map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryClick(category)}
                        className={category === filter ? styles.selected : ""}
                        aria-label={`filter by ${category}`}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
                <button className={styles.unFilter} onClick={unFilter}>
                    Remove Filter
                </button>
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
