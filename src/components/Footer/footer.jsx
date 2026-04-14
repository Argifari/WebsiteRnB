// Footer.jsx
import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo dan Tagline Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <a href="http://127.0.0.1:8000/login"><img src={logo} alt="RnB Logo" className="footer-logo-img" /></a>
              <div>
                <h3 className="footer-title">
                  Research and Business Universitas Diponegoro
                </h3>
                <p className="footer-tagline">
                  #RightSolutiontobetheBrightNation
                </p>
              </div>
            </div>
          </div>

          {/* Tentang Kami Section */}
          <div className="footer-section">
            <h3 className="footer-heading">TENTANG KAMI</h3>
            <p className="footer-text">
              Website ini dikelola oleh Media RnB Universitas Diponegoro
              <br />
              Tembalang, Semarang City, Central Java, Indonesia
            </p>
            <div className="footer-contact">
              <h4 className="footer-contact-title">KONTAK</h4>
              <p className="footer-text">fst.undip@gmail.com</p>
            </div>
          </div>

          {/* Media Sosial Section */}
          <div className="footer-section">
            <h3 className="footer-heading">MEDIA SOSIAL</h3>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <FaYoutube size={32} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <FaInstagram size={32} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedin size={32} />
              </a>
              <a href="#" className="footer-social-link" aria-label="TikTok">
                <FaTiktok size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p className="footer-copyright-text">
            Copyright © Research and Business Universitas Diponegoro | 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
