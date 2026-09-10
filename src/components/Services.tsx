const services = [
  { name: "Corte clásico", detail: "Tijera, máquina y un acabado pensado para vos.", symbol: "✂" },
  { name: "Diseño de barba", detail: "Forma, contornos y precisión en cada detalle.", symbol: "⌁" },
  { name: "Corte + barba", detail: "Tu estilo completo, en una sola visita.", symbol: "✦" },
  { name: "Ritual Blackstone", detail: "Corte, barba y peinado para renovar tu look.", symbol: "◇" },
];
export default function Services() {
  return <section id="services" className="section services" aria-labelledby="services-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">01 / NUESTROS SERVICIOS</p><h2 id="services-title">El detalle lo es <em>todo.</em></h2></div><p>Elegí tu servicio.<br />Nosotros nos ocupamos del resto.</p></div>
    <div className="services-grid">{services.map((service, index) => <a href="#contact" className="service-card" key={service.name}><div className="service-top"><span className="service-symbol" aria-hidden="true">{service.symbol}</span><span>0{index + 1}</span></div><h3>{service.name}</h3><p>{service.detail}</p><span className="service-cta">Consultar servicio <span aria-hidden="true">↗</span></span></a>)}</div>
  </div></section>;
}
