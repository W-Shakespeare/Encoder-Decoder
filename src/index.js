import React from "react";
import ReactDOM from "react-dom";
import "./css/css.css";
import "./css/worms.css";
import "./css/cssMedia.css";
import Text from "./text";
import EncoderContainer from "./encoder/encoderContainer";
import DecoderContainer from "./decoder/decoderContainer";
function Page() {
  return (
    <div className="Page">
      <Text />
      <EncoderContainer />
      <DecoderContainer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
