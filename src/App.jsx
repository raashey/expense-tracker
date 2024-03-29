import './App.scss';
import { Expenses } from './features/expenses/components/Expenses';
import { Navbar } from './layouts/Navbar';

function App() {
  return (
      <div className="main d-flex flex-column align-items-center">
        <Navbar />
        <Expenses />
      </div>
  );
}
export default App;
