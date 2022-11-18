import React from "react";
import { useForm } from "react-hook-form";

export default function Form({children, submitHandler}) {

    const{control, handleSubmit, formState} = useForm()
    const { isSubmitting } = formState

    const childrenWithProps = React.Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {control, disabled: isSubmitting});
        }
        return child;
    });

    return <form onSubmit={handleSubmit(submitHandler)}>
        {childrenWithProps}
    </form>
}