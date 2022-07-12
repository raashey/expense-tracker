import { Card } from "react-bootstrap";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.scss";

export const ExpenseItem = (props) => {
  const date = new Date(props.date);
  return (
    <Card className="expense-item bg-secondary m-3">
      <Card.Body className="d-flex flex-row justify-content-between align-items-center text-light">
        <div className="d-flex grow-2 flex-row justify-content-start">
        <ExpenseDate date={date} className="d-flex grow-2 flex-row justify-content-center"></ExpenseDate>
        </div>
        <div className="d-flex grow-6 flex-row justify-content-center">
          <h2>{props.name}</h2>
        </div>
        <div className="d-flex grow-2 flex-row justify-content-end">
            <div className="price d-flex justify-content-center align-items-center border border-warning">
          <h2>{props.price}</h2>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
