import s from "./style.module.css";

export function TasksInput(props) {
  function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
  }
  return (
    <>
      <div className={s.form_container}>
        <form className="col-4" onSubmit={submit}>
          <div className="row justify-content-between">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder='Ex : "Tâche"'
                name="name"
              />
            </div>
            <div className="col-2">
              <button type="submit" className={`btn btn-primary ${s.btn}`}>
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
