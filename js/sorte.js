function mostrarSorte() {
    const frases = [
      "Hoje é um ótimo dia para começar algo novo.",
      "A sorte favorece os audaciosos.",
      "Seja grato pelo que tem e a sorte virá.",
      "Algo maravilhoso está prestes a acontecer.",
      "Acredite na sua intuição hoje.",
      "A oportunidade de ouro está mais perto do que você imagina."
    ];
  
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("sorte_de_hoje").textContent = "Sorte de Hoje: " + fraseAleatoria;
  }
  
  // Chama a função automaticamente quando a página carrega
  window.onload = mostrarSorte;
  