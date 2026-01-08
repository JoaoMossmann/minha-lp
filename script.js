// Scroll suave para a seção "Sobre"
document.getElementById("btnScroll").addEventListener("click", function () {
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth"
  });
});

// Simulação de envio de formulário
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const message = document.getElementById("formMessage");
  message.textContent = "Mensagem enviada com sucesso!";
  message.style.color = "green";
});
