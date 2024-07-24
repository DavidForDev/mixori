import React from "react";

const OpacityDivs = ({ color, className = "" }) => {
  const opacities = [1, 0.84, 0.68, 0.52, 0.36, 0.2];

  if (!color) return <></>;

  return (
    <div className={`${className} w-full grid grid-cols-6`}>
      {opacities.map((opacity, index) => (
        <div
          key={index}
          className="h-4"
          style={{
            flex: 1,
            backgroundColor: color,
            opacity: opacity,
          }}
        />
      ))}
    </div>
  );
};

export default OpacityDivs;
