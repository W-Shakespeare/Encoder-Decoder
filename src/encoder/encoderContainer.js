import React from "react";
import EncoderComponent from "./encoderComponent";
import symbols from "./symbols";

function encoder() {
  let srcEncoder = document.getElementById("source-enc");
  let srcEncoderValue = srcEncoder.value;
  let srcArrEncoderValue = srcEncoderValue.split("");
  let resultEncoderValue = srcArrEncoderValue.reduce((acc, next) => {
    acc.push(cesarEncoder(next));
    return acc;
  }, []);
  let resultInputEncoder = document.getElementById("result-enc");
  resultInputEncoder.value = resultEncoderValue.join("");
  function cesarEncoder(next) {
    let newPosition;
    symbols.forEach((item, i) => {
      if (item == next) {
        newPosition = symbols[i - 1];
      }
      if ("а" == next) {
        newPosition = " ";
      }
    });
    return newPosition;
  }
}

function EncoderContainer(props) {
  return <EncoderComponent encoder={encoder} />;
}
export default EncoderContainer;
