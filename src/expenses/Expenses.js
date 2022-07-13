import { useState } from "react";
import { AddExpense } from "./add-expense/AddExpense";
import { ExpenseList } from "./expense-list/ExpenseList";
import './Expenses.scss'

export const Expenses = () => {
  const initialData = [
    { id: 1, date: "2021-07-02", name: "Groceries", price: "20" },
    { id: 2, date: "2022-07-04", name: "Zara", price: "50" },
    { id: 3, date: "2022-07-07", name: "Douglas", price: "100" },
    { id: 4, date: "2022-07-10", name: "McDonalds", price: "15" },
  ];

  const [list, setList] = useState(initialData);

  const addNewExpense = (expense) => {
    setList(previous => {
        return [expense, ...previous];
    });
  };

  return (
    <div className="expense d-flex flex-column align-items-center">
      <AddExpense onAddExpense={addNewExpense}></AddExpense>
      <ExpenseList
        expenses={list}
      ></ExpenseList>
    </div>
  );
};
