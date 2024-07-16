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

export default function Home() {
  return (
    <section>
      <h1>Welcome to Climb Time Indy</h1>
      <div className="flex flex-wrap justify-space-between">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`${image.name}`}
            height={120}
          />
        ))}
      </div>
      <p>
        Climb Time Indy is the best climbing gym in Indianapolis. We offer a
        variety of climbing walls, fitness classes, and gear for sale. Fun for
        all ages and abilities!
      </p>
    </section>
  );
}
