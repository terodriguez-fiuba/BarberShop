"use client";
import { useState } from "react";
const links = [["Servicios", "services"], ["Nosotros", "about"], ["Catálogo", "gallery"], ["Ubicación", "contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="skip-link" href="#main">Saltar al contenido</a>
    <nav className="container navbar" aria-label="Navegación principal">
      <a href="#home" className="brand" aria-label="Blackstone Barbers, inicio" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">B<span>.</span></span><span>BLACKSTONE<small>BARBERS & GROOMING</small></span></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? "Cerrar ✕" : "Menú ☰"}</button>
      <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>Tu próximo corte <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  </header>;
}
