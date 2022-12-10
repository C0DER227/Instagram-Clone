
import './App.css';
import Slider from './Components/Slider';
import Main from './Components/Main';
import { Profile } from './Components/Profile';



function App() {
  return (
    <div className="App flex justify-around">
    <Slider />
    <Main />
    <Profile/>
    </div>
  );
}

export default App;
