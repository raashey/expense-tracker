import { Card } from "react-bootstrap";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import './ExpenseList.scss'

export const ExpenseList = (props) => {

  return (
    <Card className="custom-card bg-primary w-80 mb-5">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-light">List of expenses</Card.Title>
        {
          props.expenses.map(item => {
            return <ExpenseItem
                    key={item.id} 
                    date={item.date} 
                    name={item.name}
                    price={item.price}/>
          })
        }
      </Card.Body>
    </Card>
  );
};
