import Image from "next/image";
import background from "../../public/images/barberia.jpg";

export default function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <Image src={background} alt="Sillones clásicos en el interior de una barbería" fill preload sizes="100vw" className="hero-image" />
    <div className="hero-shade" />
    <div className="container hero-content">
      <p className="eyebrow"><span className="short-line" /> EL OFICIO DE VERTE BIEN</p>
      <h1 id="hero-title">Un buen corte.<br />Una <em>actitud.</em></h1>
      <p className="hero-description">Barbería clásica, estilo propio. Cortes, barbas y detalles que hacen la diferencia.</p>
      <div className="hero-actions"><a className="button" href="#contact">Encontrá tu próximo look <span aria-hidden="true">↗</span></a><a className="text-link" href="#gallery">Explorá el catálogo <span aria-hidden="true">→</span></a></div>
    </div>
    <div className="container hero-bottom"><span>PRECISIÓN. ESTILO. CARÁCTER.</span><a href="#services">DESCUBRÍ BLACKSTONE <span aria-hidden="true">↓</span></a></div>
    <span className="hero-side" aria-hidden="true">THE BLACKSTONE EXPERIENCE</span>
  </section>;
}
