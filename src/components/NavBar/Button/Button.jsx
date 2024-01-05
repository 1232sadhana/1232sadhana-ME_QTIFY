import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import "./Button.css";

const Button = ({ text }) => {
  return (
    <button className='navButton'>{text}</button>
  );
};

// Prop type validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
  // You can add other prop types if needed
};

export default Button;
