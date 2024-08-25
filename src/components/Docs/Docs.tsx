import { NavLink, Outlet } from "react-router-dom";
import './Docs.scss';

const Docs = () => {
    return (
        <div className="docs-container">
            <div className="side-bar">
                <nav>
                    <div>Component</div>
                    <ul style={{listStyle:'none'}}>
                        <li><NavLink to={"./button"}>Button</NavLink></li>
                        <li><NavLink to={"./dropdown"}>Dropdown</NavLink></li>
                        <li><NavLink to={"./navbar"}>Navbar</NavLink></li>
                        <li><NavLink to={"./select"}>Select</NavLink></li>
                    </ul>
                    <div>Effect</div>
                    <ul style={{listStyle:'none'}}>
                        <li><NavLink to={"./image-text"}>Image Text</NavLink></li>
                        <li><NavLink to={"./neon-text"}>Neon Text</NavLink></li>
                        <li><NavLink to={"./3d-text"}>3D Text</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Docs;