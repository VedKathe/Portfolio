import { Link } from 'react-router-dom';
export default function Navbar()
{
    return(
        <>
        <div className="navbar">
            <a href="https://github.com/ryzxxn" className="link">Github</a>
            <a href="https://www.youtube.com/@ryzxxn5432" className="link">Youtube</a>
            {/* <a href="/pages/project.js" className="link">Projects</a> */}
            <Link to="/projects" className='link'>Projects</Link>
        </div>
        </>
    )
}