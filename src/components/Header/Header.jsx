import React from "react";

import { MdOutlineSearch, MdOutlineNotificationsNone, MdArrowDropDown } from "react-icons/md";

import "./header.scss";

function Header() {
    return (
        <div className="container">
            <nav>
                <div className="logo">
                    <h1>Netflix</h1>
                </div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">TV Shows</a>
                    </li>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">New & Popular</a>
                    </li>
                    <li>
                        <a href="#">My List</a>
                    </li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li>
                    
                            <MdOutlineSearch />
                     
                    </li>
                    <li>
                   
                            <MdOutlineNotificationsNone />
                   
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
