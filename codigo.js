const textBox = document.querySelector('#textBox');
console.log(textBox)
const output = document.querySelector("#output");
console.log(output)
textBox.addEventListener(
    "keydown",
    (event) => (output.textContent = `Presionaste "${event.key}".`)
);