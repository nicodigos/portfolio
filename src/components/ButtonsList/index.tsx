import "./ButtonsList.css";

type Props = {
  labels: string[];
  style: string;
};

function ButtonsList({ labels, style }: Props) {
  let buttons_list = [];

  for (let l of labels) {
    buttons_list.push(<li key={`${l}`}>{l}</li>);
  }
  return <ul className={`${style}`}>{buttons_list}</ul>;
}

export default ButtonsList;
