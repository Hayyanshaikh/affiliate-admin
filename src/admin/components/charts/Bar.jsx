import React from "react";
import Chart from "react-apexcharts";

const Bar = ({ data, height, colors }) => {
  const categories = Array.from(new Set(data.flatMap(item => item.data.map(value => value.year))));

  const options = {
    chart: {
      height: height,
      id: "basic-bar",
      fontFamily: 'Urbanist',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    colors: colors,
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '60%',
      }
    },
    xaxis: {
      categories: categories
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
      <Chart options={options} series={series} type="bar" height={options.chart.height}/>
    </div>
  );
};

export default Bar;