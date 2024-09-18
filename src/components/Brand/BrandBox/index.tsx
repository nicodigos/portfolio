import "./BrandBox.css";

type Props = {
  imageUrl: string;
  transparency?: boolean;
};

function BrandBox({ imageUrl, transparency }: Props) {
  return (
    <img
      className={`brand-logo  ${transparency ? "transparency" : ""}`}
      src={imageUrl}
      alt={imageUrl}
    />
  );
}

export default BrandBox;
