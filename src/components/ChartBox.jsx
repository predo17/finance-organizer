import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const monthNames = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

function ChartBox({ transactions }) {
  const currentYear = new Date().getFullYear();

  const { labels, entradaData, saidaData } = useMemo(() => {
    const labels = monthNames;
    const entradaData = new Array(12).fill(0);
    const saidaData = new Array(12).fill(0);

    transactions.forEach((t) => {
      const dateParts = t.date.split("/"); // dd/mm/yyyy
      const mes = parseInt(dateParts[1], 10) - 1;
      const ano = parseInt(dateParts[2], 10);

      if (ano === currentYear) {
        if (t.type === "entrada") entradaData[mes] += t.amount;
        if (t.type === "saida") saidaData[mes] += Math.abs(t.amount);
      }
    });

    return { labels, entradaData, saidaData };
  }, [transactions, currentYear]);

  const data = {
    labels,
    datasets: [
      {
        label: "Entradas",
        data: entradaData,
        backgroundColor: "#16a34a",
      },
      {
        label: "Saídas",
        data: saidaData,
        backgroundColor: "#dc2626",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          font: { size: 13 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.raw || 0;
            return `${label}: R$ ${value.toFixed(1)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `R$ ${value}`,
        },
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">
        Gráfico de - {currentYear}
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartBox;
