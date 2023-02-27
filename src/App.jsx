import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

import Navbar from "./components/Navbar";
import { MoviesProvider } from "./contexts/MoviesData";
import Favorites from "./pages/Favorites";

const scrollY = window.scrollY;

function App() {
    return (
        <>
            <Router>
                <Navbar scrollY={scrollY} />
                <MoviesProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/movies" element={<Movies />}></Route>
                        <Route path="/movie/:id" element={<Movie />}></Route>

                        <Route path="/favorites" element={<Favorites />}></Route>
                    </Routes>
                </MoviesProvider>
            </Router>
        </>
    );
}

export default App;
