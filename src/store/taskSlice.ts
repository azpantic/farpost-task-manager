import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Task from "../components/Task/Task"

type Task = {
	id: string
	title: string
	discription: string
	isCompleted: boolean
	isImportant: boolean
	date : Date
}

type tasksState = {
	list: Task[]
}

const initialState: tasksState = {
	list: [

		{
			id : '1' , 
			title : "Task 1",
			discription : "Discription for task 1",
			isCompleted: true,
			isImportant: false,
			date : new Date(2023, 3 , 12),
		},
		{
			id : '2' , 
			title : "Task 2",
			discription : "Discription for task 2",
			isCompleted: false,
			isImportant: true,
			date : new Date(2023, 3 , 12),
		},
		
		{
			id : '3' , 
			title : "Task 3",
			discription : "Discription for task 3",
			isCompleted: false,
			isImportant: false,
			date : new Date(2023, 3 , 15),
		},

	],
}

const taskSlice = createSlice({
	name: "tasks",
	initialState: initialState,
	reducers: {
		addTask(state, action: PayloadAction<Task>) {
			const newTask = action.payload
			state.list.push(
				{
					id: new Date().toISOString(),
					title: newTask.title,
					discription: newTask.discription,
					isCompleted: false,
					isImportant: false,
					date: newTask.date,
				}
			)
		},

		editTask(state, action : PayloadAction<Task>){
			const edit_task = action.payload
			const edit_task_id = action.payload.id
			var edit_task_index = state.list.findIndex(task => task.id == edit_task_id)
			
			if (edit_task_index != -1){
				state.list[edit_task_index] = edit_task;
			}

		},

		removeTask(state, action: PayloadAction<string>) {
			const remove_task_id = action.payload
			state.list = state.list.filter(task => task.id !== remove_task_id)
		},

		toogleComplete(state, action: PayloadAction<string>) {
			const toogle_task_id = action.payload
			const toogleTask = state.list.find(task => task.id === toogle_task_id)
			toogleTask!.isCompleted = !toogleTask?.isCompleted
		},

		toogleImportant(state, action: PayloadAction<string>) {
			const toogle_task_id = action.payload
			const toogleTask = state.list.find(task => task.id === toogle_task_id)
			toogleTask!.isImportant = !toogleTask?.isImportant
		},


	}

})

export const { addTask , removeTask , toogleComplete , toogleImportant , editTask } = taskSlice.actions

export default taskSlice.reducer