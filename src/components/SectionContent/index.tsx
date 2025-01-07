import { useEffect, useState, ReactNode } from "react";
import "./SectionContent.css";

type Props = { contentJsonUrl: string };

type JsonContent = {
  data: { type: string; content: string }[];
};

function index({ contentJsonUrl }: Props) {
  let [currentJson, setCurrentJson] = useState<JsonContent | null>(null);

  useEffect(() => {
    fetch(contentJsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal Error!");
        }
        return response.json();
      })
      .then((data) => {
        setCurrentJson(data);
        return data;
      })
      .catch((error) => {
        console.log("Error!", error);
      });
  }, []);

  let finalContent: ReactNode[] = [];
  currentJson?.data.forEach((element) => {
    switch (element.type) {
      case "text":
        finalContent.push(
          <p className="inria-sans-light" key={element.content}>
            {element.content}
          </p>
        );
        break;
      case "image-url":
        finalContent.push(
          <img
            key={element.content}
            src={`/react-portf/${element.content}`}
          ></img>
        );
        break;
      case "subtitle":
        finalContent.push(
          <h2
            className="inria-sans-bold section-subtitle"
            key={element.content}
          >
            {element.content}
          </h2>
        );
        break;

      case "description":
        finalContent.push(
          <h3
            className="inria-sans-bold section-description"
            key={element.content}
          >
            {element.content}
          </h3>
        );
        break;
    }
  });

  return (
    <section className="section-content">
      <div className="internal-content">{finalContent}</div>
    </section>
  );
}

export default index;
