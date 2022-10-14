import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<span className="logo-and-nav-items-container">
				<span className="logo">
					<h4>
						<FontAwesomeIcon icon={solid("stethoscope")} fixedWidth="true" color="red"/>
						MEDICARE
					</h4>
				</span>
				<span className="nav-items">
					<Link to="/">
						<span className="home">
							<FontAwesomeIcon icon={solid("house-chimney")} style={{ marginRight: 5 }} />
							Home
						</span>
					</Link>
					<Link to="/features">
						<span className="features">Features</span>
					</Link>
					<Link to="/about">
						<span className="about-us">About Us</span>
					</Link>
					<Link to="/contact">
						<span className="contact-us">Contact Us</span>
					</Link>
				</span>
			</span>
			<span className="signup-and-login">
				<Link to="/signup">
					<button className="signup">Signup</button>
				</Link>
				<Link to="/login">
					<button className="login">Login</button>
				</Link>
			</span>
		</nav>
	);
};

export default Navbar;
