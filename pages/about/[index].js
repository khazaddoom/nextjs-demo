import { useRouter } from "next/router"


const About = () => {
    const router = useRouter()
    const all = router.query;
    return <h1>About page - {JSON.stringify(all)}</h1>
}

export default About