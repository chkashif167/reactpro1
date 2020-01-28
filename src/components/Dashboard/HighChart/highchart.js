import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "Statistics"
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    }
  ]
};

const DD = () => {
  return (
    <div>
      adfasd
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DD;
