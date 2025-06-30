document.addEventListener('DOMContentLoaded', () => {
    const todasAsTrilhasContainer = document.getElementById('todas-as-trilhas-container');
    const pageKey = 'pqmontere'; 

    // Itens que aparecem fixos mais podem ser editaveis
    const defaultItems = [
        {
            id: 101,
            titulo: "Trilha da Pedra da Tartaruga",
            descricao: "Nível: Fácil | Duração: 20 a 30 minutos (ida e volta)\nPercurso curto e acessível, ideal para iniciantes e famílias, conduzindo ao famoso mirante natural com vista panorâmica da Serra dos Órgãos e arredores. No topo, há opções para rapel ou simplesmente apreciar a paisagem. Trilha bem sinalizada e frequentada. "
        },
        {
            id: 102,
            titulo: "Trilha da Pedra do Camelo",
            descricao: "Nível: Moderado | Duração: ~1 hora (ida e volta)\nSubida à robusta formação rochosa conhecida como Pedra do Camelo. A trilha começa junto à da Tartaruga, mas oferece ganho de altitude e terreno levemente mais técnico. Ideal para quem busca vista ainda mais ampla e sensação de desafio leve."
        },
        {
            id: 103,
            titulo: "Trilha Vidocq Casas",
            descricao: "Nível: Fácil | Duração: ~45 minutos (ida e volta)\nHomenagem ao ambientalista Vidocq Casas. Caminho confortável com pontes de madeira — a maior com 42 m — que atravessam vales e oferecem excelente vista da Pedra da Tartaruga. Boa para quem busca contato suave com a natureza."
        },
        {
            id: 104,
            titulo: "Trilha Pedra Alpina",
            descricao: "Nível: Fácil | Duração: ~1 hora (ida e volta)\nCom 1,2 km e cerca de 1.318 m de altitude no cume, essa trilha oferece bela vista das montanhas vizinhas (Pedra da Tartaruga, Camelo e Santana). Percurso leve, bem demarcado, perfeito para uma manhã tranquila em meio à mata atlântica."
        },
        {
            id: 105,
            titulo: "Trilha Pedra do Triunfo",
            descricao: "Nível: Moderado | Duração: ~1h30 (ida e volta)\nMaior desafio entre os trechos urbanos, essa trilha de 2 km (510 m de desnível) conduz ao cume de 1.800 m, com topografia pedregosa e íngreme. Panorama espetacular da Maria Comprida e da cordilheira ao redor. Exige bom preparo e atenção."
        },
        {
            id: 106,
            titulo: "Trilha Mozart Catão",
            descricao: "Nível: Moderado | Duração: cerca de 1 hora (ida e volta)\nLigação entre a Trilha 360 e o Cartão Postal, essa rota presta homenagem a um dos primeiros brasileiros no Everest. Subidas moderadas levam a mirantes com vista da cidade de Teresópolis e da Granja Comary."
        },
        {
            id: 107,
            titulo: "Trilha 360°",
            descricao: "Nível: Moderado | Duração: 3 a 4 horas (2,6 a 4 km de percurso)\nRota panorâmica recém-inaugurada (2016), que contorna o alto da montanha. Inclui o Mirante Borandá com vista de 360° da Serra dos Órgãos e do entorno. Conecta-se às trilhas Cartão Postal e Mozart Catão."
        },
        {
            id: 108,
            titulo: "Trilha Cartão Postal",
            descricao: "Nível: Moderado | Duração: ~2 horas (1,2 km ida e volta)\nMais conhecida do parque, com mirante frontal do Dedo de Deus, parte da Serra dos Órgãos. Caminho bem estruturado em paralelepípedo, excelente para apreciadores de fotografias e vistas impressionantes."
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