function mostrarSorte() {
    const frases = [
`"O tempo é uma ilusão. A hora do almoço é uma ilusão maior ainda" Douglas Adams`,
`"Sem matemática, não há nada que você possa fazer. Tudo ao seu redor é matemática. Tudo ao seu redor são números." – Shakuntala Devi`, 
`"Minha musa inspiradora é o meu prazo de entrega." - Luis Fernando Verissimo `,
`"Se eu estivesse novamente começando meus estudos, seguiria o conselho de Platão e começaria com a matemática." – Galileu Galilei `,
`"Falar é fácil, me mostre o código." Linus Torvalds `,
`"Você já pode remover o pendrive em segurança"`,
`"Quanto mais quieto, mais você ouve."`,
`"Basicamente você assiste TV pra desligar seu cérebro, e usa o computador quando você o quer de volta!" Steve Jobs `,
`"Cultura significa controle sobre a natureza." Johan Huizinga`,
`"A 'mágica' de um homem é a engenharia de outro homem." – Robert Heinlein`,
`"Pessoas normais... acreditam que se não está quebrado, não conserta. Engenheiros acreditam que, se não está quebrado, ainda não tem recursos (ou funcionalidades) suficientes." - Scott Adams`, 
`"Haja hoje para tanto ontem" Paulo Leminski`,
`"Todo grande avanço na ciência surgiu a partir de uma nova audácia da imaginação." – John Dewey`,
`"Prefiro sempre o temor do entendimento ao temor da ignorância."  Douglas Adams`,
`"Raramente estou mais feliz do que quando passo um dia inteiro a programar o meu computador para fazer automaticamente uma tarefa que de outra forma demoraria uns bons dez segundos a fazer à mão." - Douglas Adams`,
`"Os computadores são como deuses do Antigo Testamento: muitas regras e nenhuma misericórdia." – Joseph Campbell`,
`"Nada é particularmente difícil se você dividir em pequenas partes." – Henry Ford`,
`"A nova interdependência eletrônica recria o mundo à imagem de uma aldeia global." – Marshall McLuhan`

    ];
  
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("sorte_de_hoje").textContent = "Frase de Hoje: " + fraseAleatoria;
  }
  
  // Chama a função automaticamente quando a página carrega
  window.onload = mostrarSorte;
  