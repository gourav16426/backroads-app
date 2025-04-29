import { toursItem } from "../data";
import Heading from "./Heading";
const Tour = ({ img, date, title, country, amount, totalDays }) => {
  return (
    <article class="tour-card">
      <div class="tour-img-container">
        <img src={img} class="tour-img" alt={title} />
        <p class="tour-date">{date}</p>
      </div>
      <div class="tour-info">
        <div class="tour-title">
          <h4>{title}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div class="tour-footer">
          <p>
            <span>
              <i class="fas fa-map"></i>
            </span>
            {country}
          </p>
          <p>{totalDays} days</p>
          <p>from ${amount}</p>
        </div>
      </div>
    </article>
  );
};
const Tours = () => {
  return (
    <section class="section" id="tours">
      <Heading btitle="featured" gtitle="tours" />

      <div class="section-center featured-center">
        {toursItem.map((item) => (
          <Tour {...item} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
