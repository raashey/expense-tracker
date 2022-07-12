import { Card } from "react-bootstrap";
import { NewExpenseForm } from "./NewExpenseForm";
import "./AddExpense.scss"
export const AddExpense = () => {
  return (
    <Card className="add-card bg-primary m-5 position-relative">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-light">New expense</Card.Title>
        <NewExpenseForm></NewExpenseForm>
      </Card.Body>
    </Card>
  );
};
