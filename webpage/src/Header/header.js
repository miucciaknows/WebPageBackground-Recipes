import Logo from "./Images/bobsredmillslogo.png"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo"/>
        </div>
    )

}

export default Header;