import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const NewExpenseForm = () => {
  const [validated, setValidated] = useState(false);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    const expense = {
      date: date,
      name: name,
      price: price,
    };
    console.log(expense);
  };

  return (
    <Form
      className="text-white"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="form.DateInput">
        <Form.Label>Date</Form.Label>
        <Form.Control
          required
          type="date"
          onChange={dateChangeHandler}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Please provide date.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.NameInput">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Expense name"
          onChange={nameChangeHandler}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Please provide expense name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.PriceInput">
        <Form.Label>Price</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Price"
          min={1}
          onChange={priceChangeHandler}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Please provide correct price.
        </Form.Control.Feedback>
      </Form.Group>
      <Button className="bg-light text-dark mt-3 mb-3 w-100" type="submit">
        Add new expense
      </Button>
    </Form>
  );
};
