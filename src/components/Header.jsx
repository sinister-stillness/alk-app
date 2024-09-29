import categoryIcon from "../assets/image/button_header.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/categories" class="button-mainpage-header">
                    <img src={categoryIcon} alt="Button mainpage header" />
                </Link>
            </div>
        </header>
    );
}

export default Header;