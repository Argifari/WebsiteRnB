// Director.jsx
import React, { useState } from "react";
import "./director.css";
import Footer from "../Footer/footer";

// import background hero
import backgroundImage from "../../assets/fotobg.png";

const Director = () => {
  const [flippedIds, setFlippedIds] = useState([]);
  const [activeTab, setActiveTab] = useState("anggota"); // "anggota" | "deskripsi"

  const directors = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet",
      position: "President",
      major: "Teknik Lorem ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet",
      position: "Vice President",
      major: "Teknik Lorem Ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet",
      position: "HRD",
      major: "Teknik Lorem Ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote:
        "Nulla facilisi. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit amet",
      position: "RND",
      major: "Teknik Lorem Ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      quote:
        "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit amet",
      position: "Networking",
      major: "Teknik Lorem Ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote:
        "Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur.",
    },
  ];

  const rolesDescription = [
    {
      id: "direktur",
      role: "President",
      highlight: "Penentu arah strategis dan representasi utama organisasi.",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mengambil keputusan strategis, menetapkan prioritas utama program, memastikan seluruh kegiatan selaras dengan visi jangka panjang, serta menjadi wajah resmi organisasi di hadapan stakeholder internal maupun eksternal.",
    },
    {
      id: "wakil",
      role: "Vice President",
      highlight: "Menjembatani visi dengan eksekusi operasional harian.",
      detail:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Mengawal implementasi program, mengkoordinasikan divisi-divisi, mengelola alur komunikasi lintas bidang, dan memastikan setiap target operasional tercapai secara terukur.",
    },
    {
      id: "HRD",
      role: "HRD",
      highlight: "Mengelola administrasi, dokumentasi, dan alur informasi.",
      detail:
        "Nulla facilisi. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Menyusun notulensi, mengelola arsip, surat-menyurat, jadwal rapat, serta memastikan seluruh dokumen penting terdokumentasi rapi dan mudah diakses ketika dibutuhkan.",
    },
    {
      id: "RND",
      role: "RND",
      highlight:
        "Mengatur keuangan organisasi secara transparan dan akuntabel.",
      detail:
        "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Menyusun anggaran, mengelola pemasukan dan pengeluaran, membuat laporan keuangan berkala, dan memastikan bahwa setiap penggunaan dana dapat dipertanggungjawabkan dengan jelas.",
    },
    {
      id: "Networking",
      role: "Networking",
      highlight: "Menggerakkan pelaksanaan program di masing-masing lini.",
      detail:
        "Etiam porta sem malesuada magna mollis euismod. Mengelola tim di divisi, mengawasi pelaksanaan kegiatan, memberikan umpan balik ke pimpinan, serta memastikan output program sesuai target dan memberikan dampak nyata.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Pisahkan leader dan anggota lain
  const leaders = directors.filter((d) =>
    ["President", "Vice President"].includes(d.position)
  );
  const others = directors.filter(
    (d) => !["President", "Vice President"].includes(d.position)
  );

  const renderDirectorCard = (director, extraClass = "") => {
    const isFlipped = flippedIds.includes(director.id);

    return (
      <div
        key={director.id}
        className={`director-card ${
          isFlipped ? "is-flipped" : ""
        } director-card-${director.id} ${extraClass}`}
        onClick={() => toggleFlip(director.id)}
      >
        <div className="director-card-inner">
          {/* FRONT */}
          <div className="director-card-face director-card-front">
            <div className="director-image-wrapper">
              <img
                src={director.image}
                alt={director.name}
                className="director-image"
              />
            </div>
            <div className="director-info">
              <h3 className="director-name">{director.name}</h3>
              <div className="director-badge">{director.position}</div>
              <p className="director-major">{director.major}</p>
              <p className="director-year">
                {director.major} {director.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="director-card-face director-card-back">
            <div className="director-back-content">
              <p className="director-back-label">Quotes</p>
              <h3 className="director-back-name">{director.name}</h3>
              <p className="director-back-position">{director.position}</p>
              <p className="director-back-quote">“{director.quote}”</p>
              <p className="director-back-footer">
                {director.major} • {director.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="director-container">
      {/* Hero Section dengan foto */}
      <div
        className="director-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="director-hero-overlay">
          <h1 className="director-hero-title">DIRECTOR</h1>
          <p className="director-hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Tabs Anggota / Deskripsi */}
      <div className="director-tabs-wrapper">
        <div className="director-tabs-inner">
          <div className="director-tabs">
            <button
              className={`director-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`director-tab-btn ${
                activeTab === "deskripsi" ? "active" : ""
              }`}
              onClick={() => setActiveTab("deskripsi")}
            >
              Deskripsi
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content dengan animasi slide */}
      <div className={`director-tab-content director-tab-content-${activeTab}`}>
        {activeTab === "anggota" ? (
          <div className="director-content">
            {/* Row khusus Direktur & Vice President */}
            <div className="director-leaders-row">
              {leaders.map((director) =>
                renderDirectorCard(director, "director-card-leader")
              )}
            </div>

            {/* Grid anggota lainnya */}

            <div className="director-grid">
              {others.map((director) => renderDirectorCard(director))}
            </div>
          </div>
        ) : (
          <div className="director-content">
            <div className="director-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`director-desc-row director-desc-row-${index + 1}`}
                >
                  <div className="director-desc-role-col">
                    <h3 className="director-desc-role-title">{role.role}</h3>
                    <p className="director-desc-highlight">{role.highlight}</p>
                  </div>
                  <div className="director-desc-text-col">
                    <p className="director-desc-text">{role.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Director;
