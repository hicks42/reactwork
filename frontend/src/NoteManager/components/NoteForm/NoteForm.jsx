import s from "./style.module.css";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { useState } from "react";
import { ValidatorService } from "../../../services/form-validation";
import { FieldError } from "../FieldError/FieldError";

const VALIDATORS = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 2000);
  },
};

export function NoteForm({
  note,
  isEditable = true,
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) {
  const [formValues, setFormValues] = useState({
    title: note?.title || "",
    content: note?.content || "",
  });
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : "",
    content: note?.content ? undefined : "",
  });

  function hasError() {
    return Object.values(formErrors).some((error) => error !== undefined);
  }

  function updateFormValues(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  }

  function validate(fieldName, fieldValue) {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  }
  const actionIcons = (
    <>
      <div className="col-1 text-end">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <div className="col-1 text-end">
        {onClickDelete && (
          <TrashFill onClick={onClickDelete} className={s.icon} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Titre</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control w-50"
        value={formValues.title}
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Contenu</label>
      <textarea
        onChange={updateFormValues}
        name="content"
        className="form-control"
        value={formValues.content}
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitButton = (
    <div className={s.submit_btn}>
      {onSubmit && (
        <ButtonPrimary
          isDisabled={hasError()}
          onClick={() => onSubmit(formValues)}
        >
          Submit
        </ButtonPrimary>
      )}
    </div>
  );
  return (
    <div className={s.container}>
      <form>
        <div className="row justify-content-between mb-3">
          <h4 className="col-10">{title}</h4>
          {actionIcons}
        </div>
        {isEditable && titleInput}
        {isEditable ? (
          contentInput
        ) : (
          <pre className={s.pre}>{note.content}</pre>
        )}
        {isEditable && submitButton}
      </form>
    </div>
  );
}
