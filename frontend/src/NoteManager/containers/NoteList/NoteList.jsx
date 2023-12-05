import { TextCard } from "../../components/TextCard/TextCard";
import { NoteAPI } from "../../note-api";
import { deleteNote } from "../../../store/note/note-slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";

export function NoteList(props) {
  const noteList = useSelector((store) => store.NOTE.noteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function deleteNote_(note) {
    if (window.confirm("Etes vous sur ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }
  return (
    <>
      <div className={`row container-fluid justify-content-center`}>
        {noteList.map((note) => {
          return (
            <div key={note.id} className={s.card_container}>
              <TextCard
                title={note.title}
                subtitle={note.subtitle}
                content={note.content}
                onClick={() => navigate("/noteManagerApp/note/" + note.id)}
                onClickDelete={() => deleteNote_(note)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
