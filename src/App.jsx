import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import MyList from "./pages/MyList";

import Navbar from "./components/Navbar";

const scrollY = window.scrollY;

function App() {
    return (
        <>
            <Router>
                <Navbar scrollY={scrollY} />

                <Routes>
                    <Route path="/browse" element={<Home />}></Route>
                    <Route path="/tv-shows" element={<TVShows />}></Route>
                    <Route path="/movies" element={<Movies />}></Route>
                    <Route path="/latest" element={<Latest />}></Route>
                    <Route path="/my-list" element={<MyList />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
