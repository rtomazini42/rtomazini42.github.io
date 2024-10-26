// Lista de amigos com links, nomes e imagens
const amigos = [
    {
        nome: "Lucas Lattari",
        link: "https://github.com/lucaslattari",
        imagem: "https://avatars.githubusercontent.com/u/14303710?v=4"
    },
    {
        nome: "Peixe Babel",
        link: "https://www.youtube.com/channel/UCqB90BBr6eNRaJl-kl30Xxw",
        imagem: "https://avatars.githubusercontent.com/u/22198915?v=4"
    },
    {
        nome: "Programação Dinâmica",
        link: "https://pgdinamica.com/",
        imagem: "https://yt3.googleusercontent.com/ytc/AIdro_lNaZXEMQi5BwwiSLGg43lJg4DFqKphdxylYeRBUREufg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        nome: "Rozelma França",
        link: "https://www.falecomrozelma.com/",
        imagem: "assets/perfiisRerkut/rozelma.jpeg"
    },

    {
        nome: "Marcos Cardoso",
        link: "https://www.linkedin.com/in/marcospontocardoso/",
        imagem: "https://i1.rgstatic.net/ii/profile.image/331278248366081-1455994297369_Q128/Marcos-Cardoso.jpg"
    },
    {
        nome: "Ulremberg",
        link: "https://github.com/Ulremberg",
        imagem: "https://avatars.githubusercontent.com/u/48075473?v=4"
    },
    {
        nome: "João Victor Superbi",
        link: "https://github.com/joaosuperb1",
        imagem: "https://avatars.githubusercontent.com/u/57453381?v=4"
    },
    {
        nome: "System76",
        link: "https://github.com/system76",
        imagem: "https://avatars.githubusercontent.com/u/2448433?s=200&v=4"
    },
    {
        nome: "Lidy Monteiro",
        link: "https://github.com/lidymonteiro",
        imagem: "https://avatars.githubusercontent.com/u/6483341?v=4"
    },
    {
        nome: "Luiz Antonio",
        link: "https://github.com/lowizdev",
        imagem: "https://avatars.githubusercontent.com/u/29290400?v=4"
    },
    {
        nome: "Leonardo de Oliveira",
        link: "https://www.linkedin.com/in/leonardo-braulio/",
        imagem: "assets/perfiisRerkut/leo.jpeg"
    },
    {
        nome: "Joselito",
        link: "https://joselito.blog.br/",
        imagem: "https://avatars.githubusercontent.com/u/597126?v=4"
    },
    {
        nome: "Pop!_OS",
        link: "https://github.com/pop-os",
        imagem: "https://avatars.githubusercontent.com/u/33131755?s=200&v=4"
    },
    //{
    //    nome: "UFRPE",
     //   link: "https://ufrpe.br/",
    //    imagem: "https://ufrpe.br/sites/ufrpe.br/files/Logo%20UFRPE%20com%20texto_2.png"
    //},
];

// Função para sortear 6 amigos sem repetir
function sortearAmigos(amigos, quantidade) {
    const amigosSorteados = [];
    const amigosCopia = [...amigos]; // Faz uma cópia da lista de amigos

    while (amigosSorteados.length < quantidade && amigosCopia.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigosCopia.length);
        amigosSorteados.push(amigosCopia[indiceAleatorio]);
        amigosCopia.splice(indiceAleatorio, 1); // Remove o amigo sorteado da lista
    }

    return amigosSorteados;
}

// Função para preencher os perfis dinâmicos
function preencherPerfis() {
    const colprofile = document.getElementById('colprofile');
    colprofile.innerHTML = ''; // Limpa o conteúdo anterior
    const amigosSorteados = sortearAmigos(amigos, 9); // Sorteia 6 amigos

    amigosSorteados.forEach(amigo => {
        const perfilDiv = document.createElement('div');
        perfilDiv.className = 'profile';
        perfilDiv.innerHTML = `
            <a href="${amigo.link}">
                <img src="${amigo.imagem}" alt="${amigo.nome}">
            </a>
            <br>
            <a href="${amigo.link}">${amigo.nome}</a>
        `;
        colprofile.appendChild(perfilDiv); // Adiciona o perfil à coluna
    });
}

// Chama a função ao carregar a página
preencherPerfis() 
