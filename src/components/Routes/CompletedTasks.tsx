
import "../../style/Default.css"

import TaskLayout from "./TasksLayout"

import { useAppSelector } from "../../store/hook"

const ComplitedTasks : React.FC = () => {
	
	var tasks = useAppSelector(state => state.tasks.list)
	tasks = tasks.filter(task => task.isCompleted)

	return (
		<div>
			<h1 className="default-padding">Complited tasks (total task : {tasks.length})</h1>
			
			<TaskLayout tasks ={ tasks}  />

		</div>


	)
}

export default ComplitedTasks