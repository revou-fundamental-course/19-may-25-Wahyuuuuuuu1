function convert() {
  const input = document.getElementById("input").value.trim();
  const output = document.getElementById("output");
  const calculation = document.getElementById("calculation");

  const celsius = parseFloat(input);
  if (isNaN(celsius)) {
    output.value = "";
    calculation.textContent = "Masukkan suhu yang valid.";
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  output.value = fahrenheit.toFixed(2);

  calculation.innerHTML = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function reset() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
  document.getElementById("calculation").textContent = "";
}

function reverse() {
  const outputVal = document.getElementById("output").value.trim();
  const celsiusInput = document.getElementById("input");
  const calculation = document.getElementById("calculation");

  const fahrenheit = parseFloat(outputVal);
  if (isNaN(fahrenheit)) {
    calculation.textContent = "Masukkan Fahrenheit yang valid untuk reverse.";
    return;
  }

  const celsius = (fahrenheit - 32) * 5/9;
  celsiusInput.value = celsius.toFixed(2);
  calculation.innerHTML = `(${fahrenheit}°F − 32) × 5/9 = ${celsius.toFixed(2)}°C`;
}