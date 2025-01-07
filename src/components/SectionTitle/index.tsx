import "./SectionTitle.css";

type Props = {
  text: string;
};

function SectionTitle({ text }: Props) {
  return (
    <div className="section-title">
      <div className="internal-title">
        <h1 className="inria-sans-bold section-title-content">{text}</h1>
      </div>
    </div>
  );
}

export default SectionTitle;
