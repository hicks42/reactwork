import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key == "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }
  return (
    <div>
      <SearchIcon size={25} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder={"Chercher une série TV"}
        className={s.tv_search_input}
      />
    </div>
  );
}
