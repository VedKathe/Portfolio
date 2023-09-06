import Navbar from "../module/navbar"
export default function Main(){
    return(
        <>
        <div className="page_cont">
            <Navbar/>
        <div className="main_name">
            ELTON COSTA<br/>
            <p className="discription">DEV ● VIDEOGRAPHER ● 3D ARTIST</p>
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,128L288,224L576,96L864,160L1152,288L1440,256L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
        <div className="info_cont">
            <p className="info_head">Hi...</p>
            <p className="info_text">As a computer engineer with a passion for technology, gaming, and 3D artistry, I undoubtedly bring a unique blend of skills and interests to the table. My expertise spans from developing web applications to engaging in the intricate world of video and photo editing. When i am not immersed in the digital realm,  I enjoy cycling through the real world and enriching my mind with reading. My dynamic pursuits and enthusiasm for all things tech truly make me an intriguing and well-rounded individual. If you ever need assistance or want to discuss your diverse interests, feel free to reach out!</p>
        </div>
        </div>
        </>
    )
}