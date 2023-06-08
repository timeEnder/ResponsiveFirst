import style from './style.module.css';
import phone from '../../resourses/phone.png';
import laptop from '../../resourses/laptop.png';
import clients from '../../resourses/clients.png';
import ball from '../../resourses/ball.png';

export default function Task(){
    return(
        <div className={style.container}>
            <div className={style.title}><div className={'font-bold text-2xl'}>Pending Task</div><div className={'text-[#5fbc7f] font-bold'}>See All</div></div>
            <div className={style.line}>
                <div className={style.block1}>
                    <div className={style.inline}><img src={phone}/><div className={style.but}>47% Complete</div></div>
                    <div className={style.text}>APP DESIGN</div>
                    <div className={style.text2}>App Design Task</div>
                </div>
                <div className={style.block2}>
                    <div className={style.inline}><img src={laptop}/></div>
                    <div className={style.text}>WEB</div>
                    <div className={style.text2}>Web design</div>
                </div>
            </div>
            <div className={style.line}>
                <div className={style.block3}>
                    <div className={style.inline}><img src={clients}/></div>
                    <div className={style.text}>CLIENT</div>
                    <div className={style.text2}>Ave studio des...</div>
                </div>
                <div className={style.block4}>
                    <div className={style.inline}><img src={ball}/></div>
                    <div className={style.text}>DRIBBBLE</div>
                    <div className={style.text2}>Create dribbble shot</div>
                </div>
            </div>
        </div>
    )
}