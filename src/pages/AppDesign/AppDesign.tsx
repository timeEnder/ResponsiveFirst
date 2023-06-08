import style from './style.module.css';
import AppDesignHeader from "../../components/AppDesingHeader/AppDesignHeader";
import AppDesignUser from "../../components/AppDesignUser/AppDesignUser";

export default function AppDesign(){
    return(
        <div className={style.container}>
            <AppDesignHeader/>
            <AppDesignUser/>
        </div>
    )
}