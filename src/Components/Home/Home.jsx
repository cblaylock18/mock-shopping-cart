import { Link, useOutletContext } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    const { products, error, loading } = useOutletContext();

    const style = (productIndex) => {
        return {
            backgroundImage:
                !loading && !error
                    ? `url(${products[productIndex].image})`
                    : "none",
            backgroundColor:
                loading || error ? "var(--first-color)" : "transparent",
        };
    };

    return (
        <div className={styles.home}>
            <h2>
                Welcome to the &quot;So Cool It&apos;s Literally Unreal&quot;
                shopping store!
            </h2>
            <p>You can see some of our top products below.</p>
            <div className={styles.content}>
                {
                    <>
                        <div style={style(0)}>
                            <p>
                                {loading
                                    ? "Loading..."
                                    : error
                                    ? "We encountered a network error."
                                    : products[0].title}
                            </p>
                        </div>
                        <div style={style(1)}>
                            <p>
                                {loading
                                    ? "Loading..."
                                    : error
                                    ? "We encountered a network error."
                                    : products[1].title}
                            </p>
                        </div>
                    </>
                }
            </div>
            <Link to="products">Click here for all our products!</Link>
        </div>
    );
}

export { Home };
