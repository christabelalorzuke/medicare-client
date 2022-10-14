import "../common_styles.css";
import "./Dashboard.css";
import SideNavigation from "../side_navigation/SideNavigation";
import { ReactComponent as DashboardUnderConstructionImage } from "./undraw_under_construction.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="main-container">
			<span className="container-for-sidebar">
				<SideNavigation />
			</span>
			<span className="container-for-main-body">
				{/* <div className="under-construction">
					<DashboardUnderConstructionImage />
				</div>
				<p className="under-construction-text">
					<i>Dashboard is under construction</i>
				</p> */}

				<div class="main-content">
					<div class="input">
						<input type="text" name="searchProfessionals" id="searchProfessionals" />
						<div class="categories">
							<h3>Categories</h3>
							<div class="slideable">
								<a class="categoryItem" href="#">
									<h5>Dentist</h5>
								</a>
								<a class="categoryItem" href="#">
									<h5>Pharmacist</h5>
								</a>
								<a class="categoryItem" href="#">
									<h5>Nurse</h5>
								</a>
								<a class="categoryItem" href="#">
									<h5>Gynaecologist</h5>
								</a>
								<a class="categoryItem" href="#">
									<h5>Optometrist</h5>
								</a>
							</div>
						</div>
						<div class="listAllProfessionals">
							<div class="professional-card">
								<div className="details">
								<img src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
								<div class="professionalDetails">
									<h2 class="professionalName">Name</h2>
									<p class="professionalTitle">Professional Title</p>
								</div>
								</div>
								<div className="actions">
								<Link to="/users/:id">
									<button className="btn btn-more">
										<a>Learn More</a>
									</button>
								</Link>
								<Link to="/users/:id">
								<button className="btn btn-book">
										<a>Book</a>
									</button>
								</Link>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="right-sidenav"></div>
			</span>
		</div>
	);
};

export default Dashboard;
