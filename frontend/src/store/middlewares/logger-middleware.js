import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addExpense,
  setIncome,
  incrementCountActionPerformed,
} from "../expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  predicate: (action, listenerAPI) => {
    // déclaration des actions écoutées
    return (
      action.type === "expenseSlice/addExpense" ||
      action.type === "expenseSlice/setIncome"
    );
  },
  matcher: isAnyOf(addExpense, setIncome), //selection des actions a écouter
  effect: async (action, listenerAPI) => {
    console.log(action);
    listenerAPI.dispatch(incrementCountActionPerformed);
    console.log(action, listenerAPI.getState());
  },
});
