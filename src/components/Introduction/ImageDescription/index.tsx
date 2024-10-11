import { useState } from "react";
import FloatingCard from "../../FloatingCard";
import "./ImageDescription.css";

type Props = {
  image: string;
  title: string;
  description: string;
};

function ImageDescription({ image, title, description }: Props) {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleClick = () => {
    setIsCardVisible(true);
  };
  return (
    <>
      <section className={`description`} onClick={handleClick}>
        <img className="image-svg" src={image} alt="Eye image" />
        <h2 className="image-title inria-sans-regular">{title}</h2>
      </section>
      <FloatingCard
        title={title}
        visible={isCardVisible}
        description={description}
        controlVisible={setIsCardVisible}
      ></FloatingCard>
    </>
  );
}

export default ImageDescription;
