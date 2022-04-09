let values = {
  placeholder: "Your python code goes here.",
  empty: "",
};
let submit = document.getElementById("submit");

function setCode(x) {
  codemirror.setValue(values[x]);
}

let codemirror = CodeMirror.fromTextArea(
  document.getElementById("code-block"),
  {
    lineNumbers: true,
    lineWrapping: true,
    mode: "python",
    htmlMode: false,
    theme: "isotope",
    tabSize: 4,
    indentUnit: 4,
  }
);
setCode("placeholder");

submit.addEventListener("click", function () {
  console.log(codemirror.getValue());
  setCode("empty");
});
