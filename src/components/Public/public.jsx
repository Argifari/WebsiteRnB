// Public.jsx
import React, { useState } from "react";
import "./Public.css";
import Footer from "../Footer/footer";
import backgroundImage from "../../assets/fotobg.png";

const Public = () => {
  const [flippedIds, setFlippedIds] = useState([]);
  const [activeTab, setActiveTab] = useState("anggota"); // "anggota" | "deskripsi"

  const members = [
    // === BARIS 1: MANAGER & VICE MANAGER ===
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet",
      position: "Manager",
      major: "Teknik Lorem ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description:
        "Mengelola keseluruhan strategi hubungan publik, menjaga citra organisasi, dan memastikan komunikasi eksternal berjalan terarah dan konsisten.",
    },
    {
      id: 2,
      name: "Person Name 2",
      position: "Vice Manager",
      major: "Teknik Informatika",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description:
        "Mendampingi Manager dalam mengatur agenda komunikasi publik, menjembatani kebutuhan divisi lain dengan PR, serta mengawal eksekusi program.",
    },

    // === SUPERVISOR (2 ORANG) ===
    {
      id: 3,
      name: "Person Name 3",
      position: "Supervisor",
      major: "Teknik Elektro",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description:
        "Mengawasi kualitas pesan dan materi komunikasi, memastikan setiap informasi yang keluar terverifikasi dan sejalan dengan nilai organisasi.",
    },
    {
      id: 4,
      name: "Person Name 4",
      position: "Supervisor",
      major: "Teknik Mesin",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description:
        "Berfokus pada manajemen isu, respon publik, dan koordinasi ketika ada permintaan informasi dari pihak luar.",
    },

    // === STAFF (SISA) ===
    {
      id: 5,
      name: "Person Name 5",
      position: "Staff",
      major: "Teknik Sipil",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      description:
        "Membantu penyusunan materi publikasi, press release sederhana, dan draft komunikasi resmi.",
    },
    {
      id: 6,
      name: "Person Name 6",
      position: "Staff",
      major: "Teknik Kimia",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      description:
        "Mendukung pendataan media partner, kontak penting, dan pengelolaan database relasi eksternal.",
    },
    {
      id: 7,
      name: "Person Name 7",
      position: "Staff",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      description:
        "Membantu koordinasi kebutuhan komunikasi antar divisi saat ada program bersama yang melibatkan publik.",
    },
    {
      id: 8,
      name: "Person Name 8",
      position: "Staff",
      major: "Teknik Arsitektur",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      description:
        "Mendukung penyusunan visual sederhana untuk kebutuhan pengumuman dan informasi ke publik.",
    },
    {
      id: 9,
      name: "Person Name 9",
      position: "Staff",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description:
        "Membantu dokumentasi respon publik dan masukan dari berbagai kanal komunikasi.",
    },
    {
      id: 10,
      name: "Person Name 10",
      position: "Staff",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description:
        "Mendukung pengelolaan pesan di grup, kanal informasi internal-eksternal, dan menjaga etika komunikasi.",
    },
    {
      id: 11,
      name: "Person Name 11",
      position: "Staff",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      description:
        "Membantu pemetaan stakeholder dan pihak yang berpotensi menjadi mitra komunikasi ke depan.",
    },
    {
      id: 12,
      name: "Person Name 12",
      position: "Staff",
      major: "Teknik Arsitektur",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      description:
        "Membantu menyusun format QnA atau FAQ untuk mempermudah respon terhadap pertanyaan publik.",
    },
    {
      id: 13,
      name: "Person Name 13",
      position: "Staff",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description:
        "Mendukung arsip komunikasi keluar-masuk agar jejak interaksi dengan publik terdokumentasi rapi.",
    },
    {
      id: 14,
      name: "Person Name 14",
      position: "Staff",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description:
        "Membantu penyesuaian bahasa komunikasi agar tetap sopan, inklusif, dan mudah dipahami.",
    },
    {
      id: 15,
      name: "Person Name 15",
      position: "Staff",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description:
        "Mendukung pekerjaan ad-hoc lain yang berhubungan dengan kebutuhan hubungan publik.",
    },
    {
      id: 16,
      name: "Person Name 16",
      position: "Staff",
      major: "Teknik Lingkungan",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description:
        "Membantu menjaga konsistensi tone komunikasi di berbagai kanal yang digunakan organisasi.",
    },
  ];

  const rolesDescription = [
    {
      id: "manager",
      role: "Manager Public Relation",
      highlight:
        "Penanggung jawab utama citra, reputasi, dan komunikasi publik organisasi.",
      detail:
        "Merancang strategi komunikasi, mengelola prioritas isu, dan menjadi wajah utama organisasi ketika berhadapan dengan publik maupun media.",
    },
    {
      id: "vice-manager",
      role: "Vice Manager",
      highlight:
        "Penghubung antara kebutuhan internal dengan strategi komunikasi ke publik.",
      detail:
        "Mendampingi Manager dalam menyusun pesan utama, mengatur alur komunikasi lintas divisi, dan memastikan setiap informasi tersampaikan dengan terstruktur.",
    },
    {
      id: "supervisor",
      role: "Supervisor PR",
      highlight:
        "Mengawal kualitas pesan dan menjaga kesesuaian informasi dengan standar organisasi.",
      detail:
        "Melakukan review terhadap materi komunikasi, mengawasi respon terhadap publik, dan memberikan rekomendasi penanganan isu secara bijak.",
    },
    {
      id: "staff",
      role: "Staff Public Relation",
      highlight:
        "Tim pelaksana yang mengoperasikan strategi komunikasi dalam bentuk interaksi nyata.",
      detail:
        "Melaksanakan tugas harian komunikasi seperti penulisan, pendistribusian informasi, dokumentasi, dan pengelolaan kanal komunikasi dengan publik.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // GROUPING
  const managers = members.filter((m) =>
    ["Manager", "Vice Manager"].includes(m.position)
  );
  const supervisors = members.filter((m) => m.position === "Supervisor");
  const staff = members.filter((m) => m.position === "Staff");

  const renderPublicCard = (person, extraClass = "") => {
    const isFlipped = flippedIds.includes(person.id);

    return (
      <div
        key={person.id}
        className={`public-card ${isFlipped ? "is-flipped" : ""} public-card-${
          person.id
        } ${extraClass}`}
        onClick={() => toggleFlip(person.id)}
      >
        <div className="public-card-inner">
          {/* FRONT */}
          <div className="public-card-face public-card-front">
            <div className="public-image-wrapper">
              <img
                src={person.image}
                alt={person.name}
                className="public-image"
              />
            </div>
            <div className="public-info">
              <h3 className="public-name">{person.name}</h3>
              <div className="public-badge">{person.position}</div>
              <p className="public-major">{person.major}</p>
              <p className="public-year">
                {person.major} {person.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="public-card-face public-card-back">
            <div className="public-back-content">
              <p className="public-back-label">Deskripsi</p>
              <h3 className="public-back-name">{person.name}</h3>
              <p className="public-back-position">{person.position}</p>
              <p className="public-back-desc">{person.description}</p>
              <p className="public-back-footer">
                {person.major} • {person.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="public-container">
      {/* Hero Section */}
      <div
        className="public-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="public-hero-overlay">
          <h1 className="public-hero-title">PUBLIC RELATION</h1>
          <p className="public-hero-subtitle">
            Tim Public Relation menjadi garda terdepan dalam menjaga citra dan
            menjalin komunikasi yang sehat dengan publik.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="public-tabs-wrapper">
        <div className="public-tabs-inner">
          <div className="public-tabs">
            <button
              className={`public-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`public-tab-btn ${
                activeTab === "deskripsi" ? "active" : ""
              }`}
              onClick={() => setActiveTab("deskripsi")}
            >
              Deskripsi
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className={`public-tab-content public-tab-content-${activeTab}`}>
        {activeTab === "anggota" ? (
          <div className="public-content">
            {/* Baris 1: Manager & Vice Manager */}
            <div className="public-leaders-row">
              {managers.map((p) => renderPublicCard(p, "public-card-leader"))}
            </div>

            {/* Baris 2: 2 Supervisor */}
            <div className="public-supervisors-row">
              {supervisors.map((p) => renderPublicCard(p))}
            </div>

            {/* Baris 3+: Staff */}
            <div className="public-staff-grid">
              {staff.map((p) => renderPublicCard(p))}
            </div>
          </div>
        ) : (
          <div className="public-content">
            <div className="public-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`public-desc-row public-desc-row-${index + 1}`}
                >
                  <div className="public-desc-role-col">
                    <h3 className="public-desc-role-title">{role.role}</h3>
                    <p className="public-desc-highlight">{role.highlight}</p>
                  </div>
                  <div className="public-desc-text-col">
                    <p className="public-desc-text">{role.detail}</p>
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

export default Public;
