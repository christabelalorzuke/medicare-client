import "../Common_homepage_styles.css";
import Navbar from "../Navbar";
import { ReactComponent as HeroSectionImage } from "./undraw_contact.svg";
import { ReactComponent as Section1Image } from "./undraw_email.svg";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div className="hero-section">
				<span className="hero-section-content">
					<h1>Get in touch with us</h1>
					<p>
						<i>
							Do you have a question or suggestion?
							<br />
							Do you have an issue, a remark, or any feed-back?
							<br />
							<br />
							Tell us about it below, and we'll get in touch with you as soon as possible.
						</i>
					</p>
				</span>
				<span className="hero-section-image">
					<HeroSectionImage />
				</span>
			</div>
			<div className="content-section">
				<section className="section1">
					<h1 className="section-title">Contact Form</h1>
					<div className="section-body">
						<span className="section-image">
							<Section1Image />
						</span>
						<span className="section-content">
							<form className="form-body tw-max-w-[500px] tw-max-h-[500px] tw-h-full tw-w-full tw-mx-auto tw-bg-white tw-rounded-md tw-shadow-xl">
								<div className="tw-px-8 tw-h-full">
									<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
										<input className="tw-border-solid tw-border-b-2 tw-mt-4" placeholder="Name" type="text" />
									</div>
									<div className="tw-flex tw-flex-col tw-mb-4 tw-py-2">
										<input className="tw-border-solid tw-border-b-2" placeholder="Email" type="email" />
									</div>
									<div className="tw-flex tw-flex-col tw-py-2 tw-mb-5">
										<textarea
											className="tw-border-solid tw-border-2"
											name="feedback"
											id="feedback"
											cols="30"
											rows="10"
											placeholder="Type your message here..."
										></textarea>
									</div>
									<div className="login-btn">
										<Link to="/contact">
											<button>Submit</button>
										</Link>
									</div>
								</div>
							</form>
						</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Contact;
