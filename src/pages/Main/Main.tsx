import style from './style.module.css';
import Header from "../../components/Header/Header";
import Premium from "../../components/Premium/Premium";
import SearchBar from "../../components/SearchBar/SearchBar";
import Task from "../../components/Task/Task";

export default function Main(){
    return(
        <div className={style.container}>
            <Header/>
            <Premium/>
            <SearchBar/>
            <Task/>
        </div>
    )
}