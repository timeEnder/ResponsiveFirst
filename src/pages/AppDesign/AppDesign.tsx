import style from './style.module.css';
import AppDesignHeader from "../../components/AppDesingHeader/AppDesignHeader";
import AppDesignUser from "../../components/AppDesignUser/AppDesignUser";

export default function AppDesign(){
    return(
        <div className={style.container}>
            <AppDesignHeader/>
            <div className={style.title}>App Design<div className={style.text}>Task manger ui kit</div></div>
            <AppDesignUser/>
        </div>
    )
}