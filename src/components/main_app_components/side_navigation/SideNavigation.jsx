import "./SideNavigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const SideNavigation = () => {
	return (
		<nav className="side-bar">
			<div className="logo">
				<Link to="/">
					<h3>
						<FontAwesomeIcon icon={solid("stethoscope")} fixedWidth="true"  color="red"/>
						MEDICARE
					</h3>
				</Link>
			</div>
			<div className="nav-body">
				<div className="navigation-items">
					<Link to="/dashboard" className="nav-item">
						<span className="dashboard">
							<FontAwesomeIcon className="nav-item-icon" icon={solid("chart-bar")} fixedWidth="true" />
							DASHBOARD
						</span>
					</Link>
					<Link className="nav-item">
						<span className="health-professionals">
							<FontAwesomeIcon className="nav-item-icon" icon={solid("users")} fixedWidth="true" />
							HEALTH PROFESSIONALS
						</span>
					</Link>
					<Link className="nav-item">
						<span className="medical-information">
							<FontAwesomeIcon className="nav-item-icon" icon={solid("file-text")} fixedWidth="true" />
							MEDICAL INFORMATION
						</span>
					</Link>
					<br />
					<br />
					<Link to="/users/:id" className="nav-item">
						<span className="profile">
							<FontAwesomeIcon className="nav-item-icon" icon={solid("user")} fixedWidth="true" />
							PROFILE
						</span>
					</Link>
					<Link to="/users/:id" className="nav-item">
						<span className="change-password">
							<FontAwesomeIcon className="nav-item-icon" icon={solid("user-secret")} fixedWidth="true" />
							CHANGE PASSWORD
						</span>
					</Link>
				</div>
				<div className="logout">
					<Link to="/">
						<FontAwesomeIcon icon={solid("sign-out-alt")} rotate="180" fixedWidth="true" className="logout-icon" />
						LOGOUT
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default SideNavigation;
