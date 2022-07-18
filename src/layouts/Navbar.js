import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar d-flex flex-column align-items-center text-white">
      <div className="mt-3 mb-3">
        <h2>Expense Tracker</h2>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <span className="m-2">Dashboard</span>
        <span className="m-2">Expenses</span>
      </div>
    </div>
  );
};
