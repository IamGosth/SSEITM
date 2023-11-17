
function agregarInputEmail() {
    var container = document.getElementById('card9');
    var nuevoInput = document.createElement('div');
    nuevoInput.classList.add('email-input');
    nuevoInput.innerHTML = `
        <input type="email" name="email" required placeholder="Ej. Dianapeh3@gmali.com" style="margin: 5px;" >
    `;
    container.appendChild(nuevoInput);
}
function agregarInputTel(){
  var container = document.getElementById('card10');
  var nuevoInput = document.createElement('div');
  nuevoInput.classList.add('tel-input');
  nuevoInput.innerHTML= `
        <input type="text" required placeholder="Ej. 9211102566" style="margin: 5px;" >
    `;
    container.appendChild(nuevoInput);
}