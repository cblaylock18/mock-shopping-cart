import styles from "./Footer.module.css";
import fishLogo from "/fish.svg";

function Footer() {
    return (
        <>
            <h4 className={styles.h4}>
                Footer
                <span>
                    <img
                        src={fishLogo}
                        alt="Company logo, a fish"
                        height="30px"
                    />
                </span>
            </h4>
        </>
    );
}

export { Footer };
