// accreditation.jsx
import React, { useState } from "react";
import "./Acreditation.css";
import Footer from "../Footer/footer";

// background hero
import backgroundImage from "../../assets/fotobg.png";

const Director = () => {
  const [flippedIds, setFlippedIds] = useState([]);
  const [activeTab, setActiveTab] = useState("anggota"); // "anggota" | "deskripsi"

  const directors = [
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
        "Memimpin keseluruhan tim akreditasi, memastikan setiap standar terpenuhi dan proses berjalan sesuai timeline yang telah disepakati.",
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
        "Mendampingi manager dalam koordinasi, mengawasi progres setiap divisi, dan menjadi penghubung utama antar sub-tim.",
    },

    // === BARIS 2: 4 SUPERVISOR ===
    {
      id: 3,
      name: "Person Name 3",
      position: "Supervisor",
      major: "Teknik Elektro",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description:
        "Mengawasi pemenuhan standar di bidang kurikulum, proses belajar mengajar, dan capaian pembelajaran.",
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
        "Mengkoordinasi pemenuhan data terkait sumber daya manusia, dosen, dan tenaga kependidikan.",
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
        "Bertanggung jawab terhadap eviden sarana prasarana, fasilitas laboratorium, dan lingkungan belajar.",
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
        "Mengelola pengumpulan data terkait penelitian, pengabdian, dan publikasi ilmiah.",
    },

    // === STAFF (10 ORANG, BARIS 3+ , GRID 4 KOLOM) ===
    {
      id: 7,
      name: "Person Name 7",
      position: "Staff",
      major: "Teknik Industri",
      year: "20XX",
      image:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=400&fit=crop",
      description:
        "Membantu pengolahan data dan penyusunan tabel pendukung borang akreditasi.",
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
        "Mendokumentasikan kegiatan dan membantu penataan layout dokumen dan lampiran.",
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
        "Mengumpulkan data terkait kinerja lulusan dan tracer study.",
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
        "Membantu pengecekan konsistensi data antara borang dan lampiran.",
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
        "Mengelola rekap jadwal dan notulensi rapat-rapat internal tim akreditasi.",
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
        "Membantu penyusunan bahan presentasi dan visualisasi data akreditasi.",
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
        "Mengarsipkan file digital dan memastikan backup dokumen telah aman.",
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
        "Mendukung proses validasi data dengan unit-unit terkait di lapangan.",
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
        "Membantu pengumpulan eviden fisik dan dokumentasi foto pendukung.",
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
        "Memberikan dukungan teknis umum selama proses penyusunan borang dan visitasi.",
    },
  ];

  const rolesDescription = [
    {
      id: "manager",
      role: "Manager Tim Akreditasi",
      highlight:
        "Penanggung jawab utama arah kerja dan kualitas hasil akreditasi.",
      detail:
        "Mengambil keputusan strategis, memetakan pembagian tugas, memvalidasi hasil akhir laporan, serta menjadi representasi tim akreditasi di hadapan pimpinan dan asesor.",
    },
    {
      id: "assistant-manager",
      role: "Assistant Manager",
      highlight:
        "Menerjemahkan strategi menjadi eksekusi harian dan memastikan ritme kerja tim tetap terjaga.",
      detail:
        "Mengawal progres setiap sub-tim, memfasilitasi koordinasi lintas divisi, dan membantu menyelesaikan hambatan teknis maupun komunikasi yang muncul di lapangan.",
    },
    {
      id: "supervisor",
      role: "Supervisor Akreditasi",
      highlight:
        "Pengawas teknis standar tertentu yang menjadi fokus penilaian akreditasi.",
      detail:
        "Berkoordinasi dengan unit terkait, mengawal kelengkapan eviden pada masing-masing standar, dan memastikan bahwa data yang disajikan relevan dan mutakhir.",
    },
    {
      id: "staff",
      role: "Staff Akreditasi",
      highlight:
        "Garda operasional yang memastikan setiap detail teknis akreditasi dapat terselesaikan.",
      detail:
        "Mendukung pekerjaan administratif dan teknis seperti pengumpulan data, pengarsipan, penyiapan lampiran, dan dokumentasi, sehingga proses akreditasi berjalan lancar.",
    },
  ];

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // === GROUPING SESUAI REQUEST ===
  const managers = directors.filter((d) =>
    ["Manager", "Assistant Manager"].includes(d.position)
  );
  const supervisors = directors.filter((d) => d.position === "Supervisor");
  const staff = directors.filter((d) => d.position === "Staff");

  const renderAccreditationCard = (person, extraClass = "") => {
    const isFlipped = flippedIds.includes(person.id);

    return (
      <div
        key={person.id}
        className={`accreditation-card ${
          isFlipped ? "is-flipped" : ""
        } accreditation-card-${person.id} ${extraClass}`}
        onClick={() => toggleFlip(person.id)}
      >
        <div className="accreditation-card-inner">
          {/* FRONT */}
          <div className="accreditation-card-face accreditation-card-front">
            <div className="accreditation-image-wrapper">
              <img
                src={person.image}
                alt={person.name}
                className="accreditation-image"
              />
            </div>
            <div className="accreditation-info">
              <h3 className="accreditation-name">{person.name}</h3>
              <div className="accreditation-badge">{person.position}</div>
              <p className="accreditation-major">{person.major}</p>
              <p className="accreditation-year">
                {person.major} {person.year}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div className="accreditation-card-face accreditation-card-back">
            <div className="accreditation-back-content">
              <p className="accreditation-back-label">Deskripsi</p>
              <h3 className="accreditation-back-name">{person.name}</h3>
              <p className="accreditation-back-position">{person.position}</p>
              <p className="accreditation-back-desc">{person.description}</p>
              <p className="accreditation-back-footer">
                {person.major} • {person.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="accreditation-container">
      {/* Hero Section */}
      <div
        className="accreditation-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="accreditation-hero-overlay">
          <h1 className="accreditation-hero-title">ACCREDITATION</h1>
          <p className="accreditation-hero-subtitle">
            Struktur tim akreditasi yang rapi membantu proses penilaian berjalan
            lebih efektif dan transparan.
          </p>
        </div>
      </div>

      {/* Tabs Anggota / Deskripsi */}
      <div className="accreditation-tabs-wrapper">
        <div className="accreditation-tabs-inner">
          <div className="accreditation-tabs">
            <button
              className={`accreditation-tab-btn ${
                activeTab === "anggota" ? "active" : ""
              }`}
              onClick={() => setActiveTab("anggota")}
            >
              Anggota
            </button>
            <button
              className={`accreditation-tab-btn ${
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
      <div
        className={`accreditation-tab-content accreditation-tab-content-${activeTab}`}
      >
        {activeTab === "anggota" ? (
          <div className="accreditation-content">
            {/* BARIS 1: MANAGER & ASSISTANT MANAGER */}
            <div className="accreditation-leaders-row">
              {managers.map((p) =>
                renderAccreditationCard(p, "accreditation-card-leader")
              )}
            </div>

            {/* BARIS 2: 4 SUPERVISOR */}
            <div className="accreditation-supervisors-row">
              {supervisors.map((p) => renderAccreditationCard(p))}
            </div>

            {/* BARIS 3+: STAFF, 4 PER BARIS */}
            <div className="accreditation-staff-grid">
              {staff.map((p) => renderAccreditationCard(p))}
            </div>
          </div>
        ) : (
          <div className="accreditation-content">
            <div className="accreditation-description">
              {rolesDescription.map((role, index) => (
                <div
                  key={role.id}
                  className={`accreditation-desc-row accreditation-desc-row-${
                    index + 1
                  }`}
                >
                  <div className="accreditation-desc-role-col">
                    <h3 className="accreditation-desc-role-title">
                      {role.role}
                    </h3>
                    <p className="accreditation-desc-highlight">
                      {role.highlight}
                    </p>
                  </div>
                  <div className="accreditation-desc-text-col">
                    <p className="accreditation-desc-text">{role.detail}</p>
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
