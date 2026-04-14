import React, { useRef, useState, useEffect } from "react";
import "./beranda.css";
import Footer from "../Footer/footer";

// Import semua gambar
import background from "../../assets/background.png";
import logoWatermark from "../../assets/UNDIPOfficial.png";
import logo from "../../assets/logo.png";
// Import gambar gallery
import gallery1 from "../../assets/fotobg.png";
import gallery2 from "../../assets/fotobg.png";
import gallery3 from "../../assets/fotobg.png";
import gallery4 from "../../assets/fotobg.png";
import gallery5 from "../../assets/fotobg.png";
import gallery6 from "../../assets/fotobg.png";

// Import gambar untuk Report (sesuaikan dengan gambar yang Anda upload)
import reportImg1 from "../../assets/fotobg.png"; // Ganti dengan gambar report Anda
import reportImg2 from "../../assets/fotobg.png"; // Ganti dengan gambar report Anda
import reportImg3 from "../../assets/fotobg.png"; // Ganti dengan gambar report Anda

// Import gambar untuk Company Profile thumbnail
import companyProfileThumb from "../../assets/fotobg.png"; // Ganti dengan thumbnail video

const Beranda = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const reportRef = useRef(null);
  const companyProfileRef = useRef(null);

  // Scroll Animation Effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (reportRef.current) observer.observe(reportRef.current);
    if (companyProfileRef.current) observer.observe(companyProfileRef.current);

    // Add 'loaded' class after page has fully loaded for fade-in effect
    window.addEventListener("load", function () {
      document.body.classList.add("loaded");
      document.getElementById("root").classList.add("loaded");
    });

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);
      if (reportRef.current) observer.unobserve(reportRef.current);
      if (companyProfileRef.current)
        observer.unobserve(companyProfileRef.current);
    };
  }, []);

  // Data gallery
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Kegiatan RnB 1" },
    { id: 2, src: gallery2, alt: "Kegiatan RnB 2" },
    { id: 3, src: gallery3, alt: "Kegiatan RnB 3" },
    { id: 4, src: gallery4, alt: "Kegiatan RnB 4" },
    { id: 5, src: gallery5, alt: "Kegiatan RnB 5" },
    { id: 6, src: gallery6, alt: "Kegiatan RnB 6" },
  ];

  // Data untuk Report Cards
  const reportData = [
    {
      id: 1,
      image: reportImg1,
      category: "EDUCATION",
      title: "Sore",
      description: "Istri dari Masa Depan",
    },
    {
      id: 2,
      image: reportImg2,
      category: "ICT",
      title: "Congratulation & Appreciation",
      description: "September Edition",
    },
    {
      id: 3,
      image: reportImg3,
      category: "HRD",
      title: "Intensive Class 2",
      description: "Yukintip 2025",
    },
  ];

  // Duplikat 3x untuk seamless infinite loop
  const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages];

  // Handler untuk membuka video YouTube (ganti dengan link video Anda)
  const handleVideoClick = () => {
    window.open("https://www.youtube.com/watch?v=YOUR_VIDEO_ID", "_blank");
  };

  return (
    <div className="beranda-wrapper">
      {/* Container 1: Hero Image */}
      <section className="hero-container">
        <div className="hero-image">
          <div className="hero-overlay">
            <div className="hero-content">
              <img src={logo} alt="RnB Logo" className="hero-logo" />

              <div className="hero-heading">
                <img
                  src={logoWatermark}
                  alt=""
                  aria-hidden="true"
                  className="hero-watermark"
                />
                <h1 className="hero-title">Research & Business</h1>
                <p className="hero-subtitle">Universitas Diponegoro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container 2: About */}
      <section className="about-container" ref={aboutRef}>
        <div className="about-content">
          <h2 className="about-title">
            <span className="about-title-highlight">About</span> Research &
            Business
          </h2>
          <div className="about-divider"></div>
          <p className="about-text">
            Hallo R'nBers! UKM R'nB (Research and Business), yang merupakan
            salah satu unit kegiatan mahasiswa di Universitas Diponegoro
            bergerak dalam bidang Riset dan Bisnis sedang membuka open member
            recruitment untuk menjadi Anggota UKM R'nB Undip.
          </p>
        </div>
      </section>

      {/* Container 3: Gallery dengan Auto Scroll */}
      <section className="gallery-container" ref={galleryRef}>
        <div className="gallery-content">
          <h2 className="gallery-title">
            <span className="gallery-title-highlight">Gallery</span> Research &
            Business
          </h2>
          <div className="gallery-divider"></div>

          <div className="gallery-scroll-wrapper">
            <div className="gallery-scroll" ref={scrollRef}>
              {infiniteImages.map((image, index) => (
                <div key={`${image.id}-${index}`} className="gallery-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Container 4: Report */}
      <section className="report-container" ref={reportRef}>
        <div className="report-content">
          <h2 className="report-title">
            <span className="report-title-highlight">Report</span> Research &
            Business
          </h2>
          <div className="report-divider"></div>

          <div className="report-grid">
            {reportData.map((report) => (
              <div key={report.id} className="report-card">
                <div className="report-card-image">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="report-card-img"
                  />
                </div>
                <div className="report-card-content">
                  <span className="report-card-category">
                    {report.category}
                  </span>
                  <h3 className="report-card-title">{report.title}</h3>
                  <p className="report-card-description">
                    {report.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Container 5: Company Profile */}
      <section className="company-profile-container" ref={companyProfileRef}>
        <div className="company-profile-content">
          <h2 className="company-profile-title">
            <span className="company-profile-title-highlight">
              Company Profile
            </span>{" "}
            Research & Business
          </h2>
          <div className="company-profile-divider"></div>

          <div className="company-profile-video-wrapper">
            <div className="company-profile-video" onClick={handleVideoClick}>
              <img
                src={companyProfileThumb}
                alt="Company Profile Video"
                className="company-profile-video-thumbnail"
              />
              <div className="company-profile-video-overlay">
                <div className="company-profile-play-button">
                  <div className="company-profile-play-icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Beranda;
