import s from "./style.module.css";
import { NoteList } from "../../containers/NoteList/NoteList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function NoteBrowse() {
  const [searchText, setSearchTest] = useState("");
  const noteList = useSelector((store) => store.NOTE.noteList);
  const filteredList = noteList.filter((note) => {
    const containsTitle = note.title
      .trim()
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
    const containsContent = note.content
      .trim()
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
    return containsTitle || containsContent;
  });
  return (
    <>
      <div className="row justify-content-center mb-5 w-100">
        <div className="col-sm-12 col-md-4">
          <SearchBar
            placeholder={"Search notes ..."}
            onTextChange={setSearchTest}
          />
        </div>
      </div>
      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          Aucune note encore.
          <Link to="/noteManagerApp/note/new">Cliquez ici</Link>
        </div>
      )}
      <NoteList noteList={filteredList} />
    </>
  );
}
