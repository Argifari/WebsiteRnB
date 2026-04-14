// Internal.jsx
import React, { useState } from "react";
import "./Internal.css";
import Footer from "../Footer/footer";
import backgroundImage from "../../assets/fotobg.png";

const Internal = () => {
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
        "Memimpin keseluruhan internal project, mengatur prioritas, dan memastikan setiap inisiatif berjalan sesuai timeline dan standar kualitas tim.",
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
        "Mendampingi manager dalam koordinasi, menjaga ritme kerja tim, dan menjadi penghubung utama antar sub-proyek internal.",
    },

    // === SUPERVISOR (TOTAL 5 ORANG) ===
    {
      id: 3,
      name: "Person Name 3",
      position: "Supervisor",
      major: "Teknik Elektro",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description:
        "Mengawasi aspek teknis implementasi sistem dan memastikan solusi internal berjalan stabil dan terukur.",
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
        "Berfokus pada optimasi workflow, resource, dan efisiensi penggunaan tools dalam internal project.",
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
        "Mengawal dokumentasi dan standardisasi prosedur kerja tim agar mudah direplikasi dan dipelihara.",
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
        "Memastikan kualitas output internal project sesuai dengan kebutuhan dan ekspektasi stakeholder.",
    },
    {
      id: 7,
      name: "Person Name 7",
      position: "Supervisor",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      description:
        "Menganalisis alur kerja, bottleneck, dan memberikan rekomendasi perbaikan berkelanjutan pada internal project.",
    },

    // === STAFF: SISANYA (BARIS 4 DST, GRID 4 PER BARIS) ===
    {
      id: 8,
      name: "Person Name 8",
      position: "Staff",
      major: "Teknik Arsitektur",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      description:
        "Membantu eksekusi task harian dan memastikan deliverable internal terdokumentasi dengan baik.",
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
        "Mengelola data pendukung dan membantu proses verifikasi hasil kerja tim.",
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
        "Menyusun laporan berkala dan rangkuman progres internal project.",
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
        "Mendukung kebutuhan teknis dan administratif saat pelaksanaan kegiatan internal.",
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
        "Membantu proses desain, visualisasi, dan layout dokumen internal.",
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
        "Mendukung pengumpulan data dan survey untuk kebutuhan internal project.",
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
        "Mengarsipkan file digital dan menjaga struktur folder tetap rapi.",
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
        "Mendukung koordinasi antar anggota dan menyiapkan kebutuhan teknis rapat internal.",
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
        "Membantu pekerjaan ad-hoc lain yang dibutuhkan untuk kelancaran internal project.",
    },
  ];

  const rolesDescription = [
    {
      id: "manager",
      role: "Manager Internal Project",
      highlight:
        "Penentu arah strategi dan penanggung jawab utama keberlangsungan internal project.",
      detail:
        "Mengambil keputusan strategis, mengatur prioritas tugas, memonitor progres keseluruhan, serta menjadi representasi utama tim internal di hadapan pimpinan maupun stakeholder lainnya.",
    },
    {
      id: "assistant-manager",
      role: "Assistant Manager",
      highlight:
        "Penggerak eksekusi harian dan penjaga ritme kinerja tim internal.",
      detail:
        "Membantu menerjemahkan strategi ke dalam action plan, memastikan task selesai tepat waktu, mengelola komunikasi lintas anggota, dan menjadi partner diskusi utama bagi Manager.",
    },
    {
      id: "supervisor",
      role: "Supervisor",
      highlight:
        "Pengawas teknis yang mengawal kualitas setiap bagian dari internal project.",
      detail:
        "Bertanggung jawab terhadap standar teknis di masing-masing lingkup kerja, memberikan feedback perbaikan, serta menjembatani kebutuhan teknis antara manajemen dan staff pelaksana.",
    },
    {
      id: "staff",
      role: "Staff Internal",
      highlight:
        "Pelaksana utama di lapangan yang memastikan setiap detail pekerjaan terselesaikan.",
      detail:
        "Membantu pengumpulan data, penyusunan dokumen, eksekusi task harian, dan dukungan administratif maupun teknis lain yang dibutuhkan agar internal project berjalan mulus.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // === GROUPING SESUAI REQUEST ===
  const managers = members.filter((m) =>
    ["Manager", "Assistant Manager"].includes(m.position)
  );
  const supervisors = members.filter((m) => m.position === "Supervisor");
  const staff = members.filter((m) => m.position === "Staff");

  const supervisorsRow1 = supervisors.slice(0, 4); // baris 2
  const supervisorsRow2 = supervisors.slice(4); // baris 3 (1 orang)

  const renderInternalCard = (person, extraClass = "") => {
    const isFlipped = flippedIds.includes(person.id);

    return (
      <div
        key={person.id}
        className={`internal-card ${
          isFlipped ? "is-flipped" : ""
        } internal-card-${person.id} ${extraClass}`}
        onClick={() => toggleFlip(person.id)}
      >
        <div className="internal-card-inner">
          {/* FRONT */}
          <div className="internal-card-face internal-card-front">
            <div className="internal-image-wrapper">
              <img
                src={person.image}
                alt={person.name}
                className="internal-image"
              />
            </div>
            <div className="internal-info">
              <h3 className="internal-name">{person.name}</h3>
              <div className="internal-badge">{person.position}</div>
              <p className="internal-major">{person.major}</p>
              <p className="internal-year">
                {person.major} {person.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="internal-card-face internal-card-back">
            <div className="internal-back-content">
              <p className="internal-back-label">Deskripsi</p>
              <h3 className="internal-back-name">{person.name}</h3>
              <p className="internal-back-position">{person.position}</p>
              <p className="internal-back-desc">{person.description}</p>
              <p className="internal-back-footer">
                {person.major} • {person.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="internal-container">
      {/* Hero Section */}
      <div
        className="internal-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="internal-hero-overlay">
          <h1 className="internal-hero-title">INTERNAL PROJECT</h1>
          <p className="internal-hero-subtitle">
            Tim internal yang terstruktur rapi menjadi fondasi utama untuk
            menjalankan project dan inisiatif berkelanjutan.
          </p>
        </div>
      </div>

      {/* Tabs Anggota / Deskripsi */}
      <div className="internal-tabs-wrapper">
        <div className="internal-tabs-inner">
          <div className="internal-tabs">
            <button
              className={`internal-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`internal-tab-btn ${
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
      <div className={`internal-tab-content internal-tab-content-${activeTab}`}>
        {activeTab === "anggota" ? (
          <div className="internal-content">
            {/* BARIS 1: MANAGER & ASSISTANT MANAGER */}
            <div className="internal-leaders-row">
              {managers.map((p) =>
                renderInternalCard(p, "internal-card-leader")
              )}
            </div>

            {/* BARIS 2: 4 SUPERVISOR */}
            <div className="internal-supervisors-row">
              {supervisorsRow1.map((p) => renderInternalCard(p))}
            </div>

            {/* BARIS 3: 1 SUPERVISOR */}
            {supervisorsRow2.length > 0 && (
              <div className="internal-supervisors-row-single">
                {supervisorsRow2.map((p) => renderInternalCard(p))}
              </div>
            )}

            {/* BARIS 4+: STAFF */}
            <div className="internal-staff-grid">
              {staff.map((p) => renderInternalCard(p))}
            </div>
          </div>
        ) : (
          <div className="internal-content">
            <div className="internal-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`internal-desc-row internal-desc-row-${index + 1}`}
                >
                  <div className="internal-desc-role-col">
                    <h3 className="internal-desc-role-title">{role.role}</h3>
                    <p className="internal-desc-highlight">{role.highlight}</p>
                  </div>
                  <div className="internal-desc-text-col">
                    <p className="internal-desc-text">{role.detail}</p>
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

export default Internal;
