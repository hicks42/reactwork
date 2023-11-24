import { Car } from './Car';
import s from "./style.module.css";

export default function CarApp() {

  function onClick(number){
    alert ("hello de <App /> " + number)
  }

  return (
    <div className={s.container}>
    <h1>Car App</h1>
      <p>je suis le composant {"<CarApp />"}</p>
      <p><Car onCarClick={onClick}></Car></p>
    </div>
  )
}
