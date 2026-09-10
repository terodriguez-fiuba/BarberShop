import Image from "next/image";
import styling from "../../public/images/peinado.jpg";
export default function About() {
  return <section id="about" className="section about" aria-labelledby="about-title"><div className="container about-grid">
    <div className="about-photo"><Image src={styling} alt="Barbero dando el acabado final a un peinado" fill sizes="(max-width: 760px) 90vw, 45vw" /><span className="photo-label">EL ESTILO ESTÁ EN LOS DETALLES.</span></div>
    <div className="about-copy"><p className="eyebrow">02 / LA EXPERIENCIA</p><h2 id="about-title">Más que un corte.<br />Un momento <em>para vos.</em></h2><p>Sentarte, desconectar y dejarte en buenas manos. En Blackstone combinamos el oficio de la barbería tradicional con una mirada actual.</p><p>Escuchamos lo que buscás, cuidamos cada terminación y encontramos ese estilo que se siente tuyo.</p><div className="about-values"><span>01 <strong>Atención personal</strong></span><span>02 <strong>Pasión por el oficio</strong></span><span>03 <strong>Estilo sin apuro</strong></span></div><a href="#gallery" className="text-link">Conocé nuestro trabajo <span aria-hidden="true">↗</span></a></div>
  </div></section>;
}
