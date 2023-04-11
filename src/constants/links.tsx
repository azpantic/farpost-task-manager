import Home from "../components/Routes/Home"
import CompletedTasks from "../components/Routes/CompletedTasks"

export interface ILink{
	name: string,
	path: string,
	routeObject: JSX.Element,

}


export const links : ILink[] = [
	{
	  name: "Today's tasks",
	  path: "/today",
	  routeObject: Home(),
	},
	{
	  name: "All tasks",
	  path: "/",
	  routeObject: Home(),
	},
	{
	  name: "Important tasks",
	  path: "/important",
	  routeObject: Home(),
	},
	{
	  name: "Completed tasks",
	  path: "/completed",
	  routeObject: CompletedTasks(),
	},
	{
	  name: "Uncompleted tasks",
	  path: "/uncompleted",
	  routeObject: Home(),
	},
  ];
