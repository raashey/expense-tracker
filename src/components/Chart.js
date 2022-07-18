import { ChartBar } from "./ChartBar";
import './Chart.scss'
export const Chart = (props) => {
  const max = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));
  console.log(max);

  return (
    <div className="chart d-flex flex-row justify-content-center align-items-end text-light m-3 p-2">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
