import { DisplayDifficulty } from "./components/Display/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { useState } from "react";
import s from "./style.module.css";

export default function DPApp() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div className={s.workspace}>
      <h1>Difficulty Picker</h1>
      <div className={s.container}>
        <MenuList
          onItemClick={updateDifficulty}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
