import { Card } from "react-bootstrap";
import { NewExpenseForm } from "./NewExpenseForm";
import "./AddExpense.scss";
export const AddExpense = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expense = {
      ...data,
      id: (Math.floor(Math.random() * (1000 - 1 + 1)) + 1).toString(),
    };
    props.onAddExpense(expense);
  };

  return (
    <Card className="add-card bg-primary m-5">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-light">New expense</Card.Title>
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}></NewExpenseForm>
      </Card.Body>
    </Card>
  );
};
