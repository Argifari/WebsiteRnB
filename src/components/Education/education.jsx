import React, { useState } from "react";
import "./Education.css";
import Footer from "../Footer/footer";
import backgroundImage from "../../assets/fotobg.png";

const Education = () => {
  const [flippedIds, setFlippedIds] = useState([]);
  const [activeTab, setActiveTab] = useState("anggota"); // "anggota" | "deskripsi"

  const members = [
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
      position: "Assistant Manager",
      major: "Teknik Informatika",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote:
        "Mendampingi manager dalam mengoordinasikan program dan memastikan kelancaran pelaksanaan edukasi.",
    },
    {
      id: 3,
      name: "Person Name 3",
      position: "Staff Education",
      major: "Teknik Elektro",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote:
        "Berperan dalam penyusunan materi dan dokumentasi kegiatan pendidikan.",
    },
    {
      id: 4,
      name: "Person Name 4",
      position: "Staff Education",
      major: "Teknik Mesin",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote:
        "Mendukung pelaksanaan program edukasi melalui dukungan teknis di lapangan.",
    },
    {
      id: 5,
      name: "Person Name 5",
      position: "Staff Education",
      major: "Teknik Sipil",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      quote:
        "Membantu koordinasi jadwal dan kebutuhan logistik kegiatan edukasi.",
    },
    {
      id: 6,
      name: "Person Name 6",
      position: "Staff Education",
      major: "Teknik Kimia",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      quote:
        "Mengelola data peserta dan hasil kegiatan untuk keperluan evaluasi program.",
    },
    {
      id: 7,
      name: "Person Name 7",
      position: "Staff Education",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      quote:
        "Berperan dalam perencanaan dan monitoring indikator keberhasilan aktivitas edukasi.",
    },
    {
      id: 8,
      name: "Person Name 8",
      position: "Staff Education",
      major: "Teknik Arsitektur",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      quote:
        "Mendukung desain visual dan tampilan materi untuk menunjang kegiatan edukasi.",
    },
    {
      id: 9,
      name: "Person Name 9",
      position: "Staff Education",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Membantu integrasi aspek lingkungan dalam konten dan pelaksanaan program edukasi.",
    },
    {
      id: 10,
      name: "Person Name 10",
      position: "Staff Education",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Berperan dalam pengarsipan dan pemeliharaan dokumentasi hasil kegiatan edukasi.",
    },
    {
      id: 11,
      name: "Person Name 11",
      position: "Staff Education",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      quote:
        "Mendukung penyusunan laporan dan rekapitulasi kegiatan pembelajaran.",
    },
    {
      id: 12,
      name: "Person Name 12",
      position: "Staff Education",
      major: "Teknik Arsitektur",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      quote:
        "Berperan dalam penataan ruang dan tata letak untuk kegiatan edukasi luring.",
    },
    {
      id: 13,
      name: "Person Name 13",
      position: "Staff Education",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Mendukung integrasi prinsip keberlanjutan dalam program dan aktivitas pembelajaran.",
    },
    {
      id: 14,
      name: "Person Name 14",
      position: "Staff Education",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Membantu memastikan alur informasi edukasi tersampaikan dengan jelas ke peserta.",
    },
    {
      id: 15,
      name: "Person Name 15",
      position: "Staff Education",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Berperan dalam pelaksanaan teknis kegiatan dan dokumentasi visual program.",
    },
    {
      id: 16,
      name: "Person Name 16",
      position: "Staff Education",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      quote:
        "Mendukung proses follow-up dan tindak lanjut hasil kegiatan pendidikan.",
    },
  ];

  // Deskripsi hanya untuk Manager
  const rolesDescription = [
    {
      id: "manager-education",
      role: "Manager Education",
      highlight:
        "Mengelola dan mengarahkan seluruh program serta aktivitas edukasi.",
      detail:
        "Bertanggung jawab merancang strategi program pendidikan, menyusun prioritas kegiatan, dan memastikan setiap inisiatif edukasi selaras dengan tujuan organisasi. Manager Education mengoordinasikan tim, memantau kualitas pelaksanaan, serta berperan sebagai penghubung antara pimpinan dan pelaksana program di lapangan.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const manager = members.find((m) => m.position === "Manager");
  const assistantManager = members.find(
    (m) => m.position === "Assistant Manager"
  );
  const staff = members.filter(
    (m) => m.position !== "Manager" && m.position !== "Assistant Manager"
  );

  const renderCard = (person, extraClass = "") => {
    const isFlipped = flippedIds.includes(person.id);

    return (
      <div
        key={person.id}
        className={`education-card ${
          isFlipped ? "is-flipped" : ""
        } ${extraClass}`}
        onClick={() => toggleFlip(person.id)}
      >
        <div className="education-card-inner">
          {/* FRONT */}
          <div className="education-card-face education-card-front">
            <div className="education-image-wrapper">
              <img
                src={person.image}
                alt={person.name}
                className="education-image"
              />
            </div>
            <div className="education-info">
              <h3 className="education-name">{person.name}</h3>
              <div className="education-badge">{person.position}</div>
              <p className="education-major">{person.major}</p>
              <p className="education-year">
                {person.major} {person.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="education-card-face education-card-back">
            <div className="education-back-content">
              <p className="education-back-label">Quotes</p>
              <h3 className="education-back-name">{person.name}</h3>
              <p className="education-back-position">{person.position}</p>
              <p className="education-back-quote">“{person.quote}”</p>
              <p className="education-back-footer">
                {person.major} • {person.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="education-container">
      {/* Hero Section */}
      <div
        className="education-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="education-hero-overlay">
          <h1 className="education-hero-title">EDUCATION</h1>
          <p className="education-hero-subtitle">
            Divisi yang berfokus pada pengelolaan, pengembangan, dan eksekusi
            program-program edukasi.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="education-tabs-wrapper">
        <div className="education-tabs-inner">
          <div className="education-tabs">
            <button
              className={`education-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`education-tab-btn ${
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
        className={`education-tab-content education-tab-content-${activeTab}`}
      >
        {activeTab === "anggota" ? (
          <div className="education-content">
            {/* Manager & Assistant Manager di baris atas */}
            {(manager || assistantManager) && (
              <div className="education-manager-wrapper">
                {manager && renderCard(manager, "education-card-manager")}
                {assistantManager &&
                  renderCard(assistantManager, "education-card-manager")}
              </div>
            )}

            <div className="education-grid">
              {staff.map((person) => renderCard(person))}
            </div>
          </div>
        ) : (
          <div className="education-content">
            <div className="education-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`education-desc-row education-desc-row-${
                    index + 1
                  }`}
                >
                  <div className="education-desc-role-col">
                    <h3 className="education-desc-role-title">{role.role}</h3>
                    <p className="education-desc-highlight">{role.highlight}</p>
                  </div>
                  <div className="education-desc-text-col">
                    <p className="education-desc-text">{role.detail}</p>
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

export default Education;
