import { Card, Button } from "react-bootstrap";
import "./AddExpense.scss"
export const AddExpense = () => {
  return (
    <Card className="add-card bg-primary m-5">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-light">Add new expense</Card.Title>
        <Card.Text className="text-light">
          Here is the component where you can add new expense
        </Card.Text>
        <Button className="bg-light text-dark">Add new expense</Button>
      </Card.Body>
    </Card>
  );
};
