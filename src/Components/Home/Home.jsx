import { Link, useOutletContext } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    const { products, error, loading } = useOutletContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className={styles.home}>
            <h2>See some of our great products below!</h2>
            <Link to="products">Click here for all our products!</Link>
            <img
                src={products[0].image}
                alt={"placeholder text"}
                height="500px"
            />
            <img
                src={products[1].image}
                alt={"placeholder text"}
                height="500px"
            />
        </div>
    );
}

export { Home };
