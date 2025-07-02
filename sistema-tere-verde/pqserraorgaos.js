document.addEventListener('DOMContentLoaded', () => {
    const todasAsTrilhasContainer = document.getElementById('todas-as-trilhas-container');
    const pageKey = 'pqserraorgaos'; 

    // Itens que aparecem fixos mais podem ser editaveis
    const defaultItems = [
        {
            id: 101,
            titulo: "Travessia Petrópolis–Teresópolis",
            descricao: "Nível: Difícil | Duração: 2 a 3 dias\nUma das trilhas de montanha mais famosas do Brasil. São cerca de 30 km ligando os municípios de Petrópolis e Teresópolis, com paisagens de tirar o fôlego, como o Castelos do Açu, Pedra do Sino e os impressionantes vales e cumes da serra. Ideal para praticantes experientes de trekking."
        },
        {
            id: 102,
            titulo: "Trilha da Pedra do Sino",
            descricao: "Nível: Moderado a difícil | Duração: 6 a 10 horas (ida e volta)\nPrincipal atração da parte de Teresópolis, é o ponto mais alto da serra (2.275 m). Do cume, é possível ter uma vista panorâmica espetacular da Baía de Guanabara, do Dedo de Deus e, em dias claros, até da cidade do Rio de Janeiro. A trilha é bem marcada e possui abrigo para pernoite."
        },
        {
            id: 103,
            titulo: "Trilha do Dedo de Deus",
            descricao: "Nível: Muito difícil | Duração: 8 a 12 horas\nÍcone do montanhismo brasileiro. Essa trilha é técnica e exige escalada (uso de equipamentos adequados e experiência). O visual lá de cima é um prêmio exclusivo para os mais preparados. Só é recomendada para montanhistas experientes, acompanhados por guias especializados."
        },
        {
            id: 104,
            titulo: "Trilha do Morro do Açu",
            descricao: "Nível: Difícil | Duração: 6 a 8 horas (ida)\nInício da travessia Petrópolis–Teresópolis, essa trilha leva ao cume do Morro do Açu (2.232 m), onde há abrigos para pernoite. O percurso é puxado, mas a vista do alto compensa o esforço, com visual para formações como o Dedo de Deus e os Três Picos."
        },
        {
            id: 105,
            titulo: "Trilha Cartão Postal",
            descricao: "Nível: Leve | Duração: 1h30 a 2h (ida e volta)\nIdeal para iniciantes, essa trilha curta oferece uma vista frontal do Dedo de Deus, um dos cartões-postais do parque. Ótima opção para quem deseja curtir a natureza sem grandes esforços físicos."
        },
        {
            id: 106,
            titulo: "Trilha Suspensa",
            descricao: "Nível: Fácil | Duração: 30 minutos\nTrilha plana, acessível e com passarelas de madeira, ideal para famílias com crianças e pessoas com mobilidade reduzida. Possui sinalização interpretativa da fauna e flora local, sendo um passeio educativo e relaxante."
        },
        {
            id: 107,
            titulo: "Trilha do Vale da Boa Esperança",
            descricao: "Nível: Moderado | Duração: 2 a 3 horas\nLeva a belas piscinas naturais e cachoeiras, sendo perfeita para um banho refrescante em meio à mata. É uma trilha com leve subida e ótimos pontos para descanso."
        },
        {
            id: 108,
            titulo: "Trilha da Barragem",
            descricao: "Nível: Leve | Duração: 1 hora (ida e volta)\nTrilha curta que leva até a antiga barragem da região. Caminho arborizado, ótimo para observação de aves e relaxamento."
        }
    ];

    
    function getSiteContent() {
        return JSON.parse(localStorage.getItem('siteContent')) || {};
    }

    // Função para salvar o conteúdo completo do site no localStorage
    function saveSiteContent(content) {
        localStorage.setItem('siteContent', JSON.stringify(content));
    }

    // Função para inicializar os itens padrão no localStorage se eles não existirem
    function initializeDefaultItems() {
        let siteContent = getSiteContent();
        if (!siteContent[pageKey] || siteContent[pageKey].length === 0) {
            // Se a página não tiver itens ou estiver vazia, adiciona os itens padrão
            siteContent[pageKey] = defaultItems;
            saveSiteContent(siteContent);
        }
    }

    // Função para renderizar todos os itens na página
    function renderizarItens() {
        const siteContent = getSiteContent();
        const itens = siteContent[pageKey] || [];

        // Limpa o container para renderizar os itens atualizados
        todasAsTrilhasContainer.innerHTML = '';

        if (itens.length === 0) {
            const noItemsMessage = document.createElement('p');
            noItemsMessage.textContent = 'Nenhuma trilha adicionada para esta página ainda.';
            todasAsTrilhasContainer.appendChild(noItemsMessage);
            return;
        }

        itens.forEach(item => {
            const itemArticle = document.createElement('article'); // para manter a estrutura
            itemArticle.classList.add('psemimagem-container'); // Mantem com o mesmo estilo das outras

            const itemTitle = document.createElement('h3');
            itemTitle.textContent = item.titulo;

            const itemDescription = document.createElement('p');
            // Usar innerHTML para quebras de linha '\n' funcionem como <br>
            itemDescription.innerHTML = item.descricao.replace(/\n/g, '<br>'); 

            itemArticle.appendChild(itemTitle);
            itemArticle.appendChild(itemDescription);
            todasAsTrilhasContainer.appendChild(itemArticle);
        });
    }

    // Inicializa os itens padrão pela primeira vez
    initializeDefaultItems();
    // Renderiza renderiza todos os itens fixos ou adicionados
    renderizarItens();

    // Ouve por mudanças no localStorage (útil quando o admin.html modifica)
    window.addEventListener('storage', (e) => {
        if (e.key === 'siteContent') {
            renderizarItens();
        }
    });
});