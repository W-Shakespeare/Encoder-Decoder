import React, { useState } from "react";
import DecoderComponent from "./decoderComponent";
import symbols from "./symbols";

function decoder(e) {
  let srcDecoderValue = e.target.value;
  let srcArrDecoderValue = srcDecoderValue.split("");
  let resultDecoderValue = srcArrDecoderValue.reduce((acc, next) => {
    acc.push(cesarDecoder(next));
    return acc;
  }, []);

  return resultDecoderValue.join("");
}
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

function DecoderContainer(props) {
  const [text, setText] = useState("");
  const [textDecoder, setTextDecoder] = useState("");
  return (
    <DecoderComponent
      value={text}
      valueDecoder={textDecoder}
      onChange={e => {
        e.preventDefault();
        setText(e.target.value);
        setTextDecoder(decoder(e));
      }}
    />
  );
}
export default DecoderContainer;
