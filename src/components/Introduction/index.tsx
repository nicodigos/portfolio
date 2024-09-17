import { ReactNode } from "react";
import "./Introduction.css";

type Props = {
  children: ReactNode[];
};

function Introduction({ children }: Props) {
  return (
    <div className="introduction">
      {children[0]}
      {children[1]}
      {children[2]}
    </div>
  );
}

export default Introduction;
