import "../../style/Task/NewTaskModal.css"
import "../../style/Default.css"

import { useAppDispatch } from "../../store/hook";
import { addTask } from "../../store/taskSlice";

import React from "react"
import Task from "./Task";

import { ReactComponent as Cross } from "../../assets/cross.svg"

type initialFormData = {
	new_task_title: string,
	new_task_date: string,
	new_task_discription: string,
	new_task_important: boolean
}

interface NewTaskModalProps{
	toggleModal : () => void,
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({toggleModal}) => {

	const dispatch = useAppDispatch()

	const [formData, updateFormData] = React.useState<initialFormData>({
		new_task_title: "",
		new_task_date: "",
		new_task_discription: "",
		new_task_important: false
	});

	const handleChange = (e: { target: { name: any; value: string; }; }) => {
		updateFormData({
			...formData,

			// Trimming any whitespace
			[e.target.name]: e.target.value.trim()
		});
	};

	const handleSubmit = () => {
		console.log(formData);

		dispatch(addTask({
			id: "",
			title: formData.new_task_title,
			discription: formData.new_task_discription,
			isCompleted: false,
			isImportant: formData.new_task_important,
			date: new Date(formData.new_task_date),
		}))

		toggleModal()

	};

	return (

		<div className="modal-content" onClick={() => { }}>

			<div className="modal-header"> 
				<h2>Add a new task</h2>
				<Cross className="button-icon-cross" onClick= {toggleModal}/>
			</div>
			<form className="new-task-form" onSubmit={(e) => {
				e.preventDefault()
				handleSubmit()
			}}>
				<label className="padding-top">
					Title
				</label>
				<input className="box-input default-padding" name="new_task_title" type="text" placeholder="New task title" onChange={handleChange} required />
				<label className="padding-top">
					Date
				</label>
				<input className="box-input default-padding" name="new_task_date" type="date" onChange={handleChange} required />
				<label className="padding-top">
					Discription
				</label>
				<textarea className="box-input new-task-discription default-padding" name="new_task_discription" placeholder="New task discription" onChange={handleChange} rows={5} ></textarea>

				<div className="padding-top padding-bottom">
					<input type="checkbox" name="new_task_important" onChange={handleChange} />
					Mark as Important
				</div>

				<button className="default-padding add-task-button" type="submit">Add a task</button>
			</form>
			{/* Тупо но рабоает же*/}
			<h2></h2>
		</div>
	)
}



export default NewTaskModal