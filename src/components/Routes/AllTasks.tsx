

import "../../style/Default.css"

import TaskLayout from "./TasksLayout"

import { useAppSelector } from "../../store/hook"

const AllTasks: React.FC = () => {

	var tasks = useAppSelector(state => state.tasks.list)

	return (
		<div>

			<h1 className="default-padding">All task (total task : {tasks.length})</h1>


			<TaskLayout tasks={tasks} />

		</div>


	)
}

export default AllTasks