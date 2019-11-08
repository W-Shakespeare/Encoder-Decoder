import React, { useState } from "react";
import EncoderComponent from "./encoderComponent";
import symbols from "./symbols";

function encoder(e) {
  let srcEncoderValue = e.target.value;
  console.log(`my text ${srcEncoderValue}`);
  let srcArrEncoderValue = srcEncoderValue.split("");
  let resultEncoderValue = srcArrEncoderValue.reduce((acc, next) => {
    acc.push(cesarEncoder(next));
    return acc;
  }, []);
  return resultEncoderValue.join("");
}
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

function EncoderContainer(props) {
  const [text, setText] = useState("");
  const [textEncoder, setTextEncoder] = useState("");
  return (
    <EncoderComponent
      value={text}
      valueEncoder={textEncoder}
      onChange={e => {
        console.log(9999);
        e.preventDefault();
        setText(e.target.value);
        setTextEncoder(encoder(e));
      }}
    />
  );
}
export default EncoderContainer;
