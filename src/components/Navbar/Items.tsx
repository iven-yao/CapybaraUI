import { PropsWithChildren } from "react";

const Items = (props:PropsWithChildren) => {

    const {children} = {...props};

    return (
        <div className="navbar-items">
            {children}
        </div>
    );
}

export default Items;