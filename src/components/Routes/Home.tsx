
import "../../style/Default.css"

function Home() : JSX.Element { 
	return (
		<div>
			<h1 className="default-padding">Home (total task : 0)</h1>
			<div className="task-section default-padding">

				<div className="task">
					<h4 style={{color : "#ffffff "}} className="default-padding"> Task 1</h4>
					<p style={{color : "#ffffff"}} className="default-padding">This is the description for this task</p>


				</div>
				
				

			</div>
		</div>


	)
}

export default Home;