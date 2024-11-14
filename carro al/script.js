// Função para redirecionar ao WhatsApp com mensagem personalizada
function contatoWhatsApp(pacote) {
    const mensagem = `Olá! Gostaria de saber mais sobre o ${pacote}.`;
    const numeroWhatsApp = "553196113709"; // Substitua pelo seu número no formato internacional
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }
  function mostrarPopup() {
    document.getElementById("promoPopup").style.display = "flex";
  }
  
  function fecharPopup() {
    document.getElementById("promoPopup").style.display = "none";
  }
  
  function contatoWhatsApp(mensagem) {
    window.open(`https://wa.me/553196113709?text=${encodeURIComponent(mensagem)}`, "_blank");
  }
  function toggleMenu() {
    document.querySelector('.menu-lista').classList.toggle('active');
  }
  function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.toggle('show');
  }
  