import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./Chart.module.css";
import {database} from "../firebase"; 
import { ref, onValue } from "firebase/database";

const YellowChart = () => {
  const chartYellowRef = useRef(null);
  const [yellowChart, setYellowChart] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartYellowRef.current.getContext("2d");

    if (window.yellowChart) {
      window.yellowChart.destroy();
    }

    const data = {
      labels: ["Remaining", "Filled"],
      datasets: [
        {
          data: [100 - yellowChart, yellowChart], // Menggunakan kapasitas metal yang diperoleh dari Firebase
          backgroundColor: ["#FDFFE2", "#FDDE55"],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          display: false,

          labels: {
            color: "#000",
          },
        },
      },
    };

    window.yellowChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }, [yellowChart]); // Gunakan yellowChart sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "sortir_buah/warna_kuning");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Warna Kuning:", data);
      setYellowChart(data); 
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
    <div className={styles.cardwrapper}>
      <div>
        <canvas 
          className={styles.chart} 
          ref={chartYellowRef}
          width={800} 
          height={600} 
        ></canvas>
      </div>
      <p className={styles.chartNumber}>{yellowChart}%</p>
      <p className={styles.chartText}>Warna Kuning</p>
    </div>
  </div>
  );
};

export default YellowChart;
