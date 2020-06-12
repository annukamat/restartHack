import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
	const classes = classNames("brand", className);

	return (
		<div {...props} className={classes}>
			<p className="m-0" style={{ fontSize: "small" }}>
				<Link to="/">
					<Image
						src={require("./../../../assets/images/Image.png")}
						alt="Open"
						width={32}
						height={32}
					/>
				</Link>
				Hello, Bunty
			</p>
		</div>
	);
};

export default Logo;
