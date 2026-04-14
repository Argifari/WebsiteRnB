// Media.jsx
import React, { useState } from "react";
import "./Media.css";
import Footer from "../Footer/footer";
import backgroundImage from "../../assets/fotobg.png";

const Media = () => {
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
        "Mengatur arah kreatif tim media, menentukan guideline visual dan tone komunikasi, serta memastikan seluruh output konsisten dengan identitas brand.",
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
        "Mendampingi manager dalam mengelola produksi konten, menjembatani kebutuhan divisi lain dengan tim media, dan menjaga timeline publikasi.",
    },

    // === SUPERVISOR (4 ORANG) ===
    {
      id: 3,
      name: "Person Name 3",
      position: "Supervisor",
      major: "Teknik Elektro",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description:
        "Mengawasi kualitas visual konten (foto, video, desain) agar sesuai standar estetika dan teknis yang ditetapkan tim.",
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
        "Berfokus pada alur produksi konten, mulai dari perencanaan, eksekusi, hingga publikasi di berbagai platform.",
    },
    {
      id: 5,
      name: "Person Name 5",
      position: "Supervisor",
      major: "Teknik Sipil",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      description:
        "Mengawal konsistensi brand voice dan memastikan setiap caption, copywriting, dan pesan komunikatif tersampaikan dengan jelas.",
    },
    {
      id: 6,
      name: "Person Name 6",
      position: "Supervisor",
      major: "Teknik Kimia",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      description:
        "Memastikan jadwal konten berjalan tepat waktu dan melakukan evaluasi performa konten untuk perbaikan ke depan.",
    },

    // === STAFF: BARIS 3+ (4 PER BARIS) ===
    {
      id: 7,
      name: "Person Name 7",
      position: "Staff",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      description:
        "Membantu produksi konten harian, mulai dari pengambilan gambar, pengeditan dasar, hingga pengelolaan bahan aset media.",
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
        "Mendukung pembuatan desain grafis, poster, dan materi visual lainnya untuk keperluan publikasi.",
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
        "Mengelola dokumentasi kegiatan, memilih foto terbaik, dan memastikan arsip media tersimpan dengan rapi.",
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
        "Membantu penulisan caption, copy sederhana, dan penyesuaian konten dengan karakter tiap platform.",
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
        "Mendukung riset tren media sosial untuk menginspirasi format konten baru yang relevan.",
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
        "Membantu pembuatan layout feed, story, dan konten carousel agar tampilan media sosial tetap rapi dan menarik.",
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
        "Mendukung pengarsipan konten setelah di-publish dan menjaga struktur file tetap mudah diakses.",
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
        "Membantu koordinasi kebutuhan media untuk event kolaborasi dengan divisi lain.",
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
        "Mendukung pekerjaan ad-hoc lain yang berkaitan dengan dokumentasi dan publikasi kegiatan.",
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
        "Membantu menjaga konsistensi gaya konten media lintas platform dan format.",
    },
  ];

  const rolesDescription = [
    {
      id: "manager",
      role: "Manager Media",
      highlight:
        "Penentu arah kreatif dan penanggung jawab utama identitas visual organisasi.",
      detail:
        "Mengatur strategi komunikasi visual, mengelola prioritas produksi konten, dan memastikan setiap output media mencerminkan nilai dan citra organisasi dengan baik.",
    },
    {
      id: "vice-manager",
      role: "Vice Manager",
      highlight:
        "Penghubung antara kebutuhan divisi dengan eksekusi tim media.",
      detail:
        "Membantu manager dalam menyusun timeline konten, mengkoordinasikan kebutuhan materi dari berbagai pihak, serta mengawal proses produksi dari awal hingga publikasi.",
    },
    {
      id: "supervisor",
      role: "Supervisor Media",
      highlight:
        "Mengawal kualitas teknis dan kreatif konten di setiap kanal media.",
      detail:
        "Memastikan standar visual, audio, dan copywriting terpenuhi; memberikan feedback perbaikan; serta mengevaluasi performa konten agar terus berkembang.",
    },
    {
      id: "staff",
      role: "Staff Media",
      highlight:
        "Tim pelaksana yang menghidupkan identitas media dalam bentuk konten nyata.",
      detail:
        "Melaksanakan produksi konten harian, mulai dari dokumentasi, pengeditan, desain, hingga pengarsipan, serta membantu kebutuhan media lain sesuai arahan atasan.",
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

  const renderMediaCard = (person, extraClass = "") => {
    const isFlipped = flippedIds.includes(person.id);

    return (
      <div
        key={person.id}
        className={`media-card ${isFlipped ? "is-flipped" : ""} media-card-${
          person.id
        } ${extraClass}`}
        onClick={() => toggleFlip(person.id)}
      >
        <div className="media-card-inner">
          {/* FRONT */}
          <div className="media-card-face media-card-front">
            <div className="media-image-wrapper">
              <img
                src={person.image}
                alt={person.name}
                className="media-image"
              />
            </div>
            <div className="media-info">
              <h3 className="media-name">{person.name}</h3>
              <div className="media-badge">{person.position}</div>
              <p className="media-major">{person.major}</p>
              <p className="media-year">
                {person.major} {person.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="media-card-face media-card-back">
            <div className="media-back-content">
              <p className="media-back-label">Deskripsi</p>
              <h3 className="media-back-name">{person.name}</h3>
              <p className="media-back-position">{person.position}</p>
              <p className="media-back-desc">{person.description}</p>
              <p className="media-back-footer">
                {person.major} • {person.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="media-container">
      {/* Hero Section */}
      <div
        className="media-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="media-hero-overlay">
          <h1 className="media-hero-title">MEDIA</h1>
          <p className="media-hero-subtitle">
            Tim media memastikan setiap momen terdokumentasi dan tersampaikan
            dengan visual yang kuat dan pesan yang tepat.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="media-tabs-wrapper">
        <div className="media-tabs-inner">
          <div className="media-tabs">
            <button
              className={`media-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`media-tab-btn ${
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
      <div className={`media-tab-content media-tab-content-${activeTab}`}>
        {activeTab === "anggota" ? (
          <div className="media-content">
            {/* Baris 1: Manager & Vice Manager */}
            <div className="media-leaders-row">
              {managers.map((p) => renderMediaCard(p, "media-card-leader"))}
            </div>

            {/* Baris 2: 4 Supervisor */}
            <div className="media-supervisors-row">
              {supervisors.map((p) => renderMediaCard(p))}
            </div>

            {/* Baris 3+: Staff */}
            <div className="media-staff-grid">
              {staff.map((p) => renderMediaCard(p))}
            </div>
          </div>
        ) : (
          <div className="media-content">
            <div className="media-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`media-desc-row media-desc-row-${index + 1}`}
                >
                  <div className="media-desc-role-col">
                    <h3 className="media-desc-role-title">{role.role}</h3>
                    <p className="media-desc-highlight">{role.highlight}</p>
                  </div>
                  <div className="media-desc-text-col">
                    <p className="media-desc-text">{role.detail}</p>
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

export default Media;
