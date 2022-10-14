import { genderTypes } from "./some_user_details";
import { useState } from "react";

const GenderTypeDropdown = ({ gender }) => {
	const options = [
		{ label: "Male", value: genderTypes.male },
		{ label: "Female", value: genderTypes.female },
	];

	const [selectedValue, setSelectedValue] = useState(gender);

	const handleTypeOfGenderChange = (triggeredEvent) => {
		setSelectedValue(triggeredEvent.target.value);
	};

	return (
		<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
			<select className="tw-border-solid tw-border-b-2" placeholder="Gender" onChange={handleTypeOfGenderChange}>
				<option value="none" selected disabled>
					{gender ? gender : "Gender"}
				</option>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	);
};

export default GenderTypeDropdown;
