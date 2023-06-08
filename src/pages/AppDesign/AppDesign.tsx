import style from './style.module.css';
import AppDesignHeader from "../../components/AppDesingHeader/AppDesignHeader";

export default function AppDesign(){
    return(
        <div className={style.container}>
            <AppDesignHeader/>
        </div>
    )
}