import styles from "./Header.module.css";
import fishLogo from "/fish.svg";

function Header() {
    return (
        <>
            <h1 className={styles.h1}>Shopping Cart App </h1>
            <div>
                <img src={fishLogo} alt="Company logo, a fish" height="30px" />
            </div>
        </>
    );
}

export { Header };
