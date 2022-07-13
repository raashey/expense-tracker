import "./App.scss";
import { Expenses } from "./expenses/Expenses";

function App() {
  return (
    <div className="main">
      <div className="header mt-5">
        <h2>Expense Tracker</h2>
      </div>
      <Expenses/>
    </div>
  );
}

export default App;
