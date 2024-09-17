import React from "react";
import QuickViewResult from "../Docs/QuickViewResult";

const NavbarDocs = () => {

    return (
        <>
            <div className="title">Navbar (Not Ready)</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>

                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default NavbarDocs;