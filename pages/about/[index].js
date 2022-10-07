import { useRouter } from "next/router"


const About = () => {
    const router = useRouter()
    const {index} = router.query;
    return <h1>About page!{index}</h1>
}

export default About