import { Form } from "react-bootstrap";
import "./ExpenseFilter.scss";

export const ExpenseFilter = (props) => {
  const filterList = [
    { id: 1, year: "2020" },
    { id: 2, year: "2021" },
    { id: 3, year: "2022" },
    { id: 4, year: "2023" },
    { id: 5, year: "2024" },
  ];

  const setFilterValue = (event) => {
    props.selectedValueChanged(event.target.value);
  };

  return (
    <Form.Select value={props.selected} onChange={setFilterValue}>
      {filterList.map((item) => {
        return (
          <option key={item.id} value={item.year}>
            {item.year}
          </option>
        );
      })}
    </Form.Select>
  );
};
