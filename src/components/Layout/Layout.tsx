import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import logo from '../../assets/logo500.png';
import './Layout.scss';
import { useState } from "react";
import { LayoutContext } from "./LayoutContext";

// Layout component
const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <LayoutContext.Provider value={{darkMode}}>
            <div className="container">
                <Navbar height={'80px'}>
                    <Navbar.Logo src={logo} circle></Navbar.Logo>
                    <Navbar.Items justify="end">
                        <Navbar.Item><Link to={'./docs'} className="navbar-link">DOCS</Link></Navbar.Item>
                        <Navbar.Item>ABOUT</Navbar.Item>
                        <Navbar.Item>BLOG</Navbar.Item>
                    </Navbar.Items>
                </Navbar>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </LayoutContext.Provider>
    );
};

export default Layout;
