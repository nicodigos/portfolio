import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type ChartSeries = {
  name: string;
  data: { x: string; y: number }[]; // Cambiar de Date a string
}[];

function createApexChartElement(): JSX.Element {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      stacked: true, // Apilado habilitado
      offsetX: 0,
    },
    colors: ["#A8D5BA", "#FFD3B6", "#FFABAB", "#FFE156"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 1,
        opacityTo: 1,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      type: "category",
      tickPlacement: "between",
    },
    yaxis: {
      // stacked: true, // Asegúrate de que el apilado esté habilitado también en el eje Y
    },
    tooltip: {
      enabled: true,
      theme: "light",
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const valueX = w.globals.seriesX[seriesIndex][dataPointIndex];
        const formattedDate = valueX; // Ahora valueX es un string

        let tooltipContent = `<div style="padding: 10px; font-size: 14px; font-family: 'Arial', sans-serif;"><strong>${formattedDate} </br> 
        <p style="color:gray;font-weight: normal; padding-top:5px" >Category: value (growth, participation)</p> 
        </strong><br/>`;

        // Calcular el total de todas las series en ese punto x
        let totalSum = 0;
        const seriesData: { name: string; valueY: number }[] = [];

        // Sumamos los valores de cada serie en ese punto x
        series.forEach(
          (serie: { [x: string]: number }, idx: string | number) => {
            if (Array.isArray(serie)) {
              const valueY = serie[dataPointIndex] || 0;
              totalSum += valueY;
              seriesData.push({ name: w.config.series[idx].name, valueY });
            }
          }
        );

        // Invertir el orden de las series solo para el tooltip
        seriesData.reverse();
        let counter = seriesData.length - 1;

        // Iteramos sobre las series invertidas y calculamos el porcentaje
        seriesData.forEach(({ name, valueY }, index) => {
          let growthStr = "N/A";
          if (dataPointIndex > 0) {
            const currentValue = series[counter][dataPointIndex] || 0;
            const previousValue = series[counter][dataPointIndex - 1] || 0;
            const growth = (currentValue - previousValue) / previousValue;
            const growthPercentage = (growth * 100).toFixed(2);

            if (growth > 0) {
              growthStr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="green">
                            <path d="M10 7l5 5H5z"/>  
                          </svg>${growthPercentage}%`;
            } else if (growth === 0) {
              growthStr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <line x1="5" y1="10" x2="15" y2="10" stroke="gray" stroke-width="2" />
            </svg>${growthPercentage}%`;
            } else {
              growthStr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="red">
                            <path d="M10 15l-5-5h10z"/>
                          </svg>${growthPercentage}%`;
            }
          }

          // Calcular el porcentaje del valorY sobre el total sumado de todas las series
          const percentage = totalSum > 0 ? (valueY / totalSum) * 100 : 0;
          tooltipContent += `<div><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:${
            w.config.colors[series.length - 1 - index] // Invertir el color al recorrer las series
          };margin-right:5px;"></span><b>${name}: </b>${valueY} (${growthStr}, ${percentage.toFixed(
            2
          )}%)</div>`;
          counter -= 1;
        });

        // Calcular el crecimiento del total
        let totalGrowthStr = "N/A";
        if (dataPointIndex > 0) {
          const previousTotal = series.reduce(
            (acc: any, serie: any[]) => acc + (serie[dataPointIndex - 1] || 0),
            0
          );
          const growth = (totalSum - previousTotal) / previousTotal;
          const growthPercentage = (growth * 100).toFixed(2);

          if (growth > 0) {
            totalGrowthStr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="green">
                                <path d="M10 7l5 5H5z"/>  
                              </svg>${growthPercentage}%`;
          } else if (growth === 0) {
            totalGrowthStr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="black">
                          <path d="M5 10h10" stroke="black" stroke-width="2"/>
                        </svg>${growthPercentage}%`;
          } else {
            totalGrowthStr = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="red">
                                <path d="M10 15l-5-5h10z"/>
                              </svg>${growthPercentage}%`;
          }
        }

        tooltipContent += `<b>Total: </b>${totalSum} (${totalGrowthStr})</div>`;

        return tooltipContent;
      },
    },
  };

  const series: ChartSeries = [
    {
      name: "South",
      data: [
        { x: "2024-01-01", y: 30 },
        { x: "2024-01-02", y: 40 },
        { x: "2024-01-03", y: 45 },
        { x: "2024-01-04", y: 50 },
        { x: "2024-01-05", y: 40 },
        { x: "2024-01-06", y: 47 },
      ],
    },
    {
      name: "North",
      data: [
        { x: "2024-01-01", y: 20 },
        { x: "2024-01-02", y: 25 },
        { x: "2024-01-03", y: 30 },
        { x: "2024-01-04", y: 15 },
        { x: "2024-01-05", y: 10 },
        { x: "2024-01-06", y: 5 },
      ],
    },

    {
      name: "East",
      data: [
        { x: "2024-01-01", y: 18 },
        { x: "2024-01-02", y: 25 },
        { x: "2024-01-03", y: 47 },
        { x: "2024-01-04", y: 15 },
        { x: "2024-01-05", y: 9 },
        { x: "2024-01-06", y: 5 },
      ],
    },

    {
      name: "West",
      data: [
        { x: "2024-01-01", y: 25 },
        { x: "2024-01-02", y: 25 },
        { x: "2024-01-03", y: 38 },
        { x: "2024-01-04", y: 16 },
        { x: "2024-01-05", y: 18 },
        { x: "2024-01-06", y: 9 },
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
