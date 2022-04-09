let values = {
  placeholder: "Your code goes here.",
};

// Updates the preview window and html_values
function updateVal() {
  console.log(codemirror.getValue());
}

function setCode(x) {
  codemirror.setValue(values[x]);
}

// The codeMirror editor object
let codemirror = CodeMirror.fromTextArea(
  document.getElementById("code-block"),
  {
    lineNumbers: true,
    lineWrapping: true,
    mode: "python",
    htmlMode: true,
    theme: "isotope",
    tabSize: 4,
    indentUnit: 4,
  }
);

codemirror.on("change", updateVal);
setCode("placeholder");
