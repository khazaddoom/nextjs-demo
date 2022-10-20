import { Controller, useForm } from "react-hook-form";
import Form from "../../components/Form";
import FormControl from "../../components/FormControl";
import FormControlButton from "../../components/FormControlButton";

export default function Login() {
    const {control, handleSubmit} = useForm({
        defaultValues: {
            "username": "",
            "password": ""
        }
    })

    return <form onSubmit={handleSubmit(data => console.log(data))}>
        <label name="username-label">Username</label>
        <Controller
            name="username"
            control={control}
            render={({field}) => <input {...field} />}
        />
        <label name="password-label">Password</label>
        <Controller
            name="password"
            control={control}
            render={({field}) => <input {...field} />}
        />
        <button type="submit">Login</button>
    </form>
}