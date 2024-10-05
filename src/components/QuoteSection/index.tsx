import { useEffect, useState } from "react";
import "./QuoteSection.css";
import { FaHeart } from "react-icons/fa";

type Props = {};

function QuoteSection({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = [
    "Multidisciplinarity",
    "Math",
    "Literature",
    "Code",
    "Collaborate",
    "Economics",
    "Write",
    "Create",
    "Design",
    "Learn",
    "Teach",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index or reset if at the end of the array
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [words.length]);

  return (
    <div className="quote-section">
      <h1 className="quote alata-regular ">
        I{" "}
        <FaHeart
          className="heart
        "
        />{" "}
        {words[currentIndex]}
      </h1>
    </div>
  );
}

export default QuoteSection;
