import "../../common_styles.css";
import "./Profile.css";
import SideNavigation from "../../side_navigation/SideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import TypeOfUserDropdown from "./TypeOfUserDropdown";
import GenderTypeDropdown from "./GenderTypeDropdown";
import BloodGroupDropdown from "./BloodGroupDropdown";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../../../../routes/baseURL.js";

const Profile = () => {
	const [buttonBgColor, setButtonBgColor] = useState("#0202b8");
	const [buttonText, setButtonText] = useState("Edit Profile");
	const [isDisabled, setIsDisabled] = useState(true);
	const [isSaveable, setIsSaveable] = useState(false);

	const [user, setUser] = useState({
		fullName: "",
		email: "",
		password: "",
		sex: "",
		age: 0,
		address: "",
		city: "",
		bloodGroup: "",
		allergies: [],
	});

	useEffect(() => {
		const userData = localStorage.getItem("user-data");
		if (userData) {
			const user = userData.user;
			const token = userData.token;
			if (token && user) {
				const loggedInUser = JSON.parse(user);
				setUser(loggedInUser);
			} else if (user) {
				const signedUpUser = JSON.parse(user);
				setUser(signedUpUser);
			}
		}
	}, []);

	const handleEditButtonClick = () => {
		setIsDisabled(false);
		setButtonBgColor("#40844e");
		setButtonText("Save");
	};

	const handleSaveButtonClick = () => {
		isDisabled = false;
		setButtonBgColor("#40844e");
	};

	const handleUserInfoChange = (_event) => {
		setUser({ ...user, [_event.target.name]: _event.target.value });
		setIsSaveable(true);
		setIsDisabled = NaN;
	};

	const handleFormSubmission = async (_event) => {
		try {
			_event.preventDefault();
			const url = baseURL + "/users";
			const response = await axios.post("http://localhost:8080", user);
			console.log(response);
		} catch (error) {
			alert(error.message);
		}
	};

	// const profilePicChange = (_event) => {

	// }

	if (user) {
		return (
			<div className="main-container">
				<span className="container-for-sidebar">
					<SideNavigation />
				</span>
				<span className="container-for-main-body">
					<div className="profile-container tw-rounded-md tw-shadow-xl">
						<div className="profile-header-container">
							<div className="background-img-container"></div>
							<div className="profile-picture-and-edit-btn-container">
								<span className="profile-picture-container">{/* <img src="" alt="profile" /> */}</span>
								<span className="edit-btn-container">
									{(isSaveable || isDisabled) && (
										<button onClick={isSaveable ? handleFormSubmission : handleEditButtonClick} style={{ backgroundColor: buttonBgColor }}>
											<FontAwesomeIcon icon={solid("pencil")} fixedWidth="true" />
											{buttonText}
										</button>
									)}
									{ isSaveable || !isDisabled && (
										<button onClick={handleSaveButtonClick} style={{ backgroundColor: buttonBgColor }} disabled>
											<FontAwesomeIcon icon={solid("pencil")} fixedWidth="true" />
											{buttonText}
										</button>
									)}
								</span>
							</div>
						</div>
						<div className="profile-body">
							<span className="form-one tw-rounded-md tw-shadow-xl">
								<h3 className="profile-form-title">Details</h3>
								<br />
								<br />
								<form className="tw-max-h-[400px] tw-h-full tw-bg-white ">
									<div className="tw-flex tw-flex-col tw-mb-6 tw-py-2">
										{isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder={user.name} type="text" disabled />}
										{!isDisabled && (
											<input className="tw-border-solid tw-border-b-2" placeholder={user.name} type="text" onChange={handleUserInfoChange} />
										)}
									</div>
									<div className="tw-flex tw-flex-col tw-mb-6 tw-py-2">
										{isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder={user.email} type="email" disabled />}
										{!isDisabled && (
											<input className="tw-border-solid tw-border-b-2" placeholder={user.email} type="email" onChange={handleUserInfoChange} />
										)}
									</div>
									<div className="tw-flex tw-flex-col tw-mb-6 tw-py-2">
										{isDisabled && (
											<input className="tw-border-solid tw-border-b-2" placeholder={user.address ? user.address : "Address"} type="text" disabled />
										)}
										{!isDisabled && (
											<input
												className="tw-border-solid tw-border-b-2"
												placeholder={user.address ? user.address : "Address"}
												type="text"
												onChange={handleUserInfoChange}
											/>
										)}
									</div>
									<div className="tw-flex tw-flex-col tw-py-2 tw-mb-6">
										{isDisabled && (
											<input className="tw-border-solid tw-border-b-2" placeholder={user.city ? user.city : "City"} type="text" disabled />
										)}
										{!isDisabled && (
											<input
												className="tw-border-solid tw-border-b-2"
												placeholder={user.city ? user.city : "City"}
												type="text"
												onChange={handleUserInfoChange}
											/>
										)}
									</div>
									<div className="tw-flex tw-flex-col tw-py-2 tw-mb-8">
										{isDisabled && (
											<input className="tw-border-solid tw-border-b-2" placeholder={user.age ? user.age : "Age"} type="number" disabled />
										)}
										{!isDisabled && (
											<input
												className="tw-border-solid tw-border-b-2"
												placeholder={user.age ? user.age : "Age"}
												type="number"
												onChange={handleUserInfoChange}
											/>
										)}
									</div>
									{isDisabled && <GenderTypeDropdown gender={user.sex ? user.sex : "Sex"} disabled />}
									{!isDisabled && <GenderTypeDropdown gender={user.sex} onChange={handleUserInfoChange} />}
								</form>
							</span>
							<span className="form-two  tw-rounded-md tw-shadow-xl">
								<h3 className="profile-form-title">Health related</h3>
								<br />
								<br />
								<form className="tw-max-h-[400px] tw-h-full tw-bg-white">
									{isDisabled && <BloodGroupDropdown bloodGroup={user.bloodGroup ? user.bloodGroup : "Blood group"} disabled />}
									{!isDisabled && (
										<BloodGroupDropdown bloodGroup={user.bloodGroup ? user.bloodGroup : "Blood group"} onChange={handleUserInfoChange} />
									)}
									<div className="tw-flex tw-flex-col tw-py-2 tw-mb-5">
										{isDisabled && (
											<textarea
												className="tw-border-solid tw-border-2"
												name="feedback"
												id="feedback"
												cols="20"
												rows="8"
												placeholder={
													user.allergies
														? user.allergies.map((allergy) => {
																return allergy + ", ";
														  })
														: "Allergies"
												}
												disabled
											></textarea>
										)}
										{!isDisabled && (
											<textarea
												className="tw-border-solid tw-border-2"
												name="feedback"
												id="feedback"
												cols="20"
												rows="8"
												placeholder={
													user.allergies
														? user.allergies.map((allergy) => {
																return allergy + ", ";
														  })
														: "Allergies"
												}
												onChange={handleUserInfoChange}
											></textarea>
										)}
									</div>
									<Link>
										<button className="medical-history-btn">
											<FontAwesomeIcon icon={solid("info-circle")} fixedWidth="true" />
											View medical history
										</button>
									</Link>
								</form>
							</span>
						</div>
					</div>
				</span>
			</div>
		);
	}

	return (
		<div className="main-container">
			<span className="container-for-sidebar">
				<SideNavigation />
			</span>
			<span className="container-for-main-body">
				<div className="profile-container tw-rounded-md tw-shadow-xl">
					<div className="profile-header-container">
						<div className="background-img-container"></div>
						<div className="profile-picture-and-edit-btn-container">
							<span className="profile-picture-container">{/* <img src="" alt="profile" /> */}</span>
							<span className="edit-btn-container">
								{(isDisabled || isSaveable) && (
									<button onClick={isSaveable ? handleFormSubmission : handleEditButtonClick} style={{ backgroundColor: buttonBgColor }}>
										<FontAwesomeIcon icon={solid("pencil")} fixedWidth="true" />
										{buttonText}
									</button>
								)}
								{isSaveable || !isDisabled && (
									<button onClick={handleSaveButtonClick} style={{ backgroundColor: buttonBgColor }} disabled>
										<FontAwesomeIcon icon={solid("pencil")} fixedWidth="true" />
										{buttonText}
									</button>
								)}
							</span>
						</div>
					</div>
					<div className="profile-body">
						<span className="form-one tw-rounded-md tw-shadow-xl">
							<h3 className="profile-form-title">Details</h3>
							<br />
							<br />
							<form className="tw-max-h-[400px] tw-h-full tw-bg-white ">
								<div className="tw-flex tw-flex-col tw-mb-6 tw-py-2">
									{isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="Name" type="text" disabled />}
									{!isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="Name" type="text" onChange={handleUserInfoChange} />}
								</div>
								<div className="tw-flex tw-flex-col tw-mb-6 tw-py-2">
									{isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="Email" type="email" disabled />}
									{!isDisabled && (
										<input className="tw-border-solid tw-border-b-2" placeholder="Email" type="email" onChange={handleUserInfoChange} />
									)}
								</div>
								<div className="tw-flex tw-flex-col tw-mb-6 tw-py-2">
									{isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="Address" type="text" disabled />}
									{!isDisabled && (
										<input className="tw-border-solid tw-border-b-2" placeholder="Address" type="text" onChange={handleUserInfoChange} />
									)}
								</div>
								<div className="tw-flex tw-flex-col tw-py-2 tw-mb-6">
									{isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="City" type="text" disabled />}
									{!isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="City" type="text" onChange={handleUserInfoChange} />}
								</div>
								<div className="tw-flex tw-flex-col tw-py-2 tw-mb-8">
									{isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="Age" type="number" disabled />}
									{!isDisabled && <input className="tw-border-solid tw-border-b-2" placeholder="Age" type="number" onChange={handleUserInfoChange} />}
								</div>
								{isDisabled && <GenderTypeDropdown gender={null} disabled />}
								{!isDisabled && <GenderTypeDropdown gender={null} onChange={handleUserInfoChange} />}
							</form>
						</span>
						<span className="form-two  tw-rounded-md tw-shadow-xl">
							<h3 className="profile-form-title">Health related</h3>
							<br />
							<br />
							<form className="tw-max-h-[400px] tw-h-full tw-bg-white">
								{isDisabled && <BloodGroupDropdown bloodGroup={null} disabled />}
								{!isDisabled && <BloodGroupDropdown bloodGroup={null} onChange={handleUserInfoChange} />}
								<div className="tw-flex tw-flex-col tw-py-2 tw-mb-5">
									{isDisabled && (
										<textarea
											className="tw-border-solid tw-border-2"
											name="feedback"
											id="feedback"
											cols="20"
											rows="8"
											placeholder="Type your allergies here seperated by comma..."
											disabled
										></textarea>
									)}
									{!isDisabled && (
										<textarea
											className="tw-border-solid tw-border-2"
											name="feedback"
											id="feedback"
											cols="20"
											rows="8"
											placeholder="Type your allergies here seperated by comma..."
											onChange={handleUserInfoChange}
										></textarea>
									)}
								</div>
								<Link>
									<button className="medical-history-btn">
										<FontAwesomeIcon icon={solid("info-circle")} fixedWidth="true" />
										View medical history
									</button>
								</Link>
							</form>
						</span>
					</div>
				</div>
			</span>
		</div>
	);
};

export default Profile;
