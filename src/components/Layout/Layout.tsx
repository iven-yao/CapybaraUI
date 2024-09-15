import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import logo from '../../assets/logo500.png';
import './Layout.scss';
import { LayoutContext } from "./LayoutContext";

// Layout component
const Layout = () => {
    // const [darkMode, setDarkMode] = useState(false);

    // const handleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // }

    return (
        <LayoutContext.Provider value={{darkMode:false}}>
            <div className="container">
                <Navbar height={'60px'} style={{borderBottom:'1px solid'}}>
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
