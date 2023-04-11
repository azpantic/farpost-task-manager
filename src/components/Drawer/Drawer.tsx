
import { NavLink , useLocation } from "react-router-dom";
import Directories from "./Directories/Directories"

import {links , ILink} from "../../constants/links"

const Drawer  = () => {
	const route = useLocation();
	const currentPath = route.pathname;
	return (
		<div className="drawer">
			<div className="center-text default-text-paddin"> Menu</div>
			{links.map((link : ILink) => (
				<li key={link.path}>
					<NavLink
					to={link.path}
					className ={ `nav-link ${link.path === currentPath ? "selected-nav-link" : ""} ` }
					>
					{link.name}
					</NavLink>
				</li>
        	))}
			<Directories/>
		</div>

	)
}

export default Drawer;