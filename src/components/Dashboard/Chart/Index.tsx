import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type ChartSeries = {
  name: string;
  data: { x: number | string | Date; y: number }[];
}[];

function createApexChartElement(): JSX.Element {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      stacked: true,
      events: {
        selection: (_chart, e) => {
          console.log(new Date(e.xaxis.min));
        },
      },
    },
    colors: ["#008FFB", "#00E396", "#CED4DC"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      type: "datetime",
    },
  };

  const series: ChartSeries = [
    {
      name: "South",
      data: [
        { x: new Date("2024-01-01").getTime(), y: 30 },
        { x: new Date("2024-01-02").getTime(), y: 40 },
      ],
    },
    {
      name: "North",
      data: [
        { x: new Date("2024-01-01").getTime(), y: 20 },
        { x: new Date("2024-01-02").getTime(), y: 25 },
      ],
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default createApexChartElement;
