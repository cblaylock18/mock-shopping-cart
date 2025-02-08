import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import styles from "./App.module.css";

const useProducts = (url) => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${url}`, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { products, error, loading };
};

function App() {
    const [cart, setCart] = useState([]);
    const { products, error, loading } = useProducts(
        "https://fakestoreapi.com/products"
    );

    let productPriceMap = {};
    let cartTotal;
    if (!error && !loading) {
        products.forEach((product) => {
            productPriceMap[product.id] = product.price;
        });

        cartTotal = cart
            .reduce(
                (accumulator, currentValue) =>
                    accumulator + productPriceMap[currentValue],
                0
            )
            .toFixed(2);
    }

    return (
        <div className={styles.app}>
            <Header />
            <Nav cart={cart} cartTotal={cartTotal} />
            <main>
                <Outlet
                    context={{
                        products,
                        error,
                        loading,
                        cart,
                        setCart,
                        cartTotal,
                    }}
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;
