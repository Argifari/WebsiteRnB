import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import { Home, Users, Info, FileText, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isInformasiOpen, setIsInformasiOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeMenu, setActiveMenu] = useState("beranda");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile navbar visibility state
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(true);
  const [lastMobileScrollY, setLastMobileScrollY] = useState(0);

  // Mobile modal states
  const [showProfilModal, setShowProfilModal] = useState(false);
  const [showInformasiModal, setShowInformasiModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll detection for desktop navbar
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsNavbarVisible(true); // Always show navbar at the top
      } else if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false); // Scroll down, hide navbar
      } else {
        setIsNavbarVisible(true); // Scroll up, show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  // Scroll detection for mobile navbar
  useEffect(() => {
    if (!isMobile) return;

    const handleMobileScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsMobileNavbarVisible(true); // Always show navbar at the top
      } else if (currentScrollY > lastMobileScrollY) {
        setIsMobileNavbarVisible(false); // Scroll down, hide navbar
      } else {
        setIsMobileNavbarVisible(true); // Scroll up, show navbar
      }

      setLastMobileScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleMobileScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleMobileScroll);
  }, [lastMobileScrollY, isMobile]);

  const profilMenu = [
    {
      title: "TENTANG RnB UNDIP",
      items: [{ name: "Tentang Kabinet", path: "/visi-misi" }],
    },
    {
      title: "BIDANG KABINET RnB UNDIP",
      items: [
        { name: "Director", path: "/director" },
        { name: "Administration", path: "/administration" },
        { name: "Education", path: "/education" },
        { name: "Accreditation", path: "/accreditation" },
        { name: "Internal Project", path: "/internal-project" },
        { name: "External Project", path: "/external-project" },
        { name: "Media", path: "/media" },
        { name: "Public Relation", path: "/public-relation" },
      ],
    },
  ];

  const informasiMenu = [
    {
      title: "KATEGORI",
      items: [
        { name: "Beasiswa", path: "/beasiswa" },
        { name: "Lomba", path: "/lomba" },
        { name: "Press Release", path: "/press-release" },
      ],
    },
  ];

  // === NEW: sync activeMenu with route ===
  useEffect(() => {
    const path = location.pathname;

    const profilPaths = [
      "/visi-misi",
      "/director",
      "/administration",
      "/education",
      "/accreditation",
      "/internal-project",
      "/external-project",
      "/media",
      "/public-relation",
    ];

    const informasiPaths = ["/beasiswa", "/lomba", "/press-release"];

    if (path === "/WebsiteRnB") {
      setActiveMenu("beranda");
    } else if (profilPaths.includes(path)) {
      setActiveMenu("profil");
    } else if (informasiPaths.includes(path)) {
      setActiveMenu("informasi");
    } else if (path.startsWith("/artikel")) {
      setActiveMenu("artikel");
    } else {
      setActiveMenu("");
    }
  }, [location.pathname]);

  // Navigation based on active menu
  const handleNavigation = (path) => {
    navigate(path);
    setIsProfilOpen(false);
    setIsInformasiOpen(false);
    setShowProfilModal(false);
    setShowInformasiModal(false);
    // Tidak perlu setActiveMenu di sini, sudah di-handle oleh useEffect di atas
  };

  const closeDropdowns = () => {
    setIsProfilOpen(false);
    setIsInformasiOpen(false);
  };

  if (isMobile) {
    return (
      <>
        <nav
          className={`mobile-navbar ${
            isMobileNavbarVisible ? "visible" : "hidden"
          }`}
        >
          <div className="mobile-nav-container">
            <button
              className={`mobile-nav-item ${
                activeMenu === "beranda" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/")}
              title="Beranda"
            >
              <Home size={24} strokeWidth={2.5} />
            </button>
            <button
              className={`mobile-nav-item ${
                activeMenu === "profil" ? "active" : ""
              }`}
              onClick={() => {
                setActiveMenu("profil");
                setShowProfilModal(true);
              }}
              title="Profil"
            >
              <Users size={24} strokeWidth={2.5} />
            </button>
            <button
              className={`mobile-nav-item ${
                activeMenu === "informasi" ? "active" : ""
              }`}
              onClick={() => {
                setActiveMenu("informasi");
                setShowInformasiModal(true);
              }}
              title="Informasi"
            >
              <Info size={24} strokeWidth={2.5} />
            </button>
            <button
              className={`mobile-nav-item ${
                activeMenu === "artikel" ? "active" : ""
              }`}
              onClick={() => handleNavigation("/artikel")}
              title="Artikel"
            >
              <FileText size={24} strokeWidth={2.5} />
            </button>
          </div>
        </nav>

        {/* Modal Profil - Mobile */}
        {showProfilModal && (
          <div
            className="mobile-modal-overlay"
            onClick={() => setShowProfilModal(false)}
          >
            <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-modal-header">
                <h2>Profil</h2>
                <button
                  className="modal-close"
                  onClick={() => setShowProfilModal(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="mobile-modal-content">
                {profilMenu.map((section, idx) => (
                  <div key={idx} className="mobile-menu-section">
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.path);
                            }}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Informasi - Mobile */}
        {showInformasiModal && (
          <div
            className="mobile-modal-overlay"
            onClick={() => setShowInformasiModal(false)}
          >
            <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-modal-header">
                <h2>Informasi</h2>
                <button
                  className="modal-close"
                  onClick={() => setShowInformasiModal(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="mobile-modal-content">
                {informasiMenu.map((section, idx) => (
                  <div key={idx} className="mobile-menu-section">
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.path);
                            }}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <nav className={`desktop-navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
      <div className="nav-pill-container">
        {/* Beranda */}
        <button
          className={`pill-button ${activeMenu === "beranda" ? "active" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          Beranda
        </button>

        {/* Profil Dropdown */}
        <div className="pill-dropdown">
          <button
            className={`pill-button ${activeMenu === "profil" ? "active" : ""}`}
            onClick={() => {
              setIsProfilOpen(!isProfilOpen);
              setIsInformasiOpen(false);
            }}
          >
            Profil <span className="arrow">›</span>
          </button>
          {isProfilOpen && (
            <>
              <div className="dropdown-backdrop" onClick={closeDropdowns} />
              <div className="dropdown-panel profil-panel">
                {profilMenu.map((section, idx) => (
                  <div key={idx} className="dropdown-column">
                    <h3 className="dropdown-heading">{section.title}</h3>
                    <ul className="dropdown-menu-list">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.path);
                            }}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Informasi Dropdown */}
        <div className="pill-dropdown">
          <button
            className={`pill-button ${
              activeMenu === "informasi" ? "active" : ""
            }`}
            onClick={() => {
              setIsInformasiOpen(!isInformasiOpen);
              setIsProfilOpen(false);
            }}
          >
            Informasi <span className="arrow">›</span>
          </button>
          {isInformasiOpen && (
            <>
              <div className="dropdown-backdrop" onClick={closeDropdowns} />
              <div className="dropdown-panel">
                {informasiMenu.map((section, idx) => (
                  <div key={idx} className="dropdown-column">
                    <h3 className="dropdown-heading">{section.title}</h3>
                    <ul className="dropdown-menu-list">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.path);
                            }}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Artikel */}
        <button
          className={`pill-button ${activeMenu === "artikel" ? "active" : ""}`}
          onClick={() => handleNavigation("/artikel")}
        >
          Artikel
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
