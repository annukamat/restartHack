import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
} from "reactstrap";
const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"features-tiles section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-tiles-inner section-inner pt-0",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames(
		"tiles-wrap center-content",
		pushLeft && "push-left"
	);

	const sectionHeader = {
		title: "Build up the whole picture",
		paragraph:
			"Schedule video calls with students. Share files, record the call transcript, take attendance , share assignments and lesson plans",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<Card>
										<CardImg
											top
											width="100%"
											src="https://www.cunomial.com/cdn/images/learn/learn-online.svg"
											alt="Card image cap"
										/>
										<Button tag="a" color="light-outline" wideMobile href="#">
											Join Class
										</Button>{" "}
									</Card>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<Card>
										<CardImg
											top
											width="100%"
											height="70%"
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPNXW9eB75bHB6XrPbDSFX_030qSDof7-YGuPn0TXuir1Afn7X&usqp=CAU"
											alt="Card image cap"
										/>
										<Button tag="a" color="light-outline" wideMobile href="#">
											Discussion
										</Button>{" "}
									</Card>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<Card>
										<CardImg
											top
											width="100%"
											height="70%"
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3Ucc0Zdu5QD-ZoTdrt_U4qm5RhjTq5BGYLQLZgvyavqCwoR7p&usqp=CAU"
											alt="Card image cap"
										/>
										<Button tag="a" color="light-outline" wideMobile href="#">
											Assignments
										</Button>{" "}
									</Card>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<Card>
										<CardImg
											top
											width="100%"
											height="70%"
											src="https://www.cunomial.com/cdn/images/learn/learn-online.svg"
											alt="Card image cap"
										/>
										<Button tag="a" color="light-outline" wideMobile href="#">
											Notice
										</Button>{" "}
									</Card>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<Card>
										<CardImg
											top
											width="100%"
											height="70%"
											src="https://cdn2.iconfinder.com/data/icons/business-conference-blue-set-1-1/100/Untitled-1-16-11-512.png"
											alt="Card image cap"
										/>
										<Button tag="a" color="primary" wideMobile href="#">
											Viva
										</Button>{" "}
									</Card>
								</div>
							</div>
						</div>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-content">
									<Card>
										<CardImg
											top
											width="100%"
											height="70%"
											src="https://www.cunomial.com/cdn/images/learn/learn-online.svg"
											alt="Card image cap"
										/>
										<Button tag="a" color="light-outline" wideMobile href="#">
											Discussion
										</Button>{" "}
									</Card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
