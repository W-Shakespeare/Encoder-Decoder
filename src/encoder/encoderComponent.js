import React from "react";
import Inp from "../inp";

function EncoderComponent({ onChange, value, valueEncoder }) {
  return (
    <div className="encoder">
      <div className="px" />
      <div className="wor">
        <div className="worm0">
          <div className="worm w1" />
          <div className="worm w2" />
          <div className="worm w3" />
          <div className="worm w4" />
          <div className="worm w5" />
        </div>
      </div>
      <Inp
        className="src-enc inp"
        placeholder="Введите текс для шифровки"
        onChange={onChange}
        value={value}
      />
      <Inp
        id="result-enc"
        className="res-enc inp"
        placeholder="Зашифрованое"
        value={valueEncoder}
      />
    </div>
  );
}
export default EncoderComponent;
