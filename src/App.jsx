import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Beranda from "./components/Beranda/beranda";
import Director from "./components/Director/director";
import Administration from "./components/Administration/administration";
import Education from "./components/Education/education";
import Accreditation from "./components/Accreditation/accreditation";
import External from "./components/External/external";
import Internal from "./components/Internal/internal";
import Media from "./components/Media/media";
import Public from "./components/Public/public";
import Artikel from "./components/Artikel/artikel";
import Beasiswa from "./components/Beasiswa/beasiswa";
import Lomba from "./components/Lomba/lomba";
import Press from "./components/Press/press";
import Vimi from "./components/Vimi/vimi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/director" element={<Director />} />
        {/* Tambahkan route lainnya sesuai kebutuhan */}
        <Route path="/visi-misi" element={<Vimi />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/education" element={<Education />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/internal-project" element={<Internal />} />
        <Route path="/external-project" element={<External />} />
        <Route path="/media" element={<Media />} />
        <Route path="/public-relation" element={<Public />} />
        <Route path="/beasiswa" element={<Beasiswa />} />
        <Route path="/lomba" element={<Lomba />} />
        <Route path="/press-release" element={<Press />} />
        <Route path="/artikel" element={<Artikel />} />
      </Routes>
    </div>
  );
}

export default App;
