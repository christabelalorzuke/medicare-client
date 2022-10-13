import "./Homepage.css";
import { ReactComponent as HeroSectionImage } from "./undraw_doctor.svg";
import { ReactComponent as Section1Image } from "./undraw_profile_data.svg";
import { ReactComponent as Section2Image } from "./undraw_medicine.svg";
import { ReactComponent as Section3Image } from "./undraw_online_meeting.svg";
import Navbar from "../Navbar";

const Home = () => {
	return (
		<div className="home-container">
			<Navbar />
			<div className="home-hero-section">
				<span className="home-hero-section-content">
					<h1>Hi! Welcome to MEDICARE</h1>
					<p>
						<i>
							Feeling sick??? <br />
							Speak with a verified health professional now!
						</i>
					</p>
					<div className="home-call-to-action">
						<span>Why don't you go ahead and...</span>
						<button className="home-call-to-action-btn">book a session</button>
					</div>
				</span>
				<span className="home-hero-section-image">
					<HeroSectionImage />
				</span>
			</div>
			<div className="home-content-section">
				<h1>How it works</h1>
				<section className="home-section1">
					<span className="home-section-image">
						<Section1Image />
					</span>
					<span className="home-section-content">
						<h3>~ CREATE A PROFILE ~</h3>
						<br />
						<p>
							Start by creating a profile with your personal information, contacts, and most importantly, your medical information such as blood-type,
							allergies, etc. Based on this information, health professionals can prescribe the right medication which will not cause you any harm.
							You can also, optionally, add a profile picture.
						</p>
					</span>
				</section>
				<section className="home-section2">
					<span className="home-section-content">
						<h3>~ BOOK A SESSION ~</h3>
						<br />
						<p>
							After creating a profile, you'll have access to a plethora of verified health professionals. You can filter through the different types
							of professionals by searching for the health professional's name- ie if you know the name- or by type of profession. After that, you
							proceed to book a session based on the professional's availability.
						</p>
					</span>
					<span className="home-section-image">
						<Section2Image />
					</span>
				</section>
				<section className="home-section3">
					<span className="home-section-image">
						<Section3Image />
					</span>
					<span className="home-section-content">
						<h3>~ VIDEO CHAT ~</h3>
						<br />
						<p>
							After booking a meeting with a health professional, the next step is to have the meeting, in the form of a video chat. You'll receive an
							email notification a day before the meeting, as a reminder. If need be, you can request to have and in-person meeting with the
							professional, based on their availability or proximity to you. During the video chat, a professional can edit your medical information
							based on the dignosis and prescriptions they gave.
						</p>
					</span>
				</section>
			</div>
			<div className="home-footer-section"></div>
		</div>
	);
};

export default Home;
