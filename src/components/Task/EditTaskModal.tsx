import "../../style/Task/EditTaskModal.css"
import "../../style/Default.css"

import { useAppDispatch } from "../../store/hook";

import React from "react"
import Task, { TaskItemProps } from "./Task";
import { addTask , editTask } from "../../store/taskSlice";


import { ReactComponent as Cross } from "../../assets/cross.svg"

type initialFormData = {
	new_task_title: string,
	new_task_date: string,
	new_task_discription: string,
	new_task_important: boolean
}

interface NewTaskModalProps{
	toggleModal : () => void,
	task : TaskItemProps,
}

const EditTaskModal: React.FC<NewTaskModalProps> = ({toggleModal , task}) => {

	const dispatch = useAppDispatch()

	const initialData : initialFormData  = {
		
			new_task_title: task.title,
			new_task_date:  task.date.toISOString().split('T')[0]  ,
			new_task_discription: task.discription ,
			new_task_important: task.isImportant
	};

	const [formData, updateFormData] = React.useState<initialFormData>(initialData);

	const handleChange = (e: { target: { name: any; value: string; }; }) => {
		updateFormData({
			...formData,

			
			[e.target.name]: e.target.value.trim()
		});
	};

	const handleSubmit = () => {
		console.log(formData);

		dispatch(editTask({
			id: task.id,
			title: formData.new_task_title,
			discription: formData.new_task_discription,
			isCompleted: task.isCompleted,
			isImportant: task.isImportant,
			date: new Date(formData.new_task_date),
		}))

		toggleModal()

	};

	return (

		<div className="modal-content" onClick={() => { }}>
			<div className="modal-header"> 
				<h2>Edit a {task.title} </h2>
				<Cross className="button-icon-cross" onClick= {toggleModal}/>
			</div>
			<form className="new-task-form" onSubmit={(e) => {
				e.preventDefault()
				handleSubmit()
			}}>
				<label className="padding-top">
					Title
				</label>
				<input className="box-input default-padding" name="new_task_title" type="text" placeholder="New task title" onChange={handleChange} defaultValue={formData.new_task_title} required />
				<label className="padding-top">
					Date
				</label>
				<input className="box-input default-padding" name="new_task_date" type="date" onChange={handleChange} defaultValue = {formData.new_task_date} required />
				<label className="padding-top">
					Discription
				</label>
				<textarea className="box-input new-task-discription default-padding " name="new_task_discription" defaultValue={formData.new_task_discription} onChange={handleChange} rows={5} ></textarea>
				<div className="padding-top padding-bottom"/>
				{/* <div className="padding-top padding-bottom">
					<input type="checkbox" name="new_task_important" onChange={handleChange} defaultChecked={formData.new_task_important}  />
					Mark as Important
				</div> */}

				<button className="default-padding edit-task-button" type="submit">Edit a task</button>
			</form>
			{/* Тупо но рабоает же*/}
			<h2></h2>
		</div>
	)
}


export default EditTaskModal

function editTasK(arg0: { id: string; title: string; discription: string; isCompleted: boolean; isImportant: boolean; date: Date; }): any {
	throw new Error("Function not implemented.");
}
