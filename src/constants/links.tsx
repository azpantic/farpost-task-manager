import TodayTask from "../components/Routes/TodayTasks";
import AllTask from "../components/Routes/AllTasks"
import ImportantTasks from "../components/Routes/ImportantTasks";
import CompletedTasks from "../components/Routes/CompletedTasks"
import UncomplitedTasks from "../components/Routes/UncompletedTasks";
export interface ILink{
	name: string,
	path: string,
	routeObject: React.FC,

}


export const links : ILink[] = [
	{
	  name: "Today's tasks",
	  path: "/today",
	  routeObject: TodayTask,
	},
	{
	  name: "All tasks",
	  path: "/",
	  routeObject: AllTask,
	},
	{
	  name: "Important tasks",
	  path: "/important",
	  routeObject: ImportantTasks,
	},
	{
	  name: "Completed tasks",
	  path: "/completed",
	  routeObject: CompletedTasks,
	},
	{
	  name: "Uncompleted tasks",
	  path: "/uncompleted",
	  routeObject: UncomplitedTasks,

	},
  ];
