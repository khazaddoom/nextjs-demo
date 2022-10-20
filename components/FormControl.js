import { Controller, useForm } from "react-hook-form"

export default function FormControl({children, control}) {
    return <>
        {children.map(child => {
            if(child.type == "label") return child
            return <Controller
                name={child.props.name}
                control={control}
                // defaultValue={child.props.defaultValue}
                render={({ field }) => <input {...field} />}
            />
        })}
    </>
}