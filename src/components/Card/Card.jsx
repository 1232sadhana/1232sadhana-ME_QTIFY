import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

/**
 * Represents a card component.
 * Renders a card based on the provided data and type.
 * @param {Object} data - The data object containing information for the card.
 * @param {string} type - The type of the card.
 * @returns {JSX.Element|null} The rendered card component or null if the type is not recognized.
 */
const Card = ({ data, type }) => {
  switch (type) {
    case "normal":
      return (
        <div className="Album_Cont" id={data.id}>
          <div className="Album_card">
            <div className="Album_card_image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="Album_card_text">
              <h3>{data.follows} Follows</h3>
            </div>
          </div>
          <h3 className="Album_title">{data.title}</h3>
        </div>
      );
    default:
      return null;
  }
};

// Prop type validation
Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    follows: PropTypes.number.isRequired,
    // Add other required props here
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;
