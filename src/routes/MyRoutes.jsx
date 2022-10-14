import { Route, Routes } from "react-router-dom";
import Home from "../components/hompage_components/home/Hompage";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import Profile from "../components/main_app_components/users/profile/Profile";
import Dashboard from "../components/main_app_components/dashboard/Dashboard";
import Features from "../components/hompage_components/features/Features";
import About from "../components/hompage_components/about/About";
import Contact from "../components/hompage_components/contact/Contact";
import AllProfessionals from "../components/main_app_components/users/All_professionals";
import ChangePassword from "../components/main_app_components/users/profile/ChangePassword";

const MyRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/features" element={<Features />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/about" element={<About />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/users" element={<AllProfessionals />} />
			<Route path="/users/:id" element={<Profile />} />
			<Route path="/changepassword" element={<ChangePassword />} />
		</Routes>
	);
};

export default MyRoutes;
