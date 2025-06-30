document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const adminDashboard = document.getElementById('admin-dashboard');
    const loginForm = document.getElementById('login-form');
    const addItemForm = document.getElementById('add-edit-item-form');
    const logoutButton = document.getElementById('logout-button');
    const loginMessage = document.getElementById('login-message');
    const addItemMessage = document.getElementById('add-item-message');
    const adminUsernameSpan = document.getElementById('admin-username');
    const currentItemsList = document.getElementById('current-items-list');
    const pageSelect = document.getElementById('page-select');
    const formTitle = document.getElementById('form-title');
    const itemIdToEditInput = document.getElementById('item-id-to-edit');
    const itemTitleInput = document.getElementById('item-title');
    const itemDescriptionInput = document.getElementById('item-description');
    const submitItemButton = document.getElementById('submit-item-button');
    const cancelEditButton = document.getElementById('cancel-edit-button');

    const VALID_USERNAME = 'admin';
    const VALID_PASSWORD = 'admin';

    let currentPage = pageSelect.value;

    // Funções para gerenciar o localStorage
    function getSiteContent() {
        return JSON.parse(localStorage.getItem('siteContent')) || {};
    }

    function saveSiteContent(content) {
        localStorage.setItem('siteContent', JSON.stringify(content));
    }

    function showScreen(screenToShow) {
        if (screenToShow === 'login') {
            loginScreen.classList.add('active');
            loginScreen.classList.remove('hidden');
            adminDashboard.classList.add('hidden');
            adminDashboard.classList.remove('active');
        } else if (screenToShow === 'dashboard') {
            loginScreen.classList.add('hidden');
            loginScreen.classList.remove('active');
            adminDashboard.classList.add('active');
            adminDashboard.classList.remove('hidden');
        }
    }

    function checkLoginStatus() {
        const loggedIn = localStorage.getItem('loggedInAdmin') === 'true';
        const username = localStorage.getItem('adminUsername');
        if (loggedIn && username) {
            adminUsernameSpan.textContent = username;
            showScreen('dashboard');
            renderCurrentItems();
        } else {
            showScreen('login');
        }
    }

    // Função para resetar o formulário para o modo de adição
    function resetFormForAdd() {
        formTitle.textContent = 'Adicionar Novo Item';
        itemIdToEditInput.value = ''; // Limpa o ID do item em edição
        itemTitleInput.value = '';
        itemDescriptionInput.value = '';
        submitItemButton.textContent = 'Adicionar Item';
        cancelEditButton.classList.add('hidden'); // Esconde o botão de cancelar
        addItemMessage.textContent = ''; // Limpa a mensagem
        addItemMessage.classList.remove('success', 'error');
    }

    // Lida com o envio do formulário de login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;
        //Verifica se usuario e senha estão corretos
        if (usernameInput === VALID_USERNAME && passwordInput === VALID_PASSWORD) {
            localStorage.setItem('loggedInAdmin', 'true');
            localStorage.setItem('adminUsername', usernameInput);
            adminUsernameSpan.textContent = usernameInput;
            showScreen('dashboard');
            resetFormForAdd(); // Garante que o formulário esteja no modo de adição ao logar
            renderCurrentItems();
            loginMessage.textContent = '';
        } else {
            loginMessage.textContent = 'Usuário ou senha inválidos.';
            loginMessage.classList.add('error');
            loginMessage.classList.remove('success');
        }
    });

    // Lida com a mudança no dropdown de seleção de página
    pageSelect.addEventListener('change', () => {
        currentPage = pageSelect.value;
        resetFormForAdd(); 
        renderCurrentItems();
    });

    // Lida com o envio do formulário adicionando ou editando
    addItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idToEdit = itemIdToEditInput.value;
        const title = itemTitleInput.value;
        const description = itemDescriptionInput.value;

        if (!title || !description) {
            addItemMessage.textContent = 'Por favor, preencha todos os campos.';
            addItemMessage.classList.add('error');
            addItemMessage.classList.remove('success');
            return;
        }

        let siteContent = getSiteContent();
        if (!siteContent[currentPage]) {
            siteContent[currentPage] = [];
        }
        let itemsForCurrentPage = siteContent[currentPage];

        if (idToEdit) {
            // Modo de Edição
            const itemIdNum = parseInt(idToEdit);
            const itemIndex = itemsForCurrentPage.findIndex(item => item.id === itemIdNum);

            if (itemIndex > -1) {
                itemsForCurrentPage[itemIndex].titulo = title;
                itemsForCurrentPage[itemIndex].descricao = description;
                saveSiteContent(siteContent);
                addItemMessage.textContent = 'Item atualizado com sucesso!';
                addItemMessage.classList.add('success');
                addItemMessage.classList.remove('error');
            } else {
                addItemMessage.textContent = 'Erro: Item para edição não encontrado.';
                addItemMessage.classList.add('error');
                addItemMessage.classList.remove('success');
            }
        } else {
            // Modo de Adição
            const newItem = {
                id: Date.now(), // ID único para o novo item
                titulo: title,
                descricao: description
            };
            itemsForCurrentPage.push(newItem);
            saveSiteContent(siteContent);
            addItemMessage.textContent = 'Item adicionado com sucesso!';
            addItemMessage.classList.add('success');
            addItemMessage.classList.remove('error');
        }

        renderCurrentItems(); // Atualiza a lista na dashboard
        resetFormForAdd(); // Volta o formulário para o modo de adição
        setTimeout(() => { addItemMessage.textContent = ''; }, 3000);
    });

    // Lida com o clique no botão "Cancelar Edição"
    cancelEditButton.addEventListener('click', () => {
        resetFormForAdd();
    });

    // Função para renderizar os itens atuais da PÁGINA SELECIONADA na dashboard
    function renderCurrentItems() {
        currentItemsList.innerHTML = '';
        let siteContent = getSiteContent();
        let itensDaPagina = siteContent[currentPage] || [];

        if (itensDaPagina.length === 0) {
            const noItemsLi = document.createElement('li');
            noItemsLi.textContent = 'Nenhum item adicionado para esta página ainda.';
            currentItemsList.appendChild(noItemsLi);
            return;
        }

        itensDaPagina.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span><strong>${item.titulo}:</strong> ${item.descricao}</span>
                <div>
                    <button class="edit-button" data-id="${item.id}">Editar</button>
                    <button class="remove-button" data-id="${item.id}">Remover</button>
                </div>
            `;
            currentItemsList.appendChild(listItem);
        });

        // Adicionar listeners para os botões de editar
        currentItemsList.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemIdToEdit = parseInt(e.target.dataset.id);
                let siteContent = getSiteContent();
                let itemsForCurrentPage = siteContent[currentPage] || [];
                const itemToEdit = itemsForCurrentPage.find(item => item.id === itemIdToEdit);

                if (itemToEdit) {
                    formTitle.textContent = 'Editar Item';
                    itemIdToEditInput.value = itemToEdit.id;
                    itemTitleInput.value = itemToEdit.titulo;
                    itemDescriptionInput.value = itemToEdit.descricao;
                    submitItemButton.textContent = 'Salvar Edição';
                    cancelEditButton.classList.remove('hidden'); // Mostra o botão de cancelar
                    addItemMessage.textContent = ''; // Limpa qualquer mensagem anterior
                    addItemMessage.classList.remove('success', 'error');
                }
            });
        });

        // Adicionar listeners para os botões de remover (já existente, apenas garantir a classe)
        currentItemsList.querySelectorAll('.remove-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemIdToRemove = parseInt(e.target.dataset.id);
                let siteContent = getSiteContent();
                siteContent[currentPage] = siteContent[currentPage].filter(item => item.id !== itemIdToRemove);
                saveSiteContent(siteContent);
                renderCurrentItems();
                resetFormForAdd(); // Reseta o formulário caso estivesse em modo de edição
            });
        });
    }

    // Lida com o botão de logout
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInAdmin');
        localStorage.removeItem('adminUsername');
        showScreen('login');
        loginForm.reset();
        loginMessage.textContent = '';
        addItemMessage.textContent = '';
        pageSelect.value = 'paginaInicial';
        currentPage = 'paginaInicial';
        resetFormForAdd(); // Garante o reset do formulário ao deslogar
    });

    // Inicializa a tela correta ao carregar a página
    checkLoginStatus();
});