import s from "./style.module.css";
import { useState } from "react";
import { Trash as TrashIcon } from "react-bootstrap-icons";

export function TextCard({ title, subtitle, content, onClick, onClickDelete }) {
  const [isCarHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickDelete();
    e.stopPropagation();
  }
  return (
    <>
      <div
        className={`card text-bg-light ${s.container}`}
        onClick={onClick}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <div className="card-body">
          <div className={s.title_row}>
            <h4 className="card-title">{title}</h4>
            <TrashIcon
              onClick={onClickTrash_}
              // size={20}
              // onMouseEnter={() => setIsTrashHovered(true)}
              // onMouseLeave={() => setIsTrashHovered(false)}
              // style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
              className={s.trash_icon}
            />
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
          <div className={`card-text ${s.text_content}`}>{content}.</div>
          <a href="#" className="card-link">
            Voir
          </a>
        </div>
      </div>
    </>
  );
}
