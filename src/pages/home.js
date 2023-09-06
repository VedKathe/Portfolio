import Main from "../module/main"
import Contact from "../module/contact"
import Software from "../module/software"
import Language from "../module/language"
import Qualification from "../module/qualifications"
import Exp from "../module/exp"
import Course from "../module/course"

export default function Home()
{
    return(
        <>
            <Main/>
            <Qualification/>
            <Course/>
            <Exp/>
            <Software/>
            <Language/>
            <Contact/>
        </>
    )
}