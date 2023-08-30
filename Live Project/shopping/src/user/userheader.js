import { Link } from "react-router-dom";

const Useheader=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link text-white" to="/cart">My Cart</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link text-white" to="/login">Seller Login</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link text-white" to="/register">Seller Create Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Useheader;