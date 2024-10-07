import "./ImageDescription.css";

type Props = {
  image: string;
  title: string;
  description: string;
  reversed?: boolean;
};

function ImageDescription({ image, title }: Props) {
  return (
    <section className={`description`}>
      <img className="image-svg" src={image} alt="Eye image" />
      <h2 className="image-title inria-sans-regular">{title}</h2>
    </section>
  );
}

export default ImageDescription;
