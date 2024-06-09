import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import gundar from "../assets/gundarsmall.png";
import skripsiLogo from "../assets/SkripsiRasyid3mid-01.png";
// import "animate.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Berdasarkan Warna Kulit Buah",
    "Menggunakan Sensor Tcs 3200 Melalui Website",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="container">
        <Container>
          <Row className="bannerFlex">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">About</span>
                    <h1>
                      {`Rancang Bangun Monitoring Penyortiran Buah Jeruk Keprok`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Berdasarkan Warna Kulit Buah", "Menggunakan Sensor Tcs 3200 Melalui Website"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Proyek ini bertujuan untuk merancang dan membangun sistem
                      monitoring otomatis untuk penyortiran buah jeruk keprok
                      berdasarkan warna kulit buah menggunakan sensor warna TCS
                      3200. Sistem ini memungkinkan pemantauan real-time dan
                      pengolahan data melalui antarmuka website, yang memberikan
                      visualisasi langsung hasil penyortiran dan statistik
                      terkait. Dengan teknologi ini, efisiensi dalam proses
                      penyortiran buah dapat ditingkatkan, mengurangi kesalahan
                      manusia, dan meningkatkan kualitas produk yang dihasilkan.
                    </p>
                    <a
                      className="footerCreator"
                      href="https://www.linkedin.com/in/rasyid-hatta-rajasa-3b55a2280/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                      <ArrowRightCircle size={25} />
                    </a>
                    <h2>Supported By</h2>
                    <div className="supportLogo">
                      <img src={gundar} alt="" />
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img className="imgLogoPkm" src={skripsiLogo} alt="Logo" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
