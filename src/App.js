
import './App.css';
import Sorting from './sortingV/sorting'
import Home from './home.js';
import Path from './pathfind/Path'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">

    <Router>
            <Routes>
                <Route exact path ='/' element ={<Home/>}></Route>
                <Route exact path ='/sorting' element ={<Sorting/>}></Route>
                <Route exact path='/pathfind' element ={<Path/>}></Route>
                <Route exact path='/searching'></Route>
            </Routes>
          </Router>
       
    </div>
  );
}

export default App;
