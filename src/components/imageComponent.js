import Image from "next/image";

export default function ImageComponent(props) {
  return (
    <div>
      <Image
        src={props.photo}
        alt={props.alt}
        width="fill"
        height="fill"
        layout="responsive"
      />
    </div>
  );
}
