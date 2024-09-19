import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Docs.scss';
import { components, effects } from "../../constants/routerConstants";

const Docs = () => {
    return (
        <div className="docs-container">
            <div className="side-bar">
                <nav>
                    <div>Component</div>
                    <ul style={{listStyle:'none'}}>
                        {components.map((component) => (
                            <li key={component.label}>
                                <NavLink to={component.link}>{component.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div>Effect</div>
                    <ul style={{listStyle:'none'}}>
                        {effects.map((effect) => (
                            <li key={effect.label}>
                                <NavLink to={effect.link}>{effect.label}</NavLink>
                            </li>
                        ))}
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