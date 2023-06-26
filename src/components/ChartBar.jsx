import "./ChartBar.scss";
export const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar d-flex flex-column align-items-center justify-content-end">
      <div className="chart-bar-box d-flex flex-column align-items-center justify-content-end">
        <div className="chart-bar-value">{props.value}$</div>
        <div className="chart-bar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar-label">{props.label}</div>
    </div>
  );
};
