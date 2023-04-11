import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";

const Directories = () =>{
	const [isDirectoriesOpen, setIsDirectoriesOpen] = useState<boolean>(true);
	
	const toggleDirectoriesOpen = () => {
		setIsDirectoriesOpen((prevState) => !prevState);
	  };

	return (
		<div className="directories-btn nav-link" onClick={toggleDirectoriesOpen}>
			
			<Arrow className={`arrow ${isDirectoriesOpen ? "rotate-arrow": ""}`}/>
			Directories
			
		</div>
	)
}

export default Directories;