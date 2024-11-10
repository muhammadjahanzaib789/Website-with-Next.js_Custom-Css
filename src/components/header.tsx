import Link from "next/link";
import "../style/header.css";



function Header(){
    return(
        <div className="header">
          {/*left*/}
          <div className="head">
            <img 
            src="/imagess/logo.jpg"
            width={100}
            height={100}
            alt="logo"
             className="img"/>

          </div>
          
          {/*right*/}
          <div className="header-right-div">
            <ul className="header-links">
                <li>
                    <Link className="nav-links" href={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="nav-links" href={"/about"}>About</Link>
                </li>
                <li>
                    <Link className="nav-links" href="/skill">skills</Link>
                </li>
                <li>
                    <Link className="nav-links" href={"/"}>Contact</Link>
                </li>
            </ul>
            <div>
        
            </div>
          </div>
        </div>
    );
};
export default Header