import style from './style.module.css';

export default function AppDesignTodayUpdate(){
    return(
        <div className={style.container}>
            <div className={style.title}>Today Update</div>
            <div className={style.block}>
                <div className={style.round}>
                    <div className={style.round2}></div>
                </div>
                <div className={style.block_title}>Task Number 1</div>
                <div className={style.block_text}> (Complete)</div>
            </div>
            <div className={style.block2}>
                <div className={style.round3}>
                    <div className={style.round4}></div>
                </div>
                <div className={style.block_title2}>Task Number 2</div>
                <div className={style.block_text2}> (Pending)</div>
            </div>
        </div>
    )
}