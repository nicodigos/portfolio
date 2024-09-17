import "./ButtonsList.css";

type Props = {
  labels: string[];
};

function ButtonsList({ labels }: Props) {
  let buttons_list = [];

  for (let l of labels) {
    buttons_list.push(<li>{l}</li>);
  }
  return <ul>{buttons_list}</ul>;
}

export default ButtonsList;
