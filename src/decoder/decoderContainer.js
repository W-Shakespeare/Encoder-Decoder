import React from "react";
import DecoderComponent from "./decoderComponent";
function decoder() {
  var dec = document.getElementById("source-dec");
  dec.addEventListener("keyup", allDecod);

  function allDecod() {
    var Russian_alphabet = [
      "а",
      "б",
      "в",
      "г",
      "д",
      "е",
      "ё",
      "ж",
      "з",
      "и",
      "й",
      "к",
      "л",
      "м",
      "н",
      "о",
      "п",
      "р",
      "с",
      "т",
      "у",
      "ф",
      "х",
      "ц",
      "ч",
      "ш",
      "щ",
      "ъ",
      "ы",
      "ь",
      "э",
      "ю",
      "я",
      "!",
      "?",
      "."
    ];
    function sum_mas2(arr) {
      for (var i = 0; i < arr.length; i++) {
        resultDec.value += arr[i];
      }
    }
    function Decoder(mas) {
      for (var i = 0; i < Russian_alphabet.length; i++) {
        if (mas == Russian_alphabet[35]) {
          var a = "а";
          mas2.push(a);
          break;
        } else if (mas == Russian_alphabet[i]) {
          mas2.push(Russian_alphabet[i + 1]);
        } else if (mas == " ") {
          var _ = " ";
          mas2.push(_);
          break;
        }
      }
    }
    var Output = "";
    var resultDec = document.getElementById("result-dec");
    resultDec.value = Output;
    var mas2 = [];
    var k1 = dec.value;
    var mas = [];
    var k2;
    for (var i = 0; i < k1.length; i++) {
      k2 = k1[i];
      mas.push(k2);
      Decoder(mas[i]);
    }
    sum_mas2(mas2);
    console.log(mas);
    console.log(mas2);
  }
}

function DecoderContainer(props) {
  return <DecoderComponent decoder={decoder} />;
}
export default DecoderContainer;
