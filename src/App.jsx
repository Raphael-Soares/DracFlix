import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Latest from "./pages/Latest";
import MyList from "./pages/MyList";
import ChoseProfile from "./pages/ChoseProfile";
import About from "./pages/About";

import Default from "./layouts/Default";
import Blank from "./layouts/Blank";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Default />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/tv-shows" element={<TVShows />}></Route>
                        <Route path="/movies" element={<Movies />}></Route>
                        <Route path="/latest" element={<Latest />}></Route>
                        <Route path="/my-list" element={<MyList />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Route>

                    <Route path="/" element={<Blank />}>
                        <Route path="/browse" element={<ChoseProfile />}></Route>
                    </Route>

                    <Route path="*" element={<h1>404 - Not Found</h1>}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
