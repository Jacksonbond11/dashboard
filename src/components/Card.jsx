import React from "react";

const Card = ({ img, title, link }) => {
  return (
    <a href={link} style={{ textDecoration: "none" }}>
      <div
        style={{
          
          borderRadius: "5px",
          padding: "10px",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#424242")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        <img src={img} alt={title} style={{ width: "100px" }} />
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default Card;
