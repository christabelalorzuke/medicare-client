import "../Common_homepage_styles.css";
import Navbar from "../Navbar";
import { ReactComponent as HeroSectionImage } from "./undraw_features.svg";

const Features = () => {
	return (
		<div>
			<Navbar />
			<div className="hero-section">
				<span className="hero-section-content">
					<h1>What makes up MEDICARE?</h1>
					<p>
						<i>MEDICARE offers a lot of amazing features, but has 2 main features which makes up the MVP.</i>
					</p>
				</span>
				<span className="hero-section-image">
					<HeroSectionImage />
				</span>
			</div>
			<div className="content-section">
				<section className="section1">
					<h1 className="section-title">Main Features</h1>
					<div className="section-body"></div>
				</section>
			</div>
		</div>
	);
};

export default Features;
