import './App.css';
import Header from "./component/Header.jsx"; 
import Task from "./component/Task.jsx";
import Add from './component/Add.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Task/>
      <Task/>
      <Task/>
      <footer>
        <Add/>
      </footer>
    </div>
    
  );
}
export default App;