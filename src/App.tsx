import './App.css';
import Header from "./components/Header/Header";
import Premium from "./components/Premium/Premium";
import SearchBar from "./components/SearchBar/SearchBar";
import Task from "./components/Task/Task";

function App() {

  return (
    <div className='cxntainer'>
        <Header/>
        <Premium/>
        <SearchBar/>
        <Task/>
    </div>
  )
}

export default App
