import "../../style/Routes/TaskOrderSelector.css"

import { _orderFuncType } from "./TasksLayout";

interface IOptionOrder{
	name:string,
	value : string ,
	func :  _orderFuncType,
}

interface TaskOrderSelectorProps
{
	values : IOptionOrder[],
	toogleFilter: ( newOrderFunc : number ) => void,
}

const TaskOrderSelector: React.FC<TaskOrderSelectorProps> = ({values , toogleFilter}) => {
	return (
		<select className="task-order" onChange={
			(event)=> {
				const newOrderFuncId = values.findIndex(value => value.value === event.target.value);
				// if (newOrderFunc != null)
				toogleFilter(newOrderFuncId);
			}
		} >
			<option value="" disabled={true}>Sort by</option>
			{
				values.map(val => 
					<option value={val.value} >{val.name}</option>
				)
			}
			
			{/* <option value="order-added" >Order added</option>
			<option value="min-date" >Earlier first</option>
			<option value="max-date" >Later first</option>
			<option value="completed-first">Completed first</option>
			<option value="uncompleted-first">Uncompleted first</option> */}
		</select>
	)
}

export default TaskOrderSelector;