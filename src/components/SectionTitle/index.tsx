import "./SectionTitle.css";

type Props = {
  text: string;
};

function index({ text }: Props) {
  return (
    <div className="section-title">
      <h1 className="inria-sans-bold section-title-content">{text}</h1>
    </div>
  );
}

export default index;
