import { Card } from "react-bootstrap";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import { useState } from "react";
import "./ExpenseList.scss";

export const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onSelectedValueChange = (value) => {
    setFilteredYear(value);
  };

  const filteredList = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="custom-card bg-primary w-80 mb-5">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-light">List of expenses</Card.Title>
        <div className="filter-row d-flex justify-content-end">
          <ExpenseFilter
            selected={filteredYear}
            selectedValueChanged={onSelectedValueChange}
          ></ExpenseFilter>
        </div>
        {filteredList.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </Card.Body>
    </Card>
  );
};
