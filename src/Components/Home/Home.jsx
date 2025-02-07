import { Link, useOutletContext } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    const { products, error, loading } = useOutletContext();

    return (
        <div className={styles.home}>
            <h2>
                Welcome to the &quot;So Cool It&apos;s Literally Unreal&quot;
                shopping store!
            </h2>
            <p>You can see some of our top products below.</p>
            <div className={styles.content}>
                {loading && (
                    <>
                        <div className={styles.loading}>Loading image ⌛️</div>
                        <div className={styles.loading}>Loading image ⌛️</div>
                    </>
                )}
                {error && (
                    <>
                        <div className={styles.error}>
                            A network error occurred. 😭
                        </div>
                        <div className={styles.error}>
                            A network error occurred. 😭
                        </div>
                    </>
                )}
                {!loading && !error && (
                    <>
                        <img
                            src={products[0].image}
                            alt={products[0].description}
                        />
                        <img
                            src={products[1].image}
                            alt={products[1].description}
                        />
                    </>
                )}
            </div>
            <Link to="products">Click here for all our products!</Link>
        </div>
    );
}

export { Home };
