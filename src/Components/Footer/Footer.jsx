import { Link } from "react-router-dom";
import fishLogo from "/fish.svg";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <h3>
                Questions? Contact us <Link to={"/policies"}>here</Link>!
                <span>
                    <img
                        src={fishLogo}
                        alt="Company logo, a fish"
                        height="30px"
                    />
                </span>
            </h3>
        </footer>
    );
}

export { Footer };
