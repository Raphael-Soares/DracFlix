import {Link} from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/movies">
                        Movies
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/favorites">
                        Favorites
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
