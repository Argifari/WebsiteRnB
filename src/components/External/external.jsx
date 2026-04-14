// external.jsx
import React, { useState } from "react";
import "./External.css";
import Footer from "../Footer/footer";
import backgroundImage from "../../assets/fotobg.png";

const External = () => {
  const [flippedIds, setFlippedIds] = useState([]);
  const [activeTab, setActiveTab] = useState("anggota"); // "anggota" | "deskripsi"

  const members = [
    // === BARIS 1: MANAGER & ASSISTANT MANAGER ===
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet",
      position: "Manager",
      major: "Teknik Lorem ipsum",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description:
        "Memimpin keseluruhan external project, membangun relasi dengan mitra, dan memastikan setiap kolaborasi berjalan sesuai tujuan bersama.",
    },
    {
      id: 2,
      name: "Person Name 2",
      position: "Assistant Manager",
      major: "Teknik Informatika",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description:
        "Mendampingi manager dalam mengelola agenda external, menjaga komunikasi intens dengan partner, dan mengawal follow-up tiap kerja sama.",
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
        "Mengawasi aspek teknis kerja sama luar, memastikan integrasi sistem dan kebutuhan teknis mitra terpenuhi.",
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
        "Berfokus pada kelayakan dan keberlanjutan program external dari sisi operasional dan implementasi di lapangan.",
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
        "Mengawal aspek dokumentasi, kesepakatan kerja sama, dan memastikan seluruh MoU/PKS terdokumentasi rapi.",
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
        "Memastikan setiap program external berdampak nyata serta selaras dengan visi dan nilai organisasi.",
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
        "Membantu koordinasi teknis event eksternal dan memastikan kebutuhan mitra terpenuhi saat pelaksanaan.",
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
        "Mendukung pembuatan materi publikasi dan visual yang digunakan untuk komunikasi dengan pihak eksternal.",
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
        "Mengelola data hasil kerja sama dan melakukan rekap evaluasi setelah program external selesai.",
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
        "Mendukung pengaturan jadwal, notulensi, dan tindak lanjut hasil rapat dengan mitra.",
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
        "Membantu analisis kebutuhan mitra dan menyiapkan opsi program kolaborasi yang relevan.",
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
        "Menyusun layout dokumentasi dan laporan akhir dari rangkaian kerja sama external.",
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
        "Mendukung proses komunikasi dan tindak lanjut ke mitra melalui berbagai kanal informasi.",
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
        "Membantu pengarsipan berkas kerja sama dan menjaga kerapian struktur file eksternal.",
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
        "Menyusun rekap feedback dari mitra sebagai bahan evaluasi program kerja sama berikutnya.",
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
        "Memberikan dukungan teknis dan administratif lain yang diperlukan dalam pelaksanaan external project.",
    },
  ];

  const rolesDescription = [
    {
      id: "manager",
      role: "Manager External Project",
      highlight:
        "Penanggung jawab utama hubungan dan kolaborasi dengan pihak luar.",
      detail:
        "Menginisiasi, merancang, dan mengawasi kerja sama strategis dengan berbagai mitra, memastikan setiap program external selaras dengan visi organisasi dan memberikan manfaat timbal balik.",
    },
    {
      id: "assistant-manager",
      role: "Assistant Manager",
      highlight:
        "Menerjemahkan konsep kolaborasi menjadi eksekusi teknis yang terukur.",
      detail:
        "Mendampingi Manager dalam menyusun timeline, mengatur komunikasi, serta memantau pelaksanaan di level operasional agar kesepakatan dengan mitra berjalan sesuai yang direncanakan.",
    },
    {
      id: "supervisor",
      role: "Supervisor External",
      highlight:
        "Pengawas teknis dan administratif pelaksanaan kerja sama eksternal.",
      detail:
        "Mengawal kualitas pelaksanaan program, menjaga standar komunikasi, dan memberikan umpan balik dari lapangan untuk perbaikan kerja sama selanjutnya.",
    },
    {
      id: "staff",
      role: "Staff External",
      highlight:
        "Pelaksana lapangan yang memastikan detail kolaborasi terlaksana dengan baik.",
      detail:
        "Mendukung persiapan, pelaksanaan, hingga evaluasi kegiatan external, mulai dari pengumpulan data, dokumentasi, hingga pengarsipan dan follow-up ke mitra.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // GROUPING
  const managers = members.filter((m) =>
    ["Manager", "Assistant Manager"].includes(m.position)
  );
  const supervisors = members.filter((m) => m.position === "Supervisor");
  const staff = members.filter((m) => m.position === "Staff");

  const renderExternalCard = (person, extraClass = "") => {
    const isFlipped = flippedIds.includes(person.id);

    return (
      <div
        key={person.id}
        className={`external-card ${
          isFlipped ? "is-flipped" : ""
        } external-card-${person.id} ${extraClass}`}
        onClick={() => toggleFlip(person.id)}
      >
        <div className="external-card-inner">
          {/* FRONT */}
          <div className="external-card-face external-card-front">
            <div className="external-image-wrapper">
              <img
                src={person.image}
                alt={person.name}
                className="external-image"
              />
            </div>
            <div className="external-info">
              <h3 className="external-name">{person.name}</h3>
              <div className="external-badge">{person.position}</div>
              <p className="external-major">{person.major}</p>
              <p className="external-year">
                {person.major} {person.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="external-card-face external-card-back">
            <div className="external-back-content">
              <p className="external-back-label">Deskripsi</p>
              <h3 className="external-back-name">{person.name}</h3>
              <p className="external-back-position">{person.position}</p>
              <p className="external-back-desc">{person.description}</p>
              <p className="external-back-footer">
                {person.major} • {person.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="external-container">
      {/* Hero Section */}
      <div
        className="external-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="external-hero-overlay">
          <h1 className="external-hero-title">EXTERNAL PROJECT</h1>
          <p className="external-hero-subtitle">
            Kolaborasi dengan pihak eksternal dikelola oleh tim yang terstruktur
            agar setiap kerja sama memberikan dampak maksimal.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="external-tabs-wrapper">
        <div className="external-tabs-inner">
          <div className="external-tabs">
            <button
              className={`external-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`external-tab-btn ${
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
      <div className={`external-tab-content external-tab-content-${activeTab}`}>
        {activeTab === "anggota" ? (
          <div className="external-content">
            {/* Baris 1: Manager & Assistant Manager */}
            <div className="external-leaders-row">
              {managers.map((p) =>
                renderExternalCard(p, "external-card-leader")
              )}
            </div>

            {/* Baris 2: 4 Supervisor */}
            <div className="external-supervisors-row">
              {supervisors.map((p) => renderExternalCard(p))}
            </div>

            {/* Baris 3+: Staff */}
            <div className="external-staff-grid">
              {staff.map((p) => renderExternalCard(p))}
            </div>
          </div>
        ) : (
          <div className="external-content">
            <div className="external-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`external-desc-row external-desc-row-${index + 1}`}
                >
                  <div className="external-desc-role-col">
                    <h3 className="external-desc-role-title">{role.role}</h3>
                    <p className="external-desc-highlight">{role.highlight}</p>
                  </div>
                  <div className="external-desc-text-col">
                    <p className="external-desc-text">{role.detail}</p>
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

export default External;
