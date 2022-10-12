const TypeOfUserDropdown = ({ value, options, onChange }) => {
	return (
		<div className="tw-flex tw-flex-col tw-py-2 tw-mb-4">
			{/* <label>Type of User</label> */}
			<select className="tw-border-solid tw-border-b-2" placeholder="User type" value={value} onChange={onChange}>
				{options.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	);
};

export default TypeOfUserDropdown;
