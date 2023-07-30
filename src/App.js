import logo from './logo.svg';
import './App.css';
import Home from './screen/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>

<Routes>
<Route exact path='/' element={<Home/>}/>

</Routes>

    </Router>
    </>
  );
}

export default App;
