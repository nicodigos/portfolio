import "./ImageDescription.css";

type Props = {
  image: string;
  title: string;
  description: string;
  reversed?: boolean;
};

function ImageDescription({ image, title, description, reversed }: Props) {
  return (
    <section className={`description ${reversed ? "reversed" : ""}`}>
      <img className="image-svg" src={image} alt="Eye image" />
      <div className="text-area inria-sans-light">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default ImageDescription;
