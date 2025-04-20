
window.addEventListener("DOMContentLoaded", function () {
  const msgDiv = document.getElementById("mensagem-bemvindo");
  const hora = new Date().getHours();
  let saudacao = "";

  if (hora < 12) {
    saudacao = "Bom dia ☀️";
  } else if (hora < 18) {
    saudacao = "Boa tarde ☕";
  } else {
    saudacao = "Boa noite 🌙";
  }

  if (msgDiv) {
    msgDiv.innerText = `${saudacao}, seja bem-vindo ao Coffee Shops Tia Rosa!`;
  }
});
