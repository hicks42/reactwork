import { NoteAPI } from "../../note-api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NoteForm } from "../../components/NoteForm/NoteForm";
import { addNote } from "../../../store/note/note-slice";
import s from "./style.module.css";

export function NoteCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function createNote(formValues) {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch({ type: "RESET_STATE" });
    // dispatch(addNote(createdNote));
    navigate("/NoteManagerApp/");
  }
  return (
    <>
      <NoteForm title="Create a note" onSubmit={createNote} />
    </>
  );
}
