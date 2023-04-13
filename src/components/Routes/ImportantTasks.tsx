


import "../../style/Default.css"

import TaskLayout from "./TasksLayout"

import { useAppSelector } from "../../store/hook"

const ImportantTasks : React.FC = () => {
	
	var tasks = useAppSelector(state => state.tasks.list)
	tasks = tasks.filter(task => task.isImportant)

	return (
		<div>
			<h1 className="default-padding">Important tasks (total task : {tasks.length})</h1>
			
			<TaskLayout tasks ={ tasks}  />

		</div>


	)
}

export default ImportantTasks