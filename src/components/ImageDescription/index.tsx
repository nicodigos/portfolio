type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

function index({ imageUrl, title, description }: Props) {
  return (
    <div>
      <img src={imageUrl} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default index;
