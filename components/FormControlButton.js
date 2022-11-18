import React from "react";
import { useForm } from "react-hook-form";

export default function FormControlButton({children}) {

    const childrenWithProps = React.Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child);
        }
        return child;
    });
    
    return <div>{childrenWithProps}</div>
}