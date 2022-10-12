import "./Signup.css";

import { useState } from "react";
import Navbar from "../hompage_components/Navbar";
import TypeOfUserDropdown from "../hompage_components/TypeOfUserDropdown";

const Signup = () => {
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
		<div className="signup-page">
			<Navbar />
			<div className="form-container tw-flex tw-flex-col tw-justify-center">
				<form className="form-body tw-max-w-[500px] tw-max-h-[500px] tw-h-full tw-w-full tw-mx-auto tw-bg-white tw-rounded-lg">
					<h3 className="form-header tw-text-3xl tw-font-bold tw-text-left tw-px-8 tw-mb-7">Create account</h3>
					<div className="tw-px-8 tw-h-full">
						<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
							{/* <label>Name</label> */}
							<input className="tw-border-solid tw-border-b-2" placeholder="Name" type="text" />
						</div>
						<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
							{/* <label>Email</label> */}
							<input className="tw-border-solid tw-border-b-2" placeholder="Email" type="email" />
						</div>
						<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
							{/* <label>Username</label> */}
							<input className="tw-border-solid tw-border-b-2" placeholder="Username" type="text" />
						</div>
						{/* <select value={selectedValue} onChange={handleTypeOfUserChange}>
						{options.map(option => (
							<option value={option.value}>{option.label}</option>
						))}
					</select> */}
						<TypeOfUserDropdown options={options} value={selectedValue} onChange={handleTypeOfUserChange} />
						<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
							{/* <label>Password</label> */}
							<input className="tw-border-solid tw-border-b-2" placeholder="Password" type="password" />
						</div>
						<div className="tw-flex tw-flex-col tw-py-2 tw-mb-10">
							{/* <label>Confirm Password</label> */}
							<input className="tw-border-solid tw-border-b-2" placeholder="Confirm password" type="password" />
						</div>
						<div className="signup-btn">
							<button>Signup</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
