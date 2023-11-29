import s from "./style.module.css";
import { useSelector } from "react-redux";
import { List } from "./components/List/List";
import { ExpenseInput } from "./containers/ExpenseInput/ExpenseInput";
import { IncomeInput } from "./containers/IncomeInput/IncomeInput";
import { ExpenseTotal } from "./containers/ExpenseTotal/ExpenseTotal";
import { Logo } from "./components/Logo/Logo";

export default function ExpTrackApp() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  return (
    <div className="demo_space">
      <div className={s.main_container}>
        <div className={`row ${s.header}`}>
          <div className={`col-3`}>
            <Logo title="ExpensesTracker" subtitle="La liste de mes depenses" />
          </div>
          <div className={`col-9 ${s.income_input}`}>
            <IncomeInput />
          </div>
        </div>
        <div className={`row ${s.workspace}`}>
          <div className={`col-12  ${s.expense_input}`}>
            <ExpenseInput />
          </div>
          <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
            <List itemsList={expenseList} />
            <div className={`col-12 ${s.expense_total}`}>
              <ExpenseTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
