import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "./components/Navbar";

const scrollY = window.scrollY;

function App() {
    return (
        <>
            <Router>
                <Navbar scrollY={scrollY} />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
