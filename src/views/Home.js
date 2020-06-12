import React from "react";
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Cta from "../components/sections/Cta";

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<Cta split />
		</>
	);
};

export default Home;
