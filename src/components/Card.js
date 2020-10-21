import React from 'react';

const Card = ({ className, children }) => {
  return (
    <div
      className={`shadow my-12 p-5px flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
