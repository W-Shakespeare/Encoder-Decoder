import React from "react";
import DecoderComponent from "./decoderComponent";
import symbols from "./symbols";

function decoder() {
  let srcDecoder = document.getElementById("source-dec");
  let srcDecoderValue = srcDecoder.value;
  let srcArrDecoderValue = srcDecoderValue.split("");
  let resultDecoderValue = srcArrDecoderValue.reduce((acc, next) => {
    acc.push(cesarDecoder(next));
    return acc;
  }, []);
  let resultInputDecoder = document.getElementById("result-dec");
  resultInputDecoder.value = resultDecoderValue.join("");
  function cesarDecoder(next) {
    let newPosition;
    symbols.forEach((item, i) => {
      if (item == next) {
        newPosition = symbols[i + 1];
      }
      if (" " == next) {
        newPosition = "а";
      }
    });
    return newPosition;
  }
}
function DecoderContainer(props) {
  return <DecoderComponent decoder={decoder} />;
}
export default DecoderContainer;
