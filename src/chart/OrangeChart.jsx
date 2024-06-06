import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./Chart.module.css";
import {database} from "../firebase"; 
import { ref, onValue } from "firebase/database";

const OrangeChart = () => {
  const chartRef = useRef(null);
  const [orangeFruit, setOrangeFruit] = useState(0); // State untuk menyimpan kapasitas metal

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (window.myChart) {
      window.myChart.destroy();
    }

    const data = {
      labels: ["Filled", "Remaining"],
      datasets: [
        {
          data: [100 - orangeFruit, orangeFruit], // Menggunakan kapasitas metal yang diperoleh dari Firebase
          backgroundColor: ["#FDFFE2", "#FF7D29"],
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

    window.myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }, [orangeFruit]); // Gunakan orangeFruit sebagai dependensi useEffect

  useEffect(() => {
    const dbRef = ref(database, "sortir_buah/warna_orange");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Warna Orange:", data);
      setOrangeFruit(data); 
    });
  }, []);

  return (
    <div className={styles.chartContainer}>
    <div className={styles.cardwrapper}>
      <div>
        <canvas 
          className={styles.chart} 
          ref={chartRef}
          width={800} 
          height={600} 
        ></canvas>
      </div>
      <p className={styles.chartNumber}>{orangeFruit}%</p>
      <p className={styles.chartText}>Warna Orange</p>
    </div>
  </div>
  );
};

export default OrangeChart;
