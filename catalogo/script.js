function showWelcomeMessage() {
    const nameInput = document.getElementById("name");
    const userName = nameInput.value.trim();
  
    if (userName !== "") {
      // Redireciona para a outra página passando o nome do usuário como parâmetro na URL
      window.location.href = `outra_pagina.html?nome=${encodeURIComponent(userName)}`;
    }
  }
  