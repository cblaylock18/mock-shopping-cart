import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Nav } from "../Components/Nav/Nav";
import { Footer } from "../Components/Footer/Footer";
import styles from "./App.module.css";

function App() {
    const [cart, setCart] = useState([1, 2, 3, 4, 5]);

    return (
        <div className={styles.app}>
            <Header></Header>
            {/* maybe pull the header, nav, footer, etc. elements out of their components and put them here for ease of layout styling */}
            <Nav cart={cart}></Nav>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
