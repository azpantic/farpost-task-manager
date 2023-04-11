import SearchBox from "./SearchBox";

import "../../style/MainSection/Header.css"
import "../../style/Text.css"

const Header: React.FC = () => {

	const date: Date = new Date();
	const year: number = date.getFullYear();
	const month: number = date.getMonth();
	const day: number = date.getDate();

	const monthName: string[] = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
		.toString()
		.padStart(2, "0")}`;

	const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
		.toString()
		.padStart(2, "0")}}`;

	return (
		<div className="header">
			<SearchBox />

			<time className="date" dateTime={dateTimeFormat}> 
				<div className="text-center">Today: {todayDate}</div>
			</time>

		</div>
	)
}

export default Header;