import { Fragment, useState, useEffect} from "react";
import { AddExpense } from "./AddExpense";
import { ExpenseList } from "./ExpenseList";

import jsonData from '../../../data/data.json'

export const Expenses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData.expenses);
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8080/expenses")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const addNewExpense = (expense) => {
    setData((previous) => {
      return [expense, ...previous];
    });
  };

  return (
    <Fragment>
      <AddExpense onAddExpense={addNewExpense}></AddExpense>
      <ExpenseList expenses={data}></ExpenseList>
    </Fragment>
  );
};
