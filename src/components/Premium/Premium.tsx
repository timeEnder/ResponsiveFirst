import style from './style.module.css';
import cor from '../../resourses/cor.png';

export default function Premium(){
    return(
        <div className={style.container}>
            <div className={style.box}>Subscribe<br/>To Premium<br/><div className={style.font}>Buy premium membership</div></div>
            <div className={style.box2}><img src={cor}/></div>
        </div>
    )
}