import Navbar from "../hompage_components/Navbar";
import "./Login.css";
import TypeOfUserDropdown from "../hompage_components/TypeOfUserDropdown";
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
				<form className="form-body tw-max-w-[500px] tw-max-h-[500px] tw-h-full tw-w-full tw-mx-auto tw-bg-white tw-rounded-lg">
					<h3 className="form-header tw-text-3xl tw-font-bold tw-text-left tw-px-8 tw-mb-7">Login</h3>
					<div className="tw-px-8 tw-h-full">
						<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
							<input className="tw-border-solid tw-border-b-2" placeholder="Username" type="text" />
						</div>
						<TypeOfUserDropdown options={options} value={selectedValue} onChange={handleTypeOfUserChange} />
						<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
							<input className="tw-border-solid tw-border-b-2" placeholder="Password" type="password" />
						</div>
						<div className="tw-flex tw-flex-col tw-py-2 tw-mb-10">
							<input className="tw-border-solid tw-border-b-2" placeholder="Confirm password" type="password" />
						</div>
						<div className="signup-btn">
							<button>Signup</button>
						</div>
						<div class="call-to-register">
							<p>
								Haven't registered yet?
								<br />
								<Link>Create an account</Link> <b> now </b>
								and join the "shacks"!
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
