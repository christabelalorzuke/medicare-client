import SideNavigation from "../../side_navigation/SideNavigation";

const ChangePassword = () => {
	return (
		<div className="main-container">
			<span className="container-for-sidebar">
				<SideNavigation />
			</span>
			<span className="container-for-main-body">
				<div className="form-container">
					<form className="form-body tw-max-w-[500px] tw-max-h-[500px] tw-h-full tw-w-full tw-mx-auto tw-bg-white tw-rounded-md tw-shadow-xl">
						<h3 className="form-header tw-text-3xl tw-font-bold tw-text-left tw-px-8 tw-mb-6 tw-h-11 tw-rounded-t-md">Create account</h3>
						<div className="tw-px-8 tw-h-full">
							<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
								<input className="tw-border-solid tw-border-b-2" placeholder="Name" type="text" />
							</div>
							<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
								<input className="tw-border-solid tw-border-b-2" placeholder="Email" type="email" />
							</div>
							{/* <TypeOfUserDropdown /> */}
							<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
								<input className="tw-border-solid tw-border-b-2" placeholder="Password" type="password" />
							</div>
							<div className="tw-flex tw-flex-col tw-py-2 tw-mb-8">
								<input className="tw-border-solid tw-border-b-2" placeholder="Confirm password" type="password" />
							</div>
							<div className="signup-btn">
								<Link to="/users/:id">
									<button>Signup</button>
								</Link>
							</div>
							<div class="call-to-register">
								<p>
									Already have an account?
									<br />
									<b>
										<Link to="/login">Login</Link>
									</b>
								</p>
							</div>
						</div>
					</form>
				</div>
			</span>
		</div>
	);
};

export default ChangePassword;
