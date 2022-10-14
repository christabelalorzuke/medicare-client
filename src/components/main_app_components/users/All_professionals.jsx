import SideNavigation from "../side_navigation/SideNavigation";

const AllProfessionals = () => {
	return (
		<div className="main-container">
			<span className="container-for-sidebar">
                        <SideNavigation />
                  </span>
			<span className="container-for-main-body"></span>
		</div>
	);
};

export default AllProfessionals;
