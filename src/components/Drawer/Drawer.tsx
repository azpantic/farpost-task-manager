
import { NavLink, useLocation } from "react-router-dom";
import Directories from "./Directories/Directories"

import { links, ILink } from "../../constants/links"

import "../../style/Drawer/Drawer.css"
import "../../style/Default.css"
import "../../style/Text.css"

const Drawer = () => {
	const route = useLocation();
	const currentPath = route.pathname;
	return (
		<div className="drawer hidden-mobile ">
			<div className="center-text default-text-padding"> Filter </div>
			{links.map((link: ILink) => (
				<li key={link.path}>
					<NavLink
						to={link.path}
						className={`nav-link padding-top ${link.path === currentPath ? "selected-nav-link" : ""} `}
					>
						{link.name}
					</NavLink>
				</li>
			))}

			{/* 
			Remove this
			<Directories/> 
			*/}

		</div>

	)
}

export default Drawer;