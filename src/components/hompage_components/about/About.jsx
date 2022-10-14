import "../Common_homepage_styles.css";
import Navbar from "../Navbar";
import { ReactComponent as HeroSectionImage } from "./undraw_team.svg";
import { ReactComponent as Section2Image } from "./undraw_group_chat.svg";
import davidImage from "./david.jpeg";
import bellaImage from "./bella.jpg";
import "./About.css";

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
					<br />
					<div className="section-body">
						<span className="dev-profile">
							<div className="header">
								<div className="image-container">
									<img src={bellaImage} alt="" />
								</div>
								<h4>Bella</h4>
							</div>
							<p className="body">
								I have a goal to build world-class software solutions that'll positively make a difference in local communities, Africa, and the
								world. As a result, I constantly seek to improve upon my front-end development skills using the React JavaScript library, alongside
								many other packages, to build dynamic websites and apps. Although I'm not heavily focused on it, I also use NodeJS, ExpressJS, and
								MongoDB with Mongoose to build REST APIs.
							</p>
						</span>
						<span className="dev-profile">
							<div className="header">
								<img src={davidImage} alt="" />
								<h4>David</h4>
							</div>
							<p className="body">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur quo corporis, unde hic quisquam at sunt officia suscipit veniam
								nemo voluptates porro consequatur quae veritatis provident error perferendis soluta?
							</p>
						</span>
					</div>
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
