import "../common_styles.css";
import "./Dashboard.css";
import SideNavigation from "../side_navigation/SideNavigation";
import { ReactComponent as DashboardUnderConstructionImage } from "./undraw_under_construction.svg";

const Dashboard = () => {
	return (
		<div className="main-container">
			<span className="container-for-sidebar">
				<SideNavigation />
			</span>
			<span className="container-for-main-body">
				<div className="under-construction">
					<DashboardUnderConstructionImage />
				</div>
				<p className="under-construction-text">
					<i>Dashboard is under construction</i>
				</p>
			</span>
		</div>
	);
};

export default Dashboard;
