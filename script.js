 const display = document.getElementById("display");

    function press(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = "";
    }

    function calculate() {
  try {
    const result = eval(display.value);
    display.value = parseFloat(result.toFixed(2));
  } catch {
    display.value = "Error";
  }
}