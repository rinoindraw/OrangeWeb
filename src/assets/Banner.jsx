import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import gundar from "../../assets/gundarsmall.png";
import pkmLogo from "../../assets/logo_skripsi.png";
import profilePicture from "../../assets/pasfotoeditednew.png";
// import "animate.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Berbasis Internet Of Things",
    "Menggunakan Website Dan Mobile App",
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
                    <span className="tagline">Skripsi 2024</span>
                    <h1>
                      {`Rancang Bangun Pemilahan Sampah Logam Dan Non Logam`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Berbasis Internet Of Things", "Menggunakan Website Dan Mobile App"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Skripsi "Rancang Bangun Pemilahan Sampah Logam dan Non
                      Logam Berbasis Internet of Things Menggunakan Website dan
                      Mobile App" bertujuan untuk mengembangkan sistem cerdas
                      yang dapat secara otomatis memilah sampah logam dan
                      non-logam. Sistem ini memanfaatkan teknologi Internet of
                      Things (IoT) yang terintegrasi dengan aplikasi berbasis
                      website dan mobile.
                    </p>
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
                    <img className="imgLogoPkm" src={pkmLogo} alt="Logo" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container">
        <Container>
          <Row className="bannerFlex">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                <div className="deskWrapper">
                  <span className="tagline">Creator</span>
                  <h1>Rino Indra Wicaksono</h1>
                  <p>
                    An Undergraduate Computer System student who wants to gain
                    experience and really interested in Programming. I am a
                    person who works well under pressure, can handle and finish
                    task on scheduled deadline, and have good verbal
                    communication skills.
                  </p>
                  <a
                    className="footerCreator"
                    href="https://www.instagram.com/rinoindraw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Me
                    <ArrowRightCircle size={25} />
                  </a>
                </div>
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                <div className="image-wrapper">
                  <div className="image-inner">
                    {" "}
                    <img
                      className="imgLogoSkripsiTwo"
                      src={profilePicture}
                      alt="Logo"
                    />
                  </div>
                </div>
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
