import { useState } from "react";
import { AddExpense } from "./AddExpense";
import { ExpenseList } from "./ExpenseList";
import "./Expenses.scss";
import data from "../../../data/data.json";

export const Expenses = () => {
  const [list, setList] = useState(data.expenses);

  const addNewExpense = (expense) => {
    setList((previous) => {
      return [expense, ...previous];
    });
  };

  return (
    <div className="expense d-flex flex-column align-items-center">
      <AddExpense onAddExpense={addNewExpense}></AddExpense>
      <ExpenseList expenses={list}></ExpenseList>
    </div>
  );
};
