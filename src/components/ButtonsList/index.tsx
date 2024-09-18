import { Link } from "react-router-dom";
import "./ButtonsList.css";

type Props = {
  labels: string[][];
  style: string;
  hover_style?: string;
};

function ButtonsList({ labels, style, hover_style }: Props) {
  let buttons_list = [];

  for (let l of labels) {
    buttons_list.push(
      <Link to={l[1]}>
        <li key={`${l}`}>{l[0]}</li>
      </Link>
    );
  }
  return <ul className={`${style} ${hover_style}`}>{buttons_list}</ul>;
}

export default ButtonsList;
