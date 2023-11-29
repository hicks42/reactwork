import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1500,
    expenseList: [],
    countActionPerformed: 0,
  },
  reducers: {
    addExpense: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      });
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
    },
    incrementCountActionPerformed: (currentSlice, action) => {
      currentSlice.countActionPerformed++;
    },
  },
});

// const addExpense = expenseSlice.actions.addExpense; // old fashion
const { addExpense, setIncome, incrementCountActionPerformed } =
  expenseSlice.actions;

export { addExpense, setIncome, incrementCountActionPerformed };
