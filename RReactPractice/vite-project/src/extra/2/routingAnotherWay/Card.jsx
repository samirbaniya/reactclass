/* eslint-disable react/prop-types */
import "./Card.css";
function Card({ children, title }) {
  return (
    <div className="custom-card">
      <div className="title">{title}</div>
      {children}
    </div>
  );
}

export default Card;
