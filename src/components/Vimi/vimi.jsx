import React, { useState } from "react";
import "./vimi.css";
import Footer from "../Footer/footer";

// Import background hero & logo
import backgroundImage from "../../assets/fotobg.png";
import logo from "../../assets/logo.png";

const Vimi = () => {
  const [isLogoFlipped, setIsLogoFlipped] = useState(false);

  return (
    <div className="vimi-page">
      {/* HERO SECTION */}
      <section
        className="vimi-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="vimi-hero-overlay">
          <p className="vimi-hero-kicker">Kabinet Adyata</p>
          <h1 className="vimi-hero-title">VISI MISI</h1>
          <p className="vimi-hero-subtitle">
            Menjadi sumber utama inspirasi, inovasi, dan perubahan positif
            melalui budaya riset, kolaborasi, dan pengembangan diri yang
            berkelanjutan.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="vimi-content">
        {/* Intro + Logo */}
        <section className="vimi-intro-grid">
          <div className="vimi-intro-text-card">
            <h2 className="vimi-section-label">Tentang Kabinet</h2>
            <p className="vimi-main-description">
              <strong>Kabinet Adyata</strong> mencerminkan{" "}
              <strong>kekuatan</strong> dan <strong>semangat</strong> yang tidak
              pernah padam dalam membawa kebaikan bagi semua. Berasal dari
              Bahasa Sansekerta, <strong>Adya</strong> yang berarti{" "}
              <strong>sumber utama</strong> yang memiliki banyak kebaikan dan{" "}
              <strong>Amita</strong> yang berarti{" "}
              <strong>sejarah semangat</strong> yang tidak pernah pudar.
            </p>
            <p className="vimi-main-description">
              Nama ini menggambarkan kabinet yang{" "}
              <strong>
                berkomitmen untuk menjadi sumber utama inspirasi, inovasi, dan
                perubahan positif
              </strong>
              . Dengan fondasi nilai kebaikan yang melimpah serta semangat yang
              tak tergoyahkan, Kabinet Adyata siap bergerak maju, menghadapi
              tantangan, dan menciptakan dampak yang berarti bagi lingkungan
              sekitarnya.
            </p>
          </div>

          {/* LOGO FLIP CARD */}
          <div
            className={`vimi-logo-card ${isLogoFlipped ? "is-flipped" : ""}`}
            onClick={() => setIsLogoFlipped((prev) => !prev)}
          >
            <div className="vimi-logo-card-inner">
              {/* FRONT */}
              <div className="vimi-logo-card-face vimi-logo-card-front">
                <div className="vimi-logo-chip">Identitas Kabinet</div>
                <img
                  src={logo}
                  alt="Logo Kabinet Adyata"
                  className="vimi-logo-image"
                />
                <p className="vimi-logo-caption">
                  Logo merepresentasikan nilai, semangat, dan arah gerak Kabinet
                  Adyata sebagai rumah bagi riset, karya, dan pengembangan diri.
                  Klik kartu ini untuk melihat makna logo.
                </p>
              </div>

              {/* BACK */}
              <div className="vimi-logo-card-face vimi-logo-card-back">
                <div className="vimi-logo-back-content">
                  <p className="vimi-logo-back-label">Makna Logo</p>

                  <ul className="vimi-logo-meaning-list">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </li>
                  </ul>
                  <p className="vimi-logo-back-footnote">
                    *Deskripsi dapat disesuaikan dengan filosofi resmi logo
                    kabinet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISI & MISI */}
        <section className="vimi-vm-grid">
          {/* VISI */}
          <div className="vimi-card vimi-card-vision">
            <div className="vimi-card-header">
              <span className="vimi-card-pill">Visi</span>
              <h3 className="vimi-card-title">Visi Kabinet Adyata</h3>
            </div>
            <p className="vimi-card-text">
              Menjadi <strong>pelopor perubahan</strong> dengan menciptakan
              solusi inovatif yang berkelanjutan melalui kolaborasi dan
              inisiatif, untuk membawa dampak positif bagi punggawanya dan
              mahasiswa Fakultas Teknik.
            </p>
          </div>

          {/* MISI */}
          <div className="vimi-card vimi-card-mission">
            <div className="vimi-card-header">
              <span className="vimi-card-pill vimi-pill-secondary">Misi</span>
              <h3 className="vimi-card-title">Misi Kabinet Adyata</h3>
            </div>
            <ol className="vimi-mission-list">
              <li>
                Mempertahankan eksistensi FST sebagai{" "}
                <strong>tombak utama pelaksana kaderisasi riset</strong> di
                Fakultas Teknik.
              </li>
              <li>
                <strong>Menjadikan FST wadah yang nyaman</strong> untuk
                berkembang melalui <strong>penanaman budaya apresiatif</strong>{" "}
                yang lebih masif.
              </li>
              <li>
                <strong>Penguatan kolaborasi</strong> dengan target seluruh
                elemen ormawa Fakultas Teknik dan organisasi eksternal{" "}
                <strong>yang bergerak pada riset dan pengembangan diri</strong>.
              </li>
              <li>
                <strong>Menginspirasi setiap individu</strong> untuk mengambil
                langkah proaktif dalam menghadapi tantangan dan menciptakan
                peluang baru.
              </li>
            </ol>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vimi;
