import css from "../pages/temp.jpg"
import php from "../pages/temp.jpg"
import html from "../pages/temp.jpg"
import javascript from "../pages/temp.jpg"
import react from "../pages/temp.jpg"
import sql from "../pages/temp.jpg"
import mongo from "../pages/temp.jpg"
import cpp from "../pages/temp.jpg" // Import the 'cpp' image
import python from "../pages/temp.jpg" // Import the 'python' image
import java from "../pages/temp.jpg" // Import the 'java' image
import c from "../pages/temp.jpg"

export default function Language()
{
    return(
        <>
        <div className="contact_cont">
        <div className="reach">
        <p className="contact_head">LANGUAGES</p>
            <div className="reach_method">
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={cpp}/>
                    {/* <p className="method_name">elton02costa@gmail.com</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={python}/>
                    {/* <p className="method_name">elton02costa@gmail.com</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={php}/>
                    {/* <p className="method_name">elton02costa@gmail.com</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={html}/>
                    {/* <p className="method_name">elton02costa@gmail.com</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={css}/>
                    {/* <p className="method_name">elton02costa@gmail.com</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={javascript}/>
                    {/* <p className="method_name">Ryzxxn#5664</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={react}/>
                    {/* <p className="method_name">Ryzxxn#5664</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={java}/>
                    {/* <p className="method_name">Ryzxxn#5664</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={c}/>
                    {/* <p className="method_name">Ryzxxn#5664</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={sql}/>
                    {/* <p className="method_name">Ryzxxn#5664</p> */}
                </div>
                <div className="method">
                    <img alt="temp.jpg" className="method_img" src={mongo}/>
                    {/* <p className="method_name">Ryzxxn#5664</p> */}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}