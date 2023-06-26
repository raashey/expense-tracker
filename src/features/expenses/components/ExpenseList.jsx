import { ExpenseFilter } from './ExpenseFilter';
import { ExpenseItem } from './ExpenseItem';
import { useState } from 'react';
import './ExpenseList.scss';
import { ExpensesChart } from './ExpensesChart';
import { Card } from 'react-bootstrap';

export const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const onSelectedValueChange = (value) => {
    setFilteredYear(value);
  };

  const filteredList = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  const deleteItemHandler = (itemId) => {
    if (itemId) {
      const index = this.filteredList.findIndex((item) => item.id === itemId);
      this.filteredList.splice(index, 1);
    }
  };

  return (
    <Card className="custom-card bg-primary">
      <Card.Body className="custom-card-content">
        <Card.Title className="text-light">List of expenses</Card.Title>
        <ExpensesChart expenses={filteredList} />
        <div className="filter-row">
          <ExpenseFilter
            selected={filteredYear}
            selectedValueChanged={onSelectedValueChange}
          ></ExpenseFilter>
        </div>
        {filteredList.length > 0 ? (
          filteredList.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                date={item.date}
                name={item.name}
                price={item.price}
                onItemDelete={deleteItemHandler}
              />
            );
          })
        ) : (
          <p className="text-light">No expenses found in {filteredYear}</p>
        )}
      </Card.Body>
    </Card>
  );
};
