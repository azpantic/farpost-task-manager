import Task from "../Task/Task"
import { TaskItemProps } from "../Task/Task"

import "../../style/Routes/TaskLayout.css"
import "../../style/Default.css"
import "../../style/Text.css"
import TaskOrderSelector from "./TaskOrderSelector"
import { useState } from "react"




interface TaskLayoutProps {
	tasks: TaskItemProps[]
}


type orderFuncType = (tasks : TaskItemProps[]) => TaskItemProps[]

const earlierFirstOrderSort : orderFuncType = (tasks: TaskItemProps[]): TaskItemProps[] => {
	return tasks!.sort((t1, t2) => {
		if (t1.date > t2.date) return 1;
		if (t1.date < t2.date) return -1;
		return 0;
	}
	);
	
}

const laterFirstOrderSort: orderFuncType = (tasks: TaskItemProps[]): TaskItemProps[] => {
	return tasks!.sort((t1, t2) => {
		if (t1.date < t2.date) return 1;
		if (t1.date > t2.date) return -1;
		return 0;
	}
	);
}

const complitedFirstOrderSort: orderFuncType = (tasks: TaskItemProps[]): TaskItemProps[] => {
	return tasks!.sort((t1, t2) => {
		if (!t1.isCompleted && t2.isCompleted) return 1;
		if (t1.isCompleted && !t2.isCompleted) return -1;
		return 0;
	}
	);
}

const uncomplitedFirstOrderSort: orderFuncType = (tasks: TaskItemProps[]): TaskItemProps[] => {
	return tasks!.sort((t1, t2) => {
		if (!t1.isCompleted && t2.isCompleted) return -1;
		if (t1.isCompleted && !t2.isCompleted) return 1;
		return 0;
});
}

const allSortFunc : orderFuncType[] = [
	earlierFirstOrderSort,
	laterFirstOrderSort,
	complitedFirstOrderSort,
	uncomplitedFirstOrderSort
]

const TaskLayout: React.FC<TaskLayoutProps> = ({ tasks }) => {


	// tasks = uncomplitedFirstOrderSort( tasks.slice())

	{/*Это очень тупо но я не знаю как сделать состяние функцию
		const [sortFuncId , setId] = useState<orderFuncType>(uncomplitedFirstOrderSort);

		Не сработало
	*/}
	const [sortFuncId , setId] = useState(-1);

	const toogleOrderFunc  = (newFuncId : number) => {
		if (newFuncId > 0 && newFuncId < allSortFunc.length)
			setId(newFuncId);
	}

	return (
		<div className=" default-padding">
			<div className=" padding-bottom">
				<TaskOrderSelector values={[
					{
						name : "Earlier first",
						value : "min-date" ,
						func : earlierFirstOrderSort
					},
					{
						name : "Later first",
						value : "max-date" ,
						func : laterFirstOrderSort
					},
					{
						name : "Completed first",
						value : "completed-first" ,
						func : complitedFirstOrderSort
					},
					{
						name : "Uncompleted first",
						value : "uncompleted-first" ,
						func : uncomplitedFirstOrderSort
					},
					
				]
				} 
				 toogleFilter = {
					toogleOrderFunc
				}/>
			</div>

			<div className="task-section">
				{
					( sortFuncId === -1 ?  tasks : allSortFunc[sortFuncId](tasks.slice()) ).map(task =>
						<Task key={task.id} {...task} />
					)
				}
			</div>
			{tasks.length == 0 && (
			<div className="center-text">
				<h2>You don`t have task at group</h2>	
			</div>) }
		</div>
	)
}

export default TaskLayout
export type _orderFuncType = orderFuncType;