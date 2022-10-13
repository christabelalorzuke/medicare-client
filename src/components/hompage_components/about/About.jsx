import "../Common_homepage_styles.css";
import Navbar from "../Navbar";
import { ReactComponent as HeroSectionImage } from "./undraw_team.svg";
import { ReactComponent as Section2Image } from "./undraw_group_chat.svg";

const About = () => {
	return (
		<div>
			<Navbar />
			<div className="hero-section">
				<span className="hero-section-content">
					<h1>Meet our awesome team</h1>
					<p>
						<i>MEDICARE is developed and maintained by a small but amazing team of developers.</i>
					</p>
				</span>
				<span className="hero-section-image">
					<HeroSectionImage />
				</span>
			</div>
			<div className="content-section">
				<section className="section1">
					<h1 className="section-title">Who we are</h1>
				</section>
				<section className="section2">
					<h1 className="section-title">How we work</h1>
					<div className="section-body">
						<span className="section-content">
							<p>
								These days thanks to the internet, people can stay connected from different locations, far or near. Our team is spread across
								different cities, so we work remotely and have scheduled meetings online. We also have a whatsapp group where the team interacts and
								stays in touch with one another.
								<br />
								Our workflow is quite simple:
								<br />
								Develop new features, fix bugs, provide support, and add more past questions.
							</p>
						</span>
						<span className="section-image">
							<Section2Image />
						</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
