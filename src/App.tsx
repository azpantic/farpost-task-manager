import Drawer from "./components/Drawer/Drawer";
import MainSection from "./components/MainSection/MainSection";
import Profile from "./components/Profile/Profile";

import "./style/App.css"

function App() {
  return (
    <div className="app">
      <Drawer/>
      <MainSection/>
      {/* <Profile/> */}
    </div>
    
  )
}

export default App;
