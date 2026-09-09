const services = [
  {
    name: "Classic Haircut",
    price: "$30",
  },
  {
    name: "Beard Trim",
    price: "$20",
  },
  {
    name: "Haircut + Beard",
    price: "$45",
  },
  {
    name: "Premium Grooming",
    price: "$60",
  },
];

export default function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>

      {services.map((service) => (
        <div key={service.name}>
          <h3>{service.name}</h3>
          <span>{service.price}</span>
        </div>
      ))}
    </section>
  );
}