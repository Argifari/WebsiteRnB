import React, { useEffect, useMemo, useState } from "react";
import "./lomba.css";
import Footer from "../Footer/footer";
import backgroundImage from "../../assets/fotobg.png";

const Lomba = () => {
  const API_BASE_URL = import.meta.env.VITE_API_URL || "";
  const ENDPOINT = `${API_BASE_URL}/contents`;

  const [items, setItems] = useState([]); // hanya item bertype "lomba"
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSearchSubmit = (e) => e.preventDefault();

  const formatPublishedAt = (isoString) => {
    if (!isoString) return "-";
    try {
      const d = new Date(isoString);
      return d.toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  // sementara render konten plain text (pre-wrap). Nanti bisa upgrade ke markdown renderer.
  const renderContent = (text) => {
    return <pre className="modal-content-pre">{text || ""}</pre>;
  };

  // helper: cek type lomba (case-insensitive + trim)
  const isLomba = (item) => {
    const t = String(item?.type ?? "")
      .toLowerCase()
      .trim();
    return t === "lomba";
  };

  // Fetch data dari API (dan simpan hanya yang type = lomba)
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setErrorMsg("");

      try {
        const res = await fetch(ENDPOINT, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status} - ${res.statusText}`);
        }

        const data = await res.json();

        // Pastikan format array
        if (!Array.isArray(data)) {
          throw new Error(
            "Response API tidak berbentuk array. Pastikan endpoint mengembalikan list."
          );
        }

        // Ambil hanya item type = "lomba"
        const onlyLomba = data.filter(isLomba);

        // sort terbaru dulu berdasarkan publishedAt
        const sorted = [...onlyLomba].sort((a, b) => {
          const ta = new Date(a.publishedAt || 0).getTime();
          const tb = new Date(b.publishedAt || 0).getTime();
          return tb - ta;
        });

        // Kalau modal kebuka tapi itemnya hilang / bukan lomba, tutup modal
        setSelectedItem((prev) => {
          if (!prev) return prev;
          const stillExists = sorted.some(
            (x) => (x.id ?? x.slug) === (prev.id ?? prev.slug)
          );
          return stillExists ? prev : null;
        });

        setItems(sorted);
      } catch (err) {
        if (err.name !== "AbortError") {
          setErrorMsg(err.message || "Gagal mengambil data dari API.");
        }
      } finally {
        setLoading(false);
      }
    };

    // Kalau API_BASE_URL kosong, kasih error yang jelas
    if (!API_BASE_URL) {
      setErrorMsg(
        "API URL belum di-set. Buat file .env dan isi VITE_API_URL (contoh: http://localhost:3000), lalu restart npm run dev."
      );
      return () => controller.abort();
    }

    fetchData();
    return () => controller.abort();
  }, [API_BASE_URL, ENDPOINT]);

  // Filter berdasarkan title/slug/description/content (type sudah pasti lomba)
  const filteredItems = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return items;

    return items.filter((item) => {
      const haystack = `${item.title || ""} ${item.slug || ""} ${
        item.description || ""
      } ${item.content || ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [items, searchTerm]);

  // ESC untuk close + lock scroll body saat modal buka
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };

    if (selectedItem) {
      document.addEventListener("keydown", onKeyDown);
      document.body.classList.add("modal-open");
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [selectedItem]);

  const openModal = (item) => {
    // Extra guard: modal hanya untuk lomba
    if (!isLomba(item)) return;
    setSelectedItem(item);
  };

  const closeModal = () => setSelectedItem(null);

  return (
    <div className="lomba-page">
      {/* HERO */}
      <div
        className="lomba-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="lomba-hero-overlay">
          <p className="lomba-hero-kicker">Peluang Kompetisi</p>
          <h1 className="lomba-hero-title">LOMBA</h1>
          <p className="lomba-hero-subtitle">
            Jelajahi berbagai kompetisi, karya tulis, dan lomba inovasi yang
            dapat mendukung prestasi akademik maupun pengembangan diri.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="lomba-main">
        <section className="lomba-content">
          {/* Search */}
          <form
            className="search-container"
            onSubmit={handleSearchSubmit}
            role="search"
          >
            <input
              type="text"
              placeholder="Cari berdasarkan judul, slug, deskripsi..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button" type="submit" aria-label="Cari">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
            </button>
          </form>

          {/* STATUS: Loading / Error */}
          {loading && (
            <div className="status-box">
              <div className="status-title">Memuat data...</div>
              <div className="status-subtitle">
                Mengambil lomba dari API:{" "}
                <span className="mono">{ENDPOINT}</span>
              </div>
            </div>
          )}

          {errorMsg && !loading && (
            <div className="status-box status-error">
              <div className="status-title">Gagal mengambil data</div>
              <div className="status-subtitle">{errorMsg}</div>
              <div className="status-subtitle">
                Cek:
                <ul className="status-list">
                  <li>Server backend berjalan</li>
                  <li>.env sudah ada dan VITE_API_URL benar</li>
                  <li>
                    Endpoint tersedia: <span className="mono">{ENDPOINT}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* GRID */}
          <div className="lomba-grid">
            {!loading && !errorMsg && filteredItems.length > 0
              ? filteredItems.map((item) => (
                  <article
                    key={item.id ?? `lomba-${item.slug}`}
                    className="lomba-card lomba-card-clickable"
                    role="button"
                    tabIndex={0}
                    onClick={() => openModal(item)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") openModal(item);
                    }}
                    aria-label={`Buka lomba: ${item.title}`}
                  >
                    <div className="lomba-card-image-wrapper">
                      <img
                        src={
                          item.image ||
                          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900&h=600&fit=crop"
                        }
                        alt={item.title || "Lomba"}
                        className="lomba-card-image"
                        loading="lazy"
                      />
                    </div>

                    <div className="lomba-card-body">
                      <span className="lomba-tag">lomba</span>
                      <h3 className="lomba-card-title">{item.title || "-"}</h3>
                      <p className="lomba-card-date">
                        {formatPublishedAt(item.publishedAt)}
                      </p>
                    </div>
                  </article>
                ))
              : null}

            {!loading && !errorMsg && filteredItems.length === 0 ? (
              <div className="lomba-empty-state">
                Tidak ada lomba untuk ditampilkan
                {searchTerm ? (
                  <>
                    {" "}
                    (kata kunci: <strong>"{searchTerm}"</strong>)
                  </>
                ) : null}
                .
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <Footer />

      {/* MODAL */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div
            className="modal-shell"
            role="dialog"
            aria-modal="true"
            aria-label="Detail lomba"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-badges">
                <span className="modal-badge">lomba</span>
                <span className="modal-meta">
                  Published: {formatPublishedAt(selectedItem.publishedAt)}
                </span>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={closeModal}
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>

            <div className="modal-hero">
              <img
                src={
                  selectedItem.image ||
                  "https://images.unsplash.com/photo-1517840933442-d2d1a05edb75?w=900&h=600&fit=crop"
                }
                alt={selectedItem.title || "Lomba"}
                className="modal-hero-img"
              />
              <div className="modal-hero-overlay" />
              <div className="modal-hero-text">
                <h2 className="modal-title">{selectedItem.title}</h2>
                <p className="modal-desc">{selectedItem.description}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-row">
                <span className="modal-label">Slug</span>
                <span className="modal-value">{selectedItem.slug || "-"}</span>
              </div>

              <div className="modal-divider" />

              <div className="modal-content">
                <h3 className="modal-section-title">Konten</h3>
                {renderContent(selectedItem.content)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lomba;
