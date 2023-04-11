
import { NavLink } from "react-router-dom";
import Directories from "./Directories/Directories"


const links = [
	{
	  name: "Today's tasks",
	  path: "/today",
	},
	{
	  name: "All tasks",
	  path: "/",
	},
	{
	  name: "Important tasks",
	  path: "/important",
	},
	{
	  name: "Completed tasks",
	  path: "/completed",
	},
	{
	  name: "Uncompleted tasks",
	  path: "/uncompleted",
	},
  ];

const Drawer  = () => {
	return (
		<div className="drawer">
			<div className="center-text default-text-paddin"> Menu</div>
			{links.map((link) => (
				<li key={link.path}>
					<NavLink
					to={link.path}
					className ={ `nav-link ${link.path === "/completed" ? "selected-nav-link" : ""} ` }
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