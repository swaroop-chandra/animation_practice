import React from "react";

function ButtonComponent({
  name,
  color,
  text_color,
  text_size,
  width,
  height,
}) {
  return (
    <button
      className={`rounded-none ${color} ${text_color} ${text_size} ${width} ${height}`}
    >
      {name}
    </button>
  );
}

export default ButtonComponent;
