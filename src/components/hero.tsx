import Image from "next/image"
import "../style/hero.css"


function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-container">
                {/*left*/}
                <div>
                <Image src={"/imagess/profile.png"} 
                width={330}
                height={330}

                alt ="profile"/>
                </div>
                {/*right*/}
                <div className="hero-right-div">
        <h2 className="title-hero">I'm M.jahanzaib Front-end Developer</h2>
        <p className="desc-hero"> Some key features of a luxury house include spaciousness, premium location, top-quality construction materials, state-of-the-art technology.</p>
        <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
         
        </div>
    )
}
export default Hero