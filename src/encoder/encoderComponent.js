import React from "react";
function y() {
  console.log(1120);
}

function EncoderComponent(props) {
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
      <input
        onChange={props.encoder}
        id="source-enc"
        className="src-enc inp"
        type="text"
        //value=""
        placeholder="Введите текс для шифровки"
      />
      <input
        id="result-enc"
        className="res-enc inp"
        type="text"
        //value=""
        placeholder="Зашифрованое"
      />
    </div>
  );
}
export default EncoderComponent;
