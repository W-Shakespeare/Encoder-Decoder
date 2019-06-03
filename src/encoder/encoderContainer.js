import React from "react";
import EncoderComponent from "./encoderComponent";
function encoder() {
  var enc = document.getElementById("source-enc");
  enc.addEventListener("keyup", allEncod);

  function allEncod() {
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
        resultEnc.value += arr[i];

        //Output += arr[i];
      }
    }

    function Encoder(mas) {
      for (var i = 0; i < Russian_alphabet.length; i++) {
        if (mas == Russian_alphabet[0]) {
          var ya = ".";
          mas2.push(ya);
          break;
        } else if (mas == Russian_alphabet[i]) {
          mas2.push(Russian_alphabet[i - 1]);
          break;
        } else if (mas == " ") {
          var _ = " ";
          mas2.push(_);
          break;
        }
      }
    }

    var Output = "";
    var resultEnc = document.getElementById("result-enc");
    resultEnc.value = Output;
    var mas2 = [];
    var k1 = enc.value;
    var mas = [];
    var k2;
    for (var i = 0; i < k1.length; i++) {
      k2 = k1[i];
      mas.push(k2);
      Encoder(mas[i]);
    }

    sum_mas2(mas2);

    console.log(mas);
    console.log(mas2);
  }
}
function EncoderContainer(props) {
  return <EncoderComponent encoder={encoder} />;
}
export default EncoderContainer;
