import React, { useState } from "react";
import Navbar from "../module/navbar"
import { Link } from 'react-router-dom';
import ProjectItem from '../module/ProjectItem';

import projectData from './projects.json';
// import { FaCss3Alt } from 'react-icons/fa';
// import { FaPhp } from 'react-icons/fa';
// import { FaHtml5 } from 'react-icons/fa';
// import { FaReact } from 'react-icons/fa';
// import { SiJavascript } from 'react-icons/si';
// import { SiMysql } from 'react-icons/si';
// import { SiMongodb } from 'react-icons/si';

// import { SiUbuntu } from 'react-icons/si';
// import { BiLogoBlender } from 'react-icons/bi';
// import { DiPhotoshop } from 'react-icons/bi';
// import { SiAdobepremierepro } from 'react-icons/si';


// import css from "../pages/temp.jpg"
// import php from "../pages/temp.jpg"
// import html from "../pages/temp.jpg"
// import javascript from "../pages/temp.jpg"
// import react from "../pages/temp.jpg"
import sql from "../pages/temp.jpg"
// import mongo from "../pages/temp.jpg"

import blender from "../pages/temp.jpg"
import photoshop from "../pages/temp.jpg"
import premier from "../pages/temp.jpg"
import ubuntu from "../pages/temp.jpg"
import oracle from "../pages/temp.jpg"
import ssh from "../pages/temp.jpg"
import cog from "../pages/temp.jpg"

export default function Project() {
    const [show_webapps, set_web] = useState(true)
    const [show_3D, set_3D] = useState(true)
    const [show_gserver, set_gserver] = useState(true)
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="nav_color">
                <Navbar />
            </div>
            <p className="proj_title">
                <Link to="/" className='back_but'>⬅</Link>
                Projects
            </p>   
            {/* webapps */}
            <div className="parent_container">
                <div className={`child_left ${isHovered ? 'after' : ''}`}>
                            
                                {
                                    projectData.map((project, index) => (
                                        <ProjectItem
                                            key={index}
                                            title={project.title}
                                            description={project.description}
                                            techIcons={project.techIcons}
                                            imageName={project.imageName}
                                        />
                                    ))
                                }
                                 
                </div>
                <div className="child_right" onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>

                </div>
            </div>

        </>
    )
}