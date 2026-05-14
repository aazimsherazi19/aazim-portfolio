import React from "react";

const Marquee = ({
  items = [
    "Wireframe ✦",
    "User Research ✦",
    "Web Design ✦",
    "App Design ✦",
    "Dashboard ✦",
  ],
  speed = 18, // seconds (control speed)
  reverse = false,
  className = "",
}) => {
  return (
    <div
      className={`marquee-wrapper bg-[var(--color-accent)] py-4 ${className}`}
    >
      <div
        className={`marquee ${reverse ? "marquee-reverse" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* First set */}
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}

        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;