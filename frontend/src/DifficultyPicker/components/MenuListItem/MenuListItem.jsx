import s from "./style.module.css";
import { useState } from "react";

export function MenuListItem({ onClick, difficulty, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  function onClickItem() {
    onClick(difficulty);
  }

  function getBackgroundColor(){
    if(isHovered){
      return "#a5e9ff"
    } else if(isSelected) {
      return "#ffca3a"
    } else {
      return "#eff0ef"
    }
  }

  return (
    <div
      onClick={onClickItem}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
      className={s.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     set to : {difficulty ? difficulty : "none"}
    </div>
  );
}
