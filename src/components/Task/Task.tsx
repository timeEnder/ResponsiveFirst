import style from './style.module.css';
import phone from '../../resourses/phone.png';

export default function Task(){
    return(
        <div className={style.container}>
            <div className={style.title}><div className={'font-bold text-2xl'}>Pending Task</div><div className={'text-[#5fbc7f] font-bold'}>See All</div></div>
            <div className={style.line}>
                <div className={style.block1}>
                    <div className={style.inline}><img src={phone}/>
                        <div className={'flex flex-row items-center justify-center w-[15%] h-[4vh] bg-white text-black rounded-l-full'}>47% Complete</div>
                    </div>
                    APP DESIGN
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