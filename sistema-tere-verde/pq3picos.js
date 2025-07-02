document.addEventListener('DOMContentLoaded', () => {
    const todasAsTrilhasContainer = document.getElementById('todas-as-trilhas-container');
    const pageKey = 'pq3picos'; 

    // Itens que aparecem fixos mas podem ser editaveis
    const defaultItems = [
        {
            id: 101,
            titulo: "Trilha até o Vale dos Deuses",
            descricao: "Nível: Moderado | Duração: ~1 hora (ida)\nInício no Portal do parque (RJ‑130), essa trilha leva ao coração do núcleo três picos, o Vale dos Deuses (±1 700 m), onde há área de camping gratuita. Paisagens de vales profundos entre paredões rochosos fazem deste um excelente ponto de apoio para partir às demais trilhas"
        },
        {
            id: 102,
            titulo: "Travessia Pico Menor e Médio",
            descricao: "Nível: Muito difícil | Duração: ~6 km ida e volta (3 a 5 horas)\nTrajeto que passa pelo Vale do Toledo e exige técnica (corda ou via ferrata). Leva aos cumes do Pico Menor (2 260 m) e Médio (2 280 m). Inclui trechos íngremes, escalaminhadas, uma laje entre os picos e final exposto — só para trilheiros experientes com equipamentos"
        },
        {
            id: 103,
            titulo: "Trilha Cabeça de Dragão",
            descricao: "Nível: Moderado | Duração: ~4 km ida e volta (2 horas)\nComeça no acampamento central do parque. Leva ao cume da formação rochosa de 2 082 m e oferece vista incrível dos Três Picos, Capacete, Vale dos Deuses e Caixa de Fósforo. Ideal para quem deseja uma aventura panorâmica sem escalada pesada"
        },
        {
            id: 104,
            titulo: "Trilha da Caixa de Fósforo",
            descricao: "Nível: Moderado | Duração: ~2 horas ida e volta\nSaindo do Vale dos Deuses, segue por baixadas e córregos até a base de um bloco rochoso destacado, a “Caixa de Fósforo” (~30 m de altura). Após subida curta e íngreme, o mirante oferece vista privilegiada do parque"
        },
        {
            id: 105,
            titulo: "Trilha Mirante do Capacete",
            descricao: "Nível: Moderado | Duração: ~1h30 (ida e volta)\nConecta ao Mirante Rodolfo Chermond, na Montanha do Capacete (≈2 197 m). Curto e com aclives suaves, oferece vista abrangente do Vale dos Três Picos, da Serra da Caledônia e regiões adjacentes"
        },
        {
            id: 106,
            titulo: "Trilha Dois Bicos (Vale das Sebastianas)",
            descricao: "Nível: Fácil a moderado | Duração: ~6 km ida e volta (3 horas)\nPercurso por pasto e mata até duas elevações: Bico Maior (1 507 m) e Menor (1 400 m). Passa por porteiras, cercas, e oferece panorama do Vale das Sebastianas, com linha de crista com vista para formações próximas."
        },
        {
            id: 107,
            titulo: "Trilha Caminho das Centenárias",
            descricao: "Nível: Leve | Duração: ~924 m (50 minutos)\nNova trilha fácil inaugurada em 2024 no Vale da Revolta. Passa por árvores centenárias (jequitibás, jacarandás e figueiras), córregos e mirantes naturais — excelente para iniciantes, contemplação e passeios em família "
        },
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