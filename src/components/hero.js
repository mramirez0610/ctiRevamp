import { useState, useEffect } from "react";
import Image from "next/image";

import Climb_Time_Indy_Logo from "../assets/Climb_Time_Indy_Logo_Old.jpg";
import climber_on_Maple from "../assets/climber_on_Maple.jpg";
import Cave_Climbing_Image from "../assets/Cave_Climbing_Image.jpg";
import Shoe_Rack from "../assets/Shoe_Rack.jpg";

const images = [
  { src: Climb_Time_Indy_Logo, name: "Climb Time Indy Logo" },
  { src: climber_on_Maple, name: "climber_on_Maple" },
  { src: Cave_Climbing_Image, name: "Cave Climbing Image" },
  { src: Shoe_Rack, name: "Shoe Rack" },
];

const interval = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: index === currentIndex ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 1s ease-in-out",
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <Image
            src={image.src}
            alt={`${image.name}`}
            height={120}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
