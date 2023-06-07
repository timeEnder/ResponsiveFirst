import style from './style.module.css';
import phone from '../../resourses/phone.png';

export default function Task(){
    return(
        <div className={style.container}>
            <div className={style.title}><div className={'font-bold text-2xl'}>Pending Task</div><div className={'text-[#5fbc7f] font-bold'}>See All</div></div>
            <div className={style.line}>
                <div className={style.block1}>
                    <div className={style.inline}><img src={phone}/><div className={style.but}>47% Complete</div></div>
                    <div className={style.text}>APP DESIGN</div>
                </div>
                <div className={style.block2}>WEB</div>
            </div>
            <div className={style.line}>
                <div className={style.block3}>CLIENT</div>
                <div className={style.block4}>DRIBBBLE</div>
            </div>
        </div>
    )
}