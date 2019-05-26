import React from "react";

const Grid = ({ children, rows = 1 }) => (
  <div
    style={{
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gridTemplateColumns: `repeat(${children.length / rows}, 1fr)`
    }}
    class="grid"
  >
    {children.map(child => (
      <div class="column">{child}</div>
    ))}
  </div>
);

export default Grid;
