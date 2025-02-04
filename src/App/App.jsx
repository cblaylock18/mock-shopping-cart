import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import styles from "./App.module.css";

const getProducts = (url) => {
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
    const [cart, setCart] = useState([1, 2, 3, 4, 5]);
    const { products, error, loading } = getProducts(
        "https://fakestoreapi.com/products"
    );

    return (
        <div className={styles.app}>
            <header>
                <Header />
            </header>
            <nav>
                <Nav cart={cart} />
            </nav>
            <main>
                <Outlet context={{ products, error, loading, cart, setCart }} />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
