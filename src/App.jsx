import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/movies" element={<Movies />}>
                        <Route path=":id" element={<Movie />}></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
