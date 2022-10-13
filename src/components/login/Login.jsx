import Navbar from "../hompage_components/Navbar";
import "./Login.css";
import TypeOfUserDropdown from "../profile/TypeOfUserDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const typeOfUsers = {
		doctor: "doctor",
		patient: "patient",
	};

	const options = [
		{ label: "Doctor", value: typeOfUsers.doctor },
		{ label: "Patient", value: typeOfUsers.patient },
	];

	const [selectedValue, setSelectedValue] = useState(typeOfUsers.patient);

	const handleTypeOfUserChange = (triggeredEvent) => {
		setSelectedValue(triggeredEvent.target.value);
	};

	return (
		<div>
			<Navbar />
			<div className="form-container">
				<form className="form-body tw-max-w-[500px] tw-max-h-[500px] tw-h-full tw-w-full tw-mx-auto tw-bg-white tw-rounded-md tw-shadow-xl">
					<h3 className="form-header tw-text-3xl tw-font-bold tw-text-left tw-px-8 tw-mb-7 tw-h-11 tw-rounded-t-md">Login</h3>
					<div className="tw-px-8 tw-h-full">
						<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
							<input className="tw-border-solid tw-border-b-2" placeholder="Username" type="text" />
						</div>
						<TypeOfUserDropdown options={options} value={selectedValue} onChange={handleTypeOfUserChange} />
						<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
							<input className="tw-border-solid tw-border-b-2" placeholder="Password" type="password" />
						</div>
						<div className="tw-flex tw-flex-col tw-py-2 tw-mb-5">
							<input className="tw-border-solid tw-border-b-2" placeholder="Confirm password" type="password" />
						</div>
						<div className="custom-control custom-checkbox">
							<label class="final__toggle-1 remember-me" for="Check">
								<input type="checkbox" class="final__toggle-1__input" id="Check" name="RememberMe" />
								<span class="final__toggle-1__button"></span>
							</label>
							<span class="remember-me">Remember me</span>
						</div>
						<br />
						<div className="login-btn">
							<Link to="/dashboard">
								<button>Login</button>
							</Link>
						</div>
						<div class="call-to-register">
							<p>
								Haven't registered yet?
								<br />
								<b>
									<Link to="/signup">Create an account</Link>
								</b>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
