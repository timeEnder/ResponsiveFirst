import './App.css';
import Header from "./components/Header/Header";
import Premium from "./components/Premium/Premium";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

  return (
    <div className='cxntainer'>
        <Header/>
        <Premium/>
        <SearchBar/>
    </div>
  )
}

export default App
