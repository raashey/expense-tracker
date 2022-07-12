import './ExpenseDate.scss'

export const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="date d-flex flex-column align-items-center">
      <h4>{day}</h4>
      <h5>{month}</h5>
      <h6>{year}</h6>
    </div>
  );
};
