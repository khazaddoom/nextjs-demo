import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";

export default function question() {
    const router = useRouter();
    const { control, handleSubmit, formState } = useForm()
    const { id } = router.query;

    const formField = {
        name: "name",
        defaultValue: "Ganesh Acharya",
    }

    function dataHandler(formData) {
        console.log(formData)
    }

    return <form onSubmit={handleSubmit(dataHandler)}>
        <Controller
            name={formField.name}
            control={control}
            defaultValue={formField.defaultValue}
            render={({ field }) => <input value={field.value} onChange={field.onChange} />}
        />
        <button type="submit">Save</button>
    </form>
}