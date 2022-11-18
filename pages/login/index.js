import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import FormControl from "../../components/FormControl";
import FormControlButton from "../../components/FormControlButton";

export default function Login() {

    function handleSubmit(data) {
        console.log(data)
    }

    return <Form submitHandler={handleSubmit}>
        <FormControl>
            <label name="username-label">Username</label>
            <input type="text" name="username"/>
        </FormControl>
        <FormControl>
            <label name="password-label">Password</label>
            <input type="password" name="password"/>
        </FormControl>
        <FormControlButton>
            <button type="submit">Login</button>
        </FormControlButton>
    </Form>
}