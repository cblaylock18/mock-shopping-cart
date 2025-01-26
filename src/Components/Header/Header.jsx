import styles from "./Header.module.css";
import fishLogo from "/fish.svg";

function Header() {
    return (
        <header>
            <h1 className={styles.h1}>
                Shopping Cart App
                <span>
                    <img
                        src={fishLogo}
                        alt="Company logo, a fish"
                        height="30px"
                    />
                </span>
            </h1>
        </header>
    );
}

export { Header };
