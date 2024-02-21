import React from "react";
import Chart from "react-apexcharts";

const Area = ({ data, height, colors }) => {
  const categories = Array.from(new Set(data.flatMap(item => item.data.map(value => value.year))));

  const options = {
    chart: {
      height: height,
      id: "basic-area",
      fontFamily: 'Urbanist',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      }
    },
    colors: colors,
    stroke: {
      width: 2,
      opacity: 0.5,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      shade: 'light',
      type: "gradient",
      gradient: {
        type: "vertical",
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    plotOptions: {
      area:{
        borderRadius: 3,
        columnWidth: '40%',
      }
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors:"#666"
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors:"#666"
        },
      },
    },
    legend: {
      markers: {
        radius: 3,
      },
    },
  };

  const series = data.map(series => ({
    name: series.name,
    data: categories.map(year => {
      const dataPoint = series.data.find(dataItem => dataItem.year === year);
      return dataPoint ? dataPoint.value : 0;
    }),
  }));

  return (
    <div className="chart">
      <Chart options={options} series={series} type="area" height={options.chart.height}/>
    </div>
  );
};

export default Area;
