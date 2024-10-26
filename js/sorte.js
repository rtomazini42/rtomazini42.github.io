function mostrarSorte() {
    const frases = [
`"O tempo é uma ilusão. A hora do almoço é uma ilusão maior ainda" Douglas Adams`,
`"É um erro acreditar que é possível resolver qualquer problema importante usando batatas." Douglas Adams`, 
`"Quando a gente acha que tem todas as respostas, vem a vida e muda todas as perguntas." Luis Fernando Verissimo `,
`⁠"Você pode se enxugar com uma toalha molhada, mas não pode se molhar com uma toalha seca." Craque Daniel `,
`"Falar é fácil, me mostre o código." Linus Torvalds `,
`"Você já pode remover o pendrive em segurança"`,
`"Quanto mais quieto, mais você ouve."`,
`"Basicamente você assiste TV pra desligar seu cérebro, e usa o computador quando você o quer de volta!" Steve Jobs `,
`"Cultura significa controle sobre a natureza." Johan Huizinga`,
`"Só é teimosia se estiver errado. Se estiver certo é seguir seus princípios."`,
`"tudo dito,nada feito,fito e deito" Paulo Leminski`, 
`"Haja hoje para tanto ontem" Paulo Leminski`,
`"o mar o azul o sábado | liguei pro céu | mas dava sempre ocupado" Paulo Leminski`,
`"Um dia super, uma noite super Uma vida superficial" - Muros e Grades , Engenheiros do Hawaii`

    ];
  
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("sorte_de_hoje").textContent = "Frase de Hoje: " + fraseAleatoria;
  }
  
  // Chama a função automaticamente quando a página carrega
  window.onload = mostrarSorte;
  