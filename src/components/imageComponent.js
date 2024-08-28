import Image from "next/image";

export default function ImageComponent(props) {
  console.log(props);
  return (
    <div>
      <Image
        src={props.photo}
        alt={props.alt}
        width={100}
        height={100}
        layout="responsive"
      />
    </div>
  );
}
