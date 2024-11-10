import "../style/services.css"
import { FaLaptopCode } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaCentercode } from "react-icons/fa6";
import { GoCodeOfConduct } from "react-icons/go";
import { SiCodeblocks } from "react-icons/si";



function Services(){
    return(
       <main className="main">
        <div className="ser-container">
         {/*top*/}
         <div className="top-div-ser">
            <h2 className="title-ser">My Skills</h2>
            <p>
            Your services could be listed like this. Creating user-friendly and visually appealing interfaces for websites and mobile applications.
            </p>
         </div>
         {/*bottom*/}
         <div className="boxes-con" >
            <div className="box">
            <FaLaptopCode className="icon" />
            <h3>TypeScript</h3>
            <span>Blog, E-commerce</span>
            </div>
            <div className="box">
            <FaCodepen  className="icon" />
            <h3>HTML</h3>
            <span>Blog, E-commerce</span>
            </div>
            <div className="box">
            <FaFreeCodeCamp className="icon" />
            <h3>CSS</h3>
            <span>Blog, E-commerce</span>
            </div>
            <div className="box">
            <FaCentercode className="icon" />
            <h3>Java Script</h3>
            <span>Blog, E-commerce</span>
            </div>
            <div className="box">
            <GoCodeOfConduct className="icon" />
            <h3>Next.js</h3>
            <span>Blog, E-commerce</span>
            </div>
            <div className="box">
            < SiCodeblocks className="icon" />
            <h3>Graphic Designing</h3>
            <span>Blog, E-commerce</span>
            </div>
            
         </div>
        </div>
       </main>
    )
}
export default Services