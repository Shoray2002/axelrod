let values = {
  placeholder:
    "def strategy(opponent_source: str) -> str:\n" +
    "    # a very simple strategy - defect if we have the slightest suspicion that the opponent will defect, cooperate otherwise\n" +
    "    return 'defect' if 'defect' in opponent_source else 'cooperate'\n" +
    "\n" +
    "\n" +
    "# you can remove this driver code as long as you make sure that you read the opponent's code from stdin, and write your decision to stdout\n" +
    "def driver():\n" +
    "    import sys\n" +
    "    opponent_source = ''.join(l for l in sys.stdin)\n" +
    "    print(strategy(opponent_source))\n" +
    "\n" +
    "\n" +
    "driver()",
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
