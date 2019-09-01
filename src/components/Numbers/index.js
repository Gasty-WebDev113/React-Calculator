import React from "react";
import { Number } from "./styles";

export const Numbers = ({ number, onClick }) => {
  function CaptureNumber() {
    console.log("funcionando");
  }

  console.log(number);
  return <Number onClick={() => console.log(number)}>{number}</Number>;
};
