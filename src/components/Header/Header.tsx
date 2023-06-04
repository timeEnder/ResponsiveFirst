import style from './style.module.css';

export default function Header(){
    return(
        <div className={style.container}>
           <div className={style.label}>TaskPro</div>
            <div className={style.menu}>
                <div className={style.round}/>
                <div className={style.round}/>
                <div className={style.round}/>
                <div className={style.round}/>
            </div>
        </div>
    )
}