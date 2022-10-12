import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<span className="logo-and-nav-items-container">
				<span className="logo">
					<h4>MEDICARE</h4>
				</span>
				<span className="nav-items">
					<Link to="/">
						<span className="home">
							<FontAwesomeIcon icon={solid("house-chimney")} style={{ marginRight: 5 }} />
							Home
						</span>
					</Link>
					<span className="features">Features</span>
					<span className="about-us">About Us</span>
					<span className="contact-us">Contact Us</span>
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
