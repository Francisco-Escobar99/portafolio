import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect" translate="no">
      <Typewriter
        options={{
          strings: ["Desarrollador frontend", "Desarrollo web", "Desarrollo Movil"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;
