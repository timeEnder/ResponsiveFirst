import style from './style.module.css';

export default function AppDesignUser(){
    return(
        <div className={style.container}>
            <div className={style.round}><img src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'}/></div>
            <div className={style.title}>Assigned to<div className={style.text}>William Smith</div></div>
        </div>
    )
}