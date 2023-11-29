import s from "./style.module.css";

export function ButtonPrimary({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
