import { useRouter } from "next/router"
import { useEffect } from "react";


const About = () => {
    const router = useRouter()
    useEffect(() => {
        console.log(localStorage.getItem("data"))
    }, [])
    const all = router.query;
    return <h1>About page - {JSON.stringify(all)}</h1>
}

export default About