import { NoteAPI } from "./note-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { setNoteList } from "../store/note/note-slice";

export function NoteManagerApp() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
