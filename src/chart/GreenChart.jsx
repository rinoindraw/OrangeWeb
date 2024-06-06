import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./Chart.module.css";
import {database} from "../firebase"; 
import { ref, onValue } from "firebase/database";

const GreenChart = () => {
  const chartGreenRef = useRef(null);
  const [greenChart, setGreenChart] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartGreenRef.current.getContext("2d");

    if (window.greenChart) {
      window.greenChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [100 - greenChart, greenChart], // Menggunakan kapasitas metal yang diperoleh dari Firebase
          backgroundColor: ["#FDFFE2", "#006769"],
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

    window.greenChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }, [greenChart]); // Gunakan greenChart sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "sortir_buah/warna_hijau");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Warna Hijau:", data);
      setGreenChart(data); 
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
    <div className={styles.cardwrapper}>
      <div>
        <canvas 
          className={styles.chart} 
          ref={chartGreenRef}
          width={800} 
          height={600} 
        ></canvas>
      </div>
      <p className={styles.chartNumber}>{greenChart}%</p>
      <p className={styles.chartText}>Warna Hijau</p>
    </div>
  </div>
  );
};

export default GreenChart;
