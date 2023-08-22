import { useState } from "react";
import BUTTERCUP from "./assets/buttercup.png";
import BLOSSOM from "./assets/blossom.png";
import BUBBLE from "./assets/bubble.png";

const powerpuffData = [
  {
    name: "BUTTERCUP",
    img: BUTTERCUP,
    color: "bg-green-400",
  },
  {
    name: "BLOSSOM",
    img: BLOSSOM,
    color: "bg-red-400",
  },
  {
    name: "BUBBLE",
    img: BUBBLE,
    color: "bg-blue-400",
  },
];

const App = () => {
  const [initial, setInitial] = useState("w-1/3");
  const [initialTextSize, setInitialTextSize] = useState("text-6xl")
  const [selected, setSelected] = useState(null);
  const [initialImageSize, setInitialImageSize] = useState("w-60")

  const showDetails = (index) => {
    if (selected === index) {
      setSelected(null);
      setInitial("w-1/3");
      setInitialTextSize("text-6xl")
      setInitialImageSize("w-60")
    } else {
      setSelected(index);
      setInitial("w-10");
      setInitialTextSize("text-lg")
      setInitialImageSize("w-10")
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {powerpuffData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center h-screen py-40 px-16 cursor-pointer ${
            item.color
          } transition duration-500 ease-in-out ${
            selected === index ? "w-full" : initial
          }`}
          onClick={() => showDetails(index)}
        >
          <img src={item.img} className={`
          absolute
          ${selected === index ? "w-60" : initialImageSize}
          `} />
          <b
            className={`
          text-white ${initialTextSize} transition duration-500 ease-in-out
          ${selected === index ? "mt-72 text-9xl" : ""}
          `}
          >
            {item.name}
          </b>
        </div>
      ))}
    </div>
  );
};

export default App;
