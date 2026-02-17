import React, { useState } from "react";
import "../DropArea/DropArea.css";

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={showDrop ? "drop-area" : "hide-area"}
      onDragEnter={() => {
        setShowDrop(true);
      }}
      onDragLeave={() => {
        setShowDrop(false);
      }}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Area Here
    </section>
  );
};

export default DropArea;
