import { serviceItem } from "../data";
import Heading from "./Heading";

const Service = ({ icon, title, content }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{content}</p>
      </div>
    </article>
  );
};

const Services = () => {
  return (
    <section className="section services" id="services">
      <Heading btitle="our" gtitle="services" />

      <div className="section-center services-center">
        {serviceItem.map((item) => (
          <Service {...item} />
        ))}
      </div>
    </section>
  );
};
export default Services;
