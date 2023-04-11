
import "../../style/MainSection/SearchBox.css"
// import { ReactComponent as Search } from "../../assets/search.svg";

const SearchBox  : React.FC  = () => {
	return (
		<form className="search-box">
			{/* <label> </label> */}
			<input className="search-box-input"
				
				placeholder="Search task"	
			/>
		
			
		</form>
	)
}

export default SearchBox;