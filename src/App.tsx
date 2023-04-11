import Drawer from "./components/Drawer/Drawer";
import "./style/Drawer.css"
import "./style/App.css"
import "./style/Directories.css"
import "./style/Text.css"
import "./style/Default.css"
import "./style/MainSection.css"
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div className="app">
      <Drawer/>
      <MainSection/>
    </div>
    
  )
}

export default App;
