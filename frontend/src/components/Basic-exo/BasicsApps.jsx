import { Link } from 'react-router-dom';
import s from "./style.module.css";

export default function BasicApps() {
  return (
    <div className={s.container}>
    <h1>Basics Apps</h1>
      <ol style={{ listStyleType: "upper-roman" }}>
        <li>
          <Link to="/carApp">Car</Link>
        </li>
        <li>
          <Link to="/promesse">Promesse</Link>
        </li>
      </ol>
    </div>
  )
}
