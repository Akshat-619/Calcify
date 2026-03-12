 const display = document.getElementById("display");

    function press(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = "";
    }

    function calculate() {
      try {
        display.value = eval(display.value).toFixed(2);
      } catch {
        display.value = "Error";
      }
    }