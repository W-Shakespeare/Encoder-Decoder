import React from "react";
import DecoderComponent from "./decoderComponent";
import russianAlphabet from "./russianAlphabet";

function decoder() {
  let srcDecoder = document.getElementById("source-dec");
  let srcDecoderValue = srcDecoder.value;
  let srcArrDecoderValue = srcDecoderValue.split("");
  let resultDecoderValue = srcArrDecoderValue.reduce((acc, next) => {
    acc.push(cesarEncoder(next));
    return acc;
  }, []);
  let resultInputDecoder = document.getElementById("result-dec");
  resultInputDecoder.value = resultDecoderValue.join("");
  function cesarEncoder(next) {
    let newPosition;
    russianAlphabet.forEach((item, i) => {
      if (item == next) {
        newPosition = russianAlphabet[i + 1];
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
