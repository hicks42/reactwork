import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { NoteForm } from "../../components/NoteForm/NoteForm";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NoteAPI } from "../../note-api";
import { updateNote, deleteNote } from "../../../store/note/note-slice";
import s from "./style.module.css";

export function Note(params) {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const note = useSelector((store) =>
    // ######## opption de recherche par params
    // const [searchParams] = useSearchParams();
    // ######## et on return
    // useSearchParams.get("truc")

    store.NOTE.noteList.find((note) => note.id === id)
  );
  const navigate = useNavigate();

  async function submit(formValues) {
    const updatedNote = await NoteAPI.update({ ...formValues, id: id });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

  function deleteNote_(note) {
    if (window.confirm("Etes vous sur ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/NoteManagerApp/");
    }
  }

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? `Modification de ${note.title}` : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={() => deleteNote_(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
