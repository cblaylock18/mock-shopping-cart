import styles from "./Policies.module.css";

function Policies() {
    return (
        <div className={styles.policies}>
            <p>
                This is the policy content! If this were a real webpage, this
                where the terms and conditions would go. There would probably be
                a separate page for FAQs. And of course a different page aside
                from this to contact the company! But for the purposes of this
                project, everything will be contained here in the Policies page
                - at least in our imaginations!
            </p>
        </div>
    );
}

export { Policies };
