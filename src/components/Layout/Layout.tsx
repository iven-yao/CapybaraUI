import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import logo from '../../../public/logo500.png';
import './Layout.scss';
  
// Layout component
const Layout = () => {
    return (
        <div className="container">
            <Navbar height={'80px'}>
                <Navbar.Logo src={logo}></Navbar.Logo>
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
    );
};

export default Layout;
