import Image from "next/image";
import classic from "../../public/images/corte-clasico.jpg";
import fade from "../../public/images/perfilado.jpg";
import styling from "../../public/images/peinado.jpg";
import InstagramLink from "./InstagramLink";
const looks = [
  { image: classic, name: "Clásico renovado", category: "CORTE A TIJERA", alt: "Corte con tijera y peine sobre un degradado lateral" },
  { image: fade, name: "Precisión en cada línea", category: "FADE & PERFILADO", alt: "Perfilado con navaja y degradado junto a una barba definida" },
  { image: styling, name: "Tu mejor versión", category: "CORTE & PEINADO", alt: "Acabado de un corte con volumen usando secador" },
];
export default function Gallery() {
  return <section id="gallery" className="section gallery" aria-labelledby="gallery-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">03 / CATÁLOGO DE ESTILOS</p><h2 id="gallery-title">Encontrá tu <em>inspiración.</em></h2></div><p>Un look para cada personalidad.<br />¿Cuál va con vos?</p></div>
    <div className="gallery-grid">{looks.map((look, index) => <a className="look-card" key={look.name} href="#contact" aria-label={`Consultar por ${look.name}`}><div className="look-photo"><Image src={look.image} alt={look.alt} fill sizes="(max-width: 760px) 90vw, 30vw" /><span className="look-number">0{index + 1}</span><span className="look-arrow" aria-hidden="true">↗</span></div><p className="eyebrow">{look.category}</p><h3>{look.name}</h3></a>)}</div>
    <div className="instagram-strip"><div><span className="eyebrow">EL ESTILO SIGUE AFUERA</span><p>Más cortes. Más detalles. Más Blackstone.</p></div><InstagramLink /></div>
  </div></section>;
}
