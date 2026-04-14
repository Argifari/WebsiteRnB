import React, { useState } from "react";
import "./Administration.css";
import Footer from "../Footer/footer";
import backgroundImage from "../../assets/fotobg.png";

const Administration = () => {
  const [flippedIds, setFlippedIds] = useState([]);
  const [activeTab, setActiveTab] = useState("anggota"); // "anggota" | "deskripsi"

  const directors = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet",
      position: "Manager",
      major: "Teknik Lorem ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      name: "Person Name 2",
      position: "Staff Administration",
      major: "Teknik Informatika",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote:
        "Mendukung pelaksanaan tugas administratif dengan konsistensi dan ketelitian.",
    },
    {
      id: 3,
      name: "Person Name 3",
      position: "Staff Administration",
      major: "Teknik Elektro",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote:
        "Berperan menjaga kelancaran proses administrasi melalui pengelolaan dokumen yang rapi.",
    },
    {
      id: 4,
      name: "Person Name 4",
      position: "Staff Administration",
      major: "Teknik Mesin",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote:
        "Mengelola kebutuhan administratif harian dengan mengutamakan ketepatan dan kecepatan.",
    },
    {
      id: 5,
      name: "Person Name 5",
      position: "Staff Administration",
      major: "Teknik Sipil",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      quote:
        "Mendampingi kegiatan unit melalui dukungan administratif yang terstruktur.",
    },
    {
      id: 6,
      name: "Person Name 6",
      position: "Staff Administration",
      major: "Teknik Kimia",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      quote:
        "Berperan aktif dalam pengarsipan dan pengelolaan data unit administrasi.",
    },
    {
      id: 7,
      name: "Person Name 7",
      position: "Staff Administration",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      quote:
        "Mendukung koordinasi administrasi lintas kegiatan secara konsisten dan terukur.",
    },
    {
      id: 8,
      name: "Person Name 8",
      position: "Staff Administration",
      major: "Teknik Arsitektur",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      quote:
        "Membantu proses dokumentasi dan penyusunan berkas untuk kebutuhan unit.",
    },
    {
      id: 9,
      name: "Person Name 9",
      position: "Staff Administration",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Mengelola dokumen dan data administratif dengan memperhatikan kerapian dan ketersediaan.",
    },
    {
      id: 10,
      name: "Person Name 10",
      position: "Staff Administration",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Berperan menjaga kelancaran operasional administratif melalui dukungan teknis harian.",
    },
  ];

  // Deskripsi hanya untuk Manager
  const rolesDescription = [
    {
      id: "manager",
      role: "Manager",
      highlight: "Memimpin dan mengarahkan keseluruhan fungsi administrasi.",
      detail:
        "Bertanggung jawab dalam perumusan strategi administrasi, pengambilan keputusan utama, serta memastikan seluruh proses administratif berjalan selaras dengan tujuan organisasi. Manager juga menjadi penghubung antara pimpinan dan tim pelaksana, mengawasi pelaksanaan tugas harian, dan menjaga kualitas layanan administrasi secara menyeluruh.",
    },
    {
      id: "staff",
      role: "Staff",
      highlight: "lorem ipsum dolor sit amet bla bla bla",
      detail:
        "lorem ipsum dolor sit amet bla bla bla lorem ipsum dolor sit amet lorem ipsum dolor sit amet bla bla bla.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const manager = directors.find((d) => d.position === "Manager");
  const staff = directors.filter((d) => d.position !== "Manager");

  const renderCard = (person, extraClass = "") => {
    const isFlipped = flippedIds.includes(person.id);

    return (
      <div
        key={person.id}
        className={`administration-card ${
          isFlipped ? "is-flipped" : ""
        } ${extraClass}`}
        onClick={() => toggleFlip(person.id)}
      >
        <div className="administration-card-inner">
          {/* FRONT */}
          <div className="administration-card-face administration-card-front">
            <div className="administration-image-wrapper">
              <img
                src={person.image}
                alt={person.name}
                className="administration-image"
              />
            </div>
            <div className="administration-info">
              <h3 className="administration-name">{person.name}</h3>
              <div className="administration-badge">{person.position}</div>
              <p className="administration-major">{person.major}</p>
              <p className="administration-year">
                {person.major} {person.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="administration-card-face administration-card-back">
            <div className="administration-back-content">
              <p className="administration-back-label">Quotes</p>
              <h3 className="administration-back-name">{person.name}</h3>
              <p className="administration-back-position">{person.position}</p>
              <p className="administration-back-quote">“{person.quote}”</p>
              <p className="administration-back-footer">
                {person.major} • {person.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="administration-container">
      {/* Hero Section - sama seperti Director */}
      <div
        className="administration-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="administration-hero-overlay">
          <h1 className="administration-hero-title">ADMINISTRATION</h1>
          <p className="administration-hero-subtitle">
            Unit yang mengelola proses administratif untuk mendukung kinerja
            organisasi secara menyeluruh.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="administration-tabs-wrapper">
        <div className="administration-tabs-inner">
          <div className="administration-tabs">
            <button
              className={`administration-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`administration-tab-btn ${
                activeTab === "deskripsi" ? "active" : ""
              }`}
              onClick={() => setActiveTab("deskripsi")}
            >
              Deskripsi Jabatan
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content + Slide Animation */}
      <div
        className={`administration-tab-content administration-tab-content-${activeTab}`}
      >
        {activeTab === "anggota" ? (
          <div className="administration-content">
            {/* Manager sendirian di awal */}
            {manager && (
              <div className="administration-manager-wrapper">
                {renderCard(manager, "administration-card-manager")}
              </div>
            )}

            {/* Staff Lainnya */}

            <div className="administration-grid">
              {staff.map((person) => renderCard(person))}
            </div>
          </div>
        ) : (
          <div className="administration-content">
            <div className="administration-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`administration-desc-row administration-desc-row-${
                    index + 1
                  }`}
                >
                  <div className="administration-desc-role-col">
                    <h3 className="administration-desc-role-title">
                      {role.role}
                    </h3>
                    <p className="administration-desc-highlight">
                      {role.highlight}
                    </p>
                  </div>
                  <div className="administration-desc-text-col">
                    <p className="administration-desc-text">{role.detail}</p>
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

export default Administration;
