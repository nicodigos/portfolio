import { ReactNode } from "react";
import "./Introduction.css";

type Props = {
  children: ReactNode[];
};

function Introduction({ children }: Props) {
  return <div className="introduction">{children[0]}</div>;
}

export default Introduction;
