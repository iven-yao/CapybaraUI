import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
  
// Layout component
const Layout = () => {
    return (
        <div>
            <Navbar variant="yellow">
                <Navbar.Items>
                    <Navbar.Item><Link to={'./docs'}>Docs</Link></Navbar.Item>
                    <Navbar.Item>About</Navbar.Item>
                    <Navbar.Item>Storybook</Navbar.Item>
                    <Navbar.Item>Blog</Navbar.Item>
                </Navbar.Items>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default Layout;
