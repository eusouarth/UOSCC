document.addEventListener("DOMContentLoaded", () => {
    const sidebarHTML = `
        <aside>
            <div>
                <div class="sidebar-brand">
                    Painel de Impacto
                    <span>UOSCC · REDCAM</span>
                </div>
                <ul class="sidebar-menu">
                    <li class="sidebar-section-title">Visão Geral</li>
                    <li><a href="dashboard.html" id="menu-dashboard">Painel geral</a></li>
                    
                    <li class="sidebar-section-title">Gestão</li>
                    <li><a href="financeiro.html" id="menu-financeiro">Recursos</a></li>
                    <li><a href="metas.html" id="menu-metas">Indicadores</a></li>
                    <li><a href="evidencias.html" id="menu-evidencias">Evidências</a></li>
                    <li><a href="projetos.html" id="menu-projetos">Projetos</a></li>
                    <li><a href="apoiadores.html" id="menu-apoiadores">Apoiadores</a></li>
                    
                    <li class="sidebar-section-title">Prestação de Contas</li>
                    <li><a href="relatorios.html" id="menu-relatorios">Relatórios</a></li>
                    <li><a href="publico.html" id="menu-publico">Página pública</a></li>
                </ul>
            </div>
        </aside>
    `;

    const topbarHTML = `
        <header class="topbar">
            <span>Sistema de Transparência e Prestação de Contas</span>
            <button class="btn" onclick="logout()" style="padding: 6px 12px; font-size: 0.85rem; background-color: #6C757D;">Sair</button>
        </header>
    `;

    if (!document.querySelector('aside')) {
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    }

    const mainContainer = document.querySelector('.main-container');
    if (mainContainer && !document.querySelector('header.topbar')) {
        mainContainer.insertAdjacentHTML('afterbegin', topbarHTML);
    }

    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

async function logout() {
    if (typeof apiRequest === 'function') {
        await apiRequest('auth.php?action=logout', 'POST');
    }
    window.location.href = 'login.html';
}