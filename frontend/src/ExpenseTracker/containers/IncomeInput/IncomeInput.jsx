import s from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setIncome } from "../../../store/expense/expense-slice";

export function IncomeInput(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();

  function updateIncome(e) {
    const income = e.target.value;
    dispatch(setIncome(income));
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>income </div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={updateIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
