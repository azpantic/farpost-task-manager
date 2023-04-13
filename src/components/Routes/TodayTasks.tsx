
import "../../style/Default.css"

import TaskLayout from "./TasksLayout"

import { useAppSelector } from "../../store/hook"

const TodayTask : React.FC = () => {
	
	var tasks = useAppSelector(state => state.tasks.list)
	let currentDate = new Date()

	{/* Блять как этой нормально сделать */}
	tasks =tasks.filter(task =>  {
	
		return currentDate.getFullYear() === task.date.getFullYear() &&
		currentDate.getMonth() === task.date.getMonth() &&
		currentDate.getDay() === task.date.getDay()

	})
	
	return (
		<div>
			<h1 className="default-padding">Today tasks (total task : {tasks.length})</h1>
			
			<TaskLayout tasks ={ tasks}  />

		</div>


	)
}

export default TodayTask;