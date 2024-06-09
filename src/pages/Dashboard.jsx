// Dashboard.jsx
import React, { useEffect, useRef } from "react";
import OrangeFruit from '../chart/OrangeChart';
import GreenFruit from '../chart/GreenChart';
import YellowFruit from '../chart/YellowChart';
import styles from "./Dashboard.module.css";
import skripsiLogo from "../assets/SkripsiRasyid2.png";

const Dashboard = () => {
  return (
    <section className={styles.sectionDashboard}>
      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.tittleWrapper}>
            <img className={styles.dashLogo} src={skripsiLogo} alt="Logo" />
            <div className="social-icon">
              {/* <a
                href="https://www.instagram.com/rinoindraw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a> */}
            </div>
            <div className={styles.tittleText}>
              <h2>Dashboard</h2>
              <p>OrangeMover</p>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <OrangeFruit />
            <GreenFruit />
            <YellowFruit />
          </div>
        </div>
      </div>
      {/* <div className={styles.footerContainer}>
        <Footer />
      </div> */}
    </section>
  );
};

export default Dashboard;
