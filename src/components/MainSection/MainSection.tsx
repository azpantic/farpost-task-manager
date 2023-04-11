import { Route, Routes } from "react-router-dom";
import  Header  from "./Header"
import {links , ILink} from "../../constants/links"

const MainSection: React.FC = () => {

	return (
		<main className="main-section">

			<Header/>
			<Routes>
			{links.map((link : ILink) => (
				<Route path={link.path} element = {link.routeObject}   />
        	))}

			</Routes>
		</main>
	)
}

export default MainSection;