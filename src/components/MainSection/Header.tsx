import SearchBox from "./SearchBox";

import "../../style/MainSection/Header.css"
import "../../style/Text.css"


import "../../style/Task/NewTaskModal.css"
import NewTaskModal from "../Task/NewTaskModal"
import { useState } from "react"

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


	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="header">
			{/* <SearchBox /> */}

			<time className="date" dateTime={dateTimeFormat}>
				<div className="text-center">Today: {todayDate}</div>
			</time>
			<div className="add-task-button" onClick={toggleModal}>
				Add new task 
			</div>

			{modal && (
				<div className="modal">
					<div className="overlay" >
						<NewTaskModal toggleModal={toggleModal} />
					</div>
				</div>)
			}
		</div>


	)
}

export default Header;