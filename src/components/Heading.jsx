const Heading = ({ btitle, gtitle }) => {
  return (
    <div className="section-title">
      <h2>
        {btitle} <span>{gtitle}</span>
      </h2>
    </div>
  );
};
export default Heading;
