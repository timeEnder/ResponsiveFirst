import style from './style.module.css';
import AppDesignHeader from "../../components/AppDesingHeader/AppDesignHeader";
import AppDesignUser from "../../components/AppDesignUser/AppDesignUser";
import AppDesignMembers from "../../components/AppDesignMembers/AppDesignMembers";
import AppDesignTodayUpdate from "../../components/AppDesignTodayUpdate/AppDesignTodayUpdate";

export default function AppDesign(){
    return(
        <div className={style.container}>
            <AppDesignHeader/>
            <div className={style.title}>App Design<div className={style.text}>Task manger ui kit</div></div>
            <AppDesignUser/>
            <div className={style.description}>
                <div className={style.desc_title}>Description</div>
                <div className={style.desc_text}>Task manager app ul kit must be uniqe and trendy. In this app we need every features and section about task manager</div>
            </div>
            <AppDesignMembers/>
            <AppDesignTodayUpdate/>
        </div>
    )
}