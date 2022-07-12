import { AddExpense } from "./add-expense/AddExpense";
import "./App.scss";
import { ExpenseList } from "./expense-list/ExpenseList";

function App() {
  return (
    <div className="main">
      <div className="header mt-5">
        <h2>Expense Tracker</h2>
      </div>
      <div className="expense d-flex flex-column align-items-center">
      <AddExpense></AddExpense>
      <ExpenseList></ExpenseList>
      </div>
    </div>
  );
}

export default App;
