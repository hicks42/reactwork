import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { useState } from "react";

const difficulties = [null, "Low", "Medium", "high", "Insane"];
export function MenuList({ onItemClick, difficulty }) {
  return (
    <div className={s.container}>
      {difficulties.map((diff) => (
        <MenuListItem
          onClick={onItemClick}
          difficulty={diff}
          isSelected={difficulty == diff}
        />
      ))}
    </div>
  );
}
