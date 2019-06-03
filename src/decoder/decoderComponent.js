import React from "react";

function DecoderComponent(props) {
  return (
    <div className="decoder">
      <input
        onChange={props.decoder}
        id="source-dec"
        className="src-dec inp"
        type="text"
        placeholder="Введите текс для расшифровки"
      />
      <input
        id="result-dec"
        className="res-dec inp"
        type="text"
        placeholder="Расшифрованное"
      />
    </div>
  );
}
export default DecoderComponent;
