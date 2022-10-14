import { bloodGroups } from "./some_user_details";
import { useState } from "react";

const BloodGroupDropdown = ({ bloodGroup }) => {
	const options = [
		{ label: "A+", value: bloodGroups["A+"] },
		{ label: "A-", value: bloodGroups["A-"] },
		{ label: "B+", value: bloodGroups["B+"] },
		{ label: "B-", value: bloodGroups["B-"] },
		{ label: "O+", value: bloodGroups["O+"] },
		{ label: "O-", value: bloodGroups["O-"] },
		{ label: "AB+", value: bloodGroups["AB+"] },
		{ label: "AB-", value: bloodGroups["AB-"] },
	];

	const [selectedValue, setSelectedValue] = useState(bloodGroup);

	const handleTypeOfGenderChange = (triggeredEvent) => {
		setSelectedValue(triggeredEvent.target.value);
	};

	return (
		<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
			<select className="tw-border-solid tw-border-b-2" placeholder="Blood group" onChange={handleTypeOfGenderChange}>
				<option value="none" selected disabled>
					{ bloodGroup ? bloodGroup : "Blood group" }
				</option>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	);
};

export default BloodGroupDropdown;
