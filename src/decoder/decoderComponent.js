import React from "react";
import Inp from "../inp";

function DecoderComponent({ onChange, value, valueDecoder }) {
  return (
    <div className="decoder">
      <Inp
        onChange={onChange}
        className="src-dec inp"
        placeholder="Введите текс для расшифровки"
        value={value}
      />
      <Inp
        className="res-dec inp"
        placeholder="Расшифрованное"
        value={valueDecoder}
      />
      />
    </div>
  );
}
export default DecoderComponent;
