

import "../../style/Task/Task.css"
import "../../style/Default.css"

import { ReactComponent as Calendar } from "../../assets/calendar.svg"

import { ReactComponent as Trash } from "../../assets/trash.svg"
import { ReactComponent as Edit } from "../../assets/edit.svg"
import { ReactComponent as ImportantStar } from "../../assets/star.svg"
import { ReactComponent as UnimportantStar } from "../../assets/star-line.svg"


import { useAppDispatch } from '../../store/hook';
import { removeTask, toogleComplete, toogleImportant } from "../../store/taskSlice"


import EditTaskModal from "./EditTaskModal"
import { useState } from "react"

interface TaskItemProps{
	id: string
	title: string
	discription: string
	isCompleted: boolean
	isImportant: boolean
	date : Date
}

const formatDate = (date: Date): string => {

	const year: number = date.getFullYear();
	const month: number = date.getMonth() + 1;
	const day: number = date.getDate();

	const dateFormated: string =
		month.toString().padStart(2, "0") +
		"/" +
		day.toString().padStart(2, "0") +
		"/" +
		year;

	return dateFormated;
};

const  Task : React.FC<TaskItemProps> = ({ id ,  title , discription , isCompleted , isImportant , date}) => {
	
	const dateFormated = formatDate(date)
	
	const dispatch = useAppDispatch()
	

	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="task">
	
			<h4 style={{ color: "#ffffff" }} className="padding-left padding-right"> {title}</h4>
			<p style={{ color: "#ffffff" }} className="padding-left padding-right"> {discription} </p>

			<div className="date-string-with-icon default-padding">
				<Calendar className="calendar-icon padding-right" /> 
				<div style={{ color: "#ffffff" }}>{dateFormated}</div>
			</div>
			
			<div className="task-status-bar default-padding">
				<div className="pill-button" 
					style={ isCompleted ? {backgroundColor :  "rgb(167 243 208)"} : {backgroundColor :  "rgb(253 230 138)"}}
					onClick={() => {dispatch(toogleComplete(id))}}
					> 
					{ isCompleted ?  "completed" : "uncompleted"} 
				</div>
				<div className="icons-button-group">
					
					{isImportant ?
					<ImportantStar style={{color : "gold"}} className="button-icon padding-right" onClick={ () => {dispatch(toogleImportant(id))}}/> : 
					<UnimportantStar  style={{fill : "none"}} className="button-icon padding-right"  onClick={ () => {dispatch(toogleImportant(id))}}/> } 
					
					<Trash className="button-icon padding-right" onClick={() => {dispatch(removeTask(id))}}/>
					<Edit className="button-icon" onClick={toggleModal}/>
				</div>
				
			</div>
			

			{modal && (
				<div className="modal">
					<div className="overlay" >
						<EditTaskModal toggleModal={toggleModal} task={{
							id : id,
							title : title ,
							date : date,
							discription : discription,
							isCompleted : isCompleted,
							isImportant : isImportant
						}} />
					</div>
				</div>)
			}

		</div>
	)
}



export default Task
export  type {TaskItemProps}