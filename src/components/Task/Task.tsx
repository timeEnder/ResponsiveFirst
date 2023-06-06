import style from './style.module.css';

export default function Task(){
    return(
        <div className={style.container}>
            <div className={style.title}><div className={'font-bold text-2xl'}>Pending Task</div><div className={'text-[#5fbc7f] font-bold'}>See All</div></div>
            <div className={style.line}>
                <div className={style.block1}></div>
                <div className={style.block2}></div>
            </div>
        </div>
    )
}