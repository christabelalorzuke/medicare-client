import { userTypes } from "./some_user_details";
import { useState } from "react";

const TypeOfUserDropdown = () => {
	const options = [
		{ label: "Doctor", value: userTypes.doctor },
		{ label: "Patient", value: userTypes.patient },
	];

	const [selectedValue, setSelectedValue] = useState("");

	const handleTypeOfUserChange = (triggeredEvent) => {
		setSelectedValue(triggeredEvent.target.value);
		console.log(selectedValue);
	};

	return (
		<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
			<select className="tw-border-solid tw-border-b-2" placeholder="User type" onChange={handleTypeOfUserChange}>
				<option value="none" selected disabled>select user-type</option>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	);
};

export default TypeOfUserDropdown;
