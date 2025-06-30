const pagesData = [
  {
    id: 1,
    title: "Travessia Petrópolis–Teresópolis",
    content: "Nível: Difícil | Duração: 2 a 3 dias\nUma das trilhas de montanha mais famosas do Brasil. São cerca de 30 km ligando os municípios de Petrópolis e Teresópolis, com paisagens de tirar o fôlego, como o Castelos do Açu, Pedra do Sino e os impressionantes vales e cumes da serra. Ideal para praticantes experientes de trekking.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 2,
    title: "Trilha da Pedra do Sino",
    content: "Nível: Moderado a difícil | Duração: 6 a 10 horas (ida e volta)\nPrincipal atração da parte de Teresópolis, é o ponto mais alto da serra (2.275 m). Do cume, é possível ter uma vista panorâmica espetacular da Baía de Guanabara, do Dedo de Deus e, em dias claros, até da cidade do Rio de Janeiro. A trilha é bem marcada e possui abrigo para pernoite.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 3,
    title: "Trilha do Dedo de Deus",
    content: "Nível: Muito difícil | Duração: 8 a 12 horas\nÍcone do montanhismo brasileiro. Essa trilha é técnica e exige escalada (uso de equipamentos adequados e experiência). O visual lá de cima é um prêmio exclusivo para os mais preparados. Só é recomendada para montanhistas experientes, acompanhados por guias especializados.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 4,
    title: "Trilha do Morro do Açu",
    content: "Nível: Difícil | Duração: 6 a 8 horas (ida)\nInício da travessia Petrópolis–Teresópolis, essa trilha leva ao cume do Morro do Açu (2.232 m), onde há abrigos para pernoite. O percurso é puxado, mas a vista do alto compensa o esforço, com visual para formações como o Dedo de Deus e os Três Picos.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 5,
    title: "Trilha Cartão Postal",
    content: "Nível: Leve | Duração: 1h30 a 2h (ida e volta)\nIdeal para iniciantes, essa trilha curta oferece uma vista frontal do Dedo de Deus, um dos cartões-postais do parque. Ótima opção para quem deseja curtir a natureza sem grandes esforços físicos.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 6,
    title: "Trilha Suspensa",
    content: "Nível: Fácil | Duração: 30 minutos\nTrilha plana, acessível e com passarelas de madeira, ideal para famílias com crianças e pessoas com mobilidade reduzida. Possui sinalização interpretativa da fauna e flora local, sendo um passeio educativo e relaxante.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 7,
    title: "Trilha do Vale da Boa Esperança",
    content: "Nível: Moderado | Duração: 2 a 3 horas\nLeva a belas piscinas naturais e cachoeiras, sendo perfeita para um banho refrescante em meio à mata. É uma trilha com leve subida e ótimos pontos para descanso.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 8,
    title: "Trilha da Barragem",
    content: "Nível: Leve | Duração: 1 hora (ida e volta)\nTrilha curta que leva até a antiga barragem da região. Caminho arborizado, ótimo para observação de aves e relaxamento.",
    url: "pqserraorgaos.html#link-trilha1"
  },
  {
    id: 9,
    title: "Poço dos Primatas",
    content: "Nível: Leve | Duração: ~50 minutos (1,2 km)\nFaz parte do 'Circuito das Bromélias'. Sua queda volumosa oferece sensação de massagem natural. Bem arborizado, o sol entra entre meio-dia e 14h — momento ideal para fotos e banho",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 10,
    title: "Cachoeira Véu da Noiva",
    content: "Nível: Moderado | Duração: ~1h30 (3,3 km)\nApós a Gruta do Presidente, surge essa imponente queda de ~32 m. Popular para rapel e escalada, esse espetáculo natural foi apreciado por Dom Pedro. A trilha tem trechos íngremes, mas recompensa com águas revigorantes",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 11,
    title: "Cachoeira das Andorinhas",
    content: "Nível: Moderado a pesado | Duração: ~1h35 (3,4 km)\nA cerca de 10 min do Véu da Noiva, essa queda de 15 m forma um poço profundo entre paredes rochosas — cenário ideal para um banho relaxante e lindos registros fotográficos",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 12,
    title: "Poço Verde (Guapimirim)",
    content: "Nível: Leve | Duração: ~20 a 30 minutos (caminhada)\nLocalizado a 20 min do Centro de Visitantes de Guapimirim, é o principal atrativo do setor. Um conjunto de cachoeiras, corredeiras e águas esmeralda do Rio Soberbo, perfeito para relaxar em um ambiente de Mata Atlântica",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 13,
    title: "Poço da Preguiça (Guapimirim)",
    content: "Nível: Leve | Duração: ~15 minutos\nPoço tranquilo e menos frequentado. Próximo ao Poço Verde, esse refúgio oferece várias quedinhas em um ambiente sereno — excelente para tirar o dia e apreciar a natureza sem aglomeração",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 14,
    title: "Poço da Capela (Guapimirim)",
    content: "Nível: Leve | Duração: ~15 minutos\nSituado ao lado da histórica Capela de Nossa Senhora da Conceição do Soberbo (1713), esse poço de águas calmas é cercado por uma aura de paz e beleza — acesso fácil, ideal para banho e contemplação",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 15,
    title: "Poço do Soberbo (Guapimirim)",
    content: "Nível: Leve | Duração: ~15 minutos\nÉ a maior cachoeira do setor Guapimirim. Uma curta trilha conduz a uma queda com amplo poço para banho, com acesso direto pelo rio Soberbo — ótima opção para quem busca beleza com facilidade de acesso",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 16,
    title: "Cachoeira Jacó (Macumba/Treze)",
    content: "Nível: Leve | Duração: ~15 minutos\nLocalizada na BR–495 (Petrópolis–Teresópolis), é facilmente acessada. Conta com várias quedas, incluindo um salto de ~25 m, e piscinas naturais de águas cristalinas — boa escolha para um banho rápido durante a estrada",
    url: "pqserraorgaos.html#link-cachoeira1"
  },
  {
    id: 17,
    title: "Biodiversidade",
    content: "A Serra dos Órgãos, localizada no estado do Rio de Janeiro, é uma das regiões de maior relevância ecológica do Brasil",
    url: "pqserraorgaos.html#link-bio1"
  }
]


        // Obter referências aos elementos do DOM
        const searchInput = document.getElementById('search-input');
        const searchResultsDiv = document.getElementById('search-results');
        const mainNav = document.getElementById('main-nav');

        // Função para realizar a busca e atualizar os resultados
        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            let resultsHtml = '';

            if (searchTerm.length > 2) {
                const filteredResults = pagesData.filter(page =>
                    page.title.toLowerCase().includes(searchTerm)// ||
                    //page.content.toLowerCase().includes(searchTerm)
                );

                if (filteredResults.length > 0) {
                    resultsHtml = '<ul>';
                    filteredResults.forEach(result => {
                        resultsHtml += `
                            <li class="mb-3 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200">
                                <a href="${result.url}" class="block text-green-700 hover:underline text-lg font-semibold">
                                    ${result.title}
                                </a>
                                <p class="text-gray-600 text-sm mt-1 line-clamp-2">${result.content}</p>
                            </li>
                        `;
                    });
                    resultsHtml += '</ul>';
                } else {
                    resultsHtml = `<p class="text-gray-500 text-center">Nenhum resultado encontrado para "${searchTerm}".</p>`;
                }
            }  
            // else {
            //     resultsHtml = `<p class="text-gray-500 text-center">Digite pelo menos 3 caracteres para iniciar a busca.</p>`;
            // }
            searchResultsDiv.innerHTML = resultsHtml;
        }
        searchInput.addEventListener('input', performSearch);

        searchResultsDiv.addEventListener('click', (event) => {
    
    const clickedLink = event.target.closest('a');

    
    if (clickedLink && searchResultsDiv.contains(clickedLink)) {
        searchInput.value = '';
        searchResultsDiv.innerHTML = '';
    }
});