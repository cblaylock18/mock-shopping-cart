import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { Shopping } from "../Shopping/Shopping";

const useImageURLs = () => {
    const [imageURLs, setImageURLs] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=2", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((data) => {
                const responseURLs = data.map((item) => item.image);
                setImageURLs(responseURLs);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { imageURLs, error, loading };
};

function Home() {
    const { imageURLs, error, loading } = useImageURLs();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className={styles.home}>
            <h2>See some of our great products below!!</h2>
            <Link to="shopping">Click Shopping for all our products!</Link>
            <img src={imageURLs[0]} alt={"placeholder text"} height="500px" />
            <img src={imageURLs[1]} alt={"placeholder text"} height="500px" />
        </div>
    );
}

export { Home };
