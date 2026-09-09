import Image from "next/image";
import background from "../../public/images/barberia.jpg";
import { shop } from "@/lib/shop";
import InstagramLink from "./InstagramLink";
export default function Contact() {
  const mapsUrl = shop.mapsUrl || (shop.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}` : "");
  return <section id="contact" className="section contact" aria-labelledby="contact-title"><div className="container contact-grid">
    <div><p className="eyebrow">04 / NOS VEMOS EN EL SILLÓN</p><h2 id="contact-title">Tu próximo corte<br />empieza <em>acá.</em></h2><p className="contact-intro">Pasá por Blackstone. Un buen corte y un momento para vos te esperan.</p><dl className="contact-details"><div><dt>DÓNDE ESTAMOS</dt><dd>{shop.address || "Pronto compartiremos nuestra dirección."}</dd></div><div><dt>HORARIOS</dt><dd>{shop.hours || "Horarios de atención por confirmar."}</dd></div></dl><InstagramLink label="Consultá tu turno por Instagram" />{!shop.instagramUrl && <p className="contact-note">Pronto vas a poder consultar disponibilidad por Instagram.</p>}</div>
    <div className="map-card">{shop.mapsEmbedUrl ? <iframe src={shop.mapsEmbedUrl} title="Ubicación de Blackstone Barbers en Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className="map-placeholder"><Image src={background} alt="Interior de la barbería con sillones clásicos" fill sizes="(max-width: 760px) 90vw, 45vw" /><div><span className="location-symbol" aria-hidden="true">⌖</span><h3>Te esperamos en Blackstone</h3><p>{shop.address || "Nuestra ubicación, próximamente."}</p></div></div>}{mapsUrl && <a className="map-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir en Google Maps <span aria-hidden="true">↗</span></a>}</div>
  </div></section>;
}
