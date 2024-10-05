import { ReactNode } from "react";
import "./Introduction.css";

type Props = {
  children: ReactNode[];
};

function Introduction({ children }: Props) {
  return (
    <section className="introduction inria-sans-regular">
      {children[0]}
      {children[1]}
      {children[2]}
    </section>
  );
}

export default Introduction;
