import { Card } from "react-bootstrap";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import './ExpenseList.scss'

export const ExpenseList = () => {
  const expenses = [
    { date: "2022-07-02", name: "Groceries", price: "20$" },
    { date: "2022-07-04", name: "Zara", price: "50$" },
    { date: "2022-07-07", name: "Douglas", price: "100$" },
    { date: "2022-07-10", name: "McDonalds", price: "15$" },
  ];

  return (
    <Card className="custom-card bg-primary w-80 mb-5">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-light">List of expenses</Card.Title>
        {
          expenses.map(item => {
            return <ExpenseItem 
                    date={item.date} 
                    name={item.name}
                    price={item.price}/>
          })
        }
      </Card.Body>
    </Card>
  );
};
