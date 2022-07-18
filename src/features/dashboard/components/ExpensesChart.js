import { Chart } from "../../../components/Chart";
import data from "../../../data/data.json";

export const ExpensesChart = (props) => {
  const chartDataPoints = data.chartData;
  chartDataPoints.forEach(point => point.value = 0);

  props.expenses.forEach(
    (expense) =>{
      (chartDataPoints[new Date(expense.date).getMonth()].value += +expense.price)
    }
  );

  return <Chart dataPoints={chartDataPoints} />;
};
