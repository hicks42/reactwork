import s from './style.module.css';

export function DisplayDifficulty(props) {
  function getBckgd() {
    return props.difficulty ? "orange" : "lightgrey";
  };

  return (
    <div className={s.container}
      style={{ backgroundColor: getBckgd() }} >
      {props.difficulty ? `Difficulty set to : ${props.difficulty}` : "Easy peasy"}
    </div>
  );
}
