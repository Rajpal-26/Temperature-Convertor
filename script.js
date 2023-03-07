const celcius = document.getElementById("cel");
const fahrenheit = document.getElementById("fah");

celcius.addEventListener("input", () => {
  let c = celcius.value;
  let f = c * (9 / 5 + 32);
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  console.log(f);
  fahrenheit.value = f;
});

fahrenheit.addEventListener("input", () => {
  let f = fahrenheit.value;
  let c = ((f - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  celcius.value = c;
});
