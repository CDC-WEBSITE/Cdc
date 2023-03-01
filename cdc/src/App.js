import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./AllRoutes";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <h1>CDC WEBSITE</h1>
      <Link to='/'> Landing</Link>
      <Link to='/teams'> Our teams</Link>
      <Link to='/oinsp'> Our Inspiration</Link>
      <AllRoutes />
    </div>
  );
}

export default App;
