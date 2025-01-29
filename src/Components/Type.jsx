import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect" translate="no">
      <Typewriter
        options={{
          strings: ["Ingeniero en desarrollo de software", "Desarrollador frontend", "Apasionado por la tecnología"],
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
