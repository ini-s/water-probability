import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  defaults,
  Chart as ChartJS,
  Ticks,
} from "chart.js";

import { GraphContainer } from "../../styles/graph.styles";

import { IPredictionLogs, PropertyData } from "../../types/data-types";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

//change these to the values needed for the design
// defaults.plugins.title.font= {size: 20};
// defaults.plugins.title.color = "blue";

interface GraphProps {
  propertyName: string;
  data: PropertyData;
  showSoftSensor: boolean;
  predictionLogs: IPredictionLogs[];
}

const Graph = ({
  propertyName,
  data,
  showSoftSensor,
  predictionLogs,
}: GraphProps) => {
  console.log(predictionLogs);
  console.log(data.values);

  const predictionValues = predictionLogs.map((item) => {
    switch (propertyName) {
      case "temperature":
        return item.temperature;
      case "ph":
        return item.ph;
      default:
        return null;
    }
  });

  return (
    <GraphContainer>
      <Line
        data={{
          labels: data.labels,
          datasets: [
            {
              label: data.subtitle,
              data: data.values,
            },
            ...(showSoftSensor
              ? [
                  {
                    label: propertyName,
                    data: predictionValues,
                  },
                ]
              : []),
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            title: {
              text: propertyName,
              display: true,
            },
            subtitle: {
              display: true,
              text: data.subtitle,
            },
            legend: {
              display: true,
              labels: {
                boxHeight: 0,
                usePointStyle: true,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: data.xLabel,
              },
            },
            y: {
              title: {
                display: true,
                text: data.yLabel,
              },
              ticks: {
                stepSize: 1,
              },
              min: data.min,
              max: data.max,
            },
          },
        }}
      />
    </GraphContainer>
  );
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default Graph;
