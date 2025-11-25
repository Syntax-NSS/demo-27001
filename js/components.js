/**
 * Componentes UI reutilizables
 * Incluye funciones para crear sidebar, header, modales, alerts, etc.
 */

/**
 * Renderiza el sidebar con navegación
 */
function renderSidebar(activePage = '') {
    return `
        <div class="sidebar">
            <div class="logo-container" onclick="navigateTo('index.html')">
                <span class="back-arrow">←</span>
            </div>
            <div class="nav-item ${activePage === 'dashboard' ? 'active' : ''}" onclick="navigateTo('./dashboard.html')" title="Dashboard">
                <span class="nav-icon">🏠</span>
            </div>
            <div class="nav-item ${activePage === 'pac' ? 'active' : ''}" onclick="navigateTo('./pac.html')" title="Plan de Acciones Correctivas">
                <span class="nav-icon">📋</span>
            </div>
            <div class="nav-item ${activePage === 'indicadores' ? 'active' : ''}" onclick="navigateTo('./indicadores.html')" title="Indicadores">
                <span class="nav-icon">📈</span>
            </div>
            <div class="nav-item ${activePage === 'quejas' ? 'active' : ''}" onclick="navigateTo('./quejas.html')" title="Quejas y Reclamaciones">
                <span class="nav-icon">⚠️</span>
            </div>
            <div class="nav-item ${activePage === 'pruebas' ? 'active' : ''}" onclick="navigateTo('./pruebas-continuidad.html')" title="Pruebas de Continuidad">
                <span class="nav-icon">🔄</span>
            </div>
        </div>
    `;
}

/**
 * Renderiza el header con información de usuario
 */
function renderHeader() {
    return `
        <div class="header">
            <div class="header-left"></div>
            <div class="header-right">
                <button class="icon-button" title="Ayuda">
                    <span style="font-size: 20px;">❓</span>
                </button>
                <button class="icon-button" title="Configuración">
                    <span style="font-size: 20px;">⚙️</span>
                </button>
                <button class="icon-button" title="Notificaciones">
                    <span style="font-size: 20px;">📧</span>
                </button>
                <div class="user-profile">
                    <div class="user-avatar">KS</div>
                    <div class="user-info">
                        <div class="user-name">Kepa Syntax</div>
                        <div class="user-email">kepa@syntax.com</div>
                    </div>
                    <span style="color: #cbd5e0; cursor: pointer;">⋮</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderiza el breadcrumb
 */
function renderBreadcrumb(items) {
    const breadcrumbItems = items.map((item, index) => {
        const isActive = index === items.length - 1;
        const clickHandler = item.link && !isActive ? `onclick="navigateTo('${item.link}')"` : '';
        return `
            ${index > 0 ? '<span class="breadcrumb-separator">›</span>' : ''}
            <span class="breadcrumb-item ${isActive ? 'active' : ''}" ${clickHandler}>
                ${item.icon ? item.icon + ' ' : ''}${item.text}
            </span>
        `;
    }).join('');

    return `
        <div class="breadcrumb">
            ${breadcrumbItems}
        </div>
    `;
}

/**
 * Crea un modal genérico
 */
function createModal(id, title, content, buttons = []) {
    return `
        <div id="${id}" class="modal-overlay" style="display: none;" onclick="closeModalOnOverlayClick(event, '${id}')">
            <div class="modal" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close" onclick="closeModal('${id}')">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    ${buttons.map(btn => `
                        <button class="btn ${btn.class || 'btn-secondary'}" onclick="${btn.onclick}">
                            ${btn.text}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * Abre un modal
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra un modal
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Cierra modal al hacer click fuera
 */
function closeModalOnOverlayClick(event, modalId) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(modalId);
    }
}

/**
 * Muestra un alert temporal
 */
function showAlert(message, type = 'info', duration = 3000) {
    const alertId = 'alert-' + Date.now();
    const icons = {
        success: '✓',
        warning: '⚠',
        danger: '✕',
        info: 'ℹ'
    };

    const alert = document.createElement('div');
    alert.id = alertId;
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    alert.innerHTML = `
        <span style="font-size: 20px;">${icons[type]}</span>
        <span>${message}</span>
    `;

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, duration);
}

/**
 * Muestra un diálogo de confirmación
 */
function showConfirm(message, onConfirm, onCancel = null) {
    const modalId = 'confirm-modal-' + Date.now();
    const modalHTML = createModal(
        modalId,
        'Confirmar acción',
        `<p>${message}</p>`,
        [
            {
                text: 'Cancelar',
                class: 'btn-secondary',
                onclick: `closeModal('${modalId}'); ${onCancel ? onCancel + '()' : ''}`
            },
            {
                text: 'Confirmar',
                class: 'btn-primary',
                onclick: `closeModal('${modalId}'); ${onConfirm}()`
            }
        ]
    );

    // Insertar modal en el body
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = modalHTML;
    document.body.appendChild(tempDiv.firstElementChild);

    // Abrir modal
    openModal(modalId);

    // Eliminar modal después de cerrar
    setTimeout(() => {
        const modal = document.getElementById(modalId);
        if (modal && modal.style.display === 'none') {
            modal.remove();
        }
    }, 500);
}

/**
 * Renderiza una tabla con datos
 */
function renderTable(columns, data, actions = []) {
    const thead = `
        <thead>
            <tr>
                ${columns.map(col => `
                    <th ${col.sortable ? 'class="sortable"' : ''}>
                        ${col.label}
                        ${col.sortable ? '<span class="sort-icon">↓</span>' : ''}
                    </th>
                `).join('')}
                ${actions.length > 0 ? '<th>Acciones</th>' : ''}
            </tr>
        </thead>
    `;

    const tbody = `
        <tbody>
            ${data.map(row => `
                <tr>
                    ${columns.map(col => `
                        <td>${col.render ? col.render(row[col.key], row) : row[col.key]}</td>
                    `).join('')}
                    ${actions.length > 0 ? `
                        <td>
                            <div class="actions-menu" onclick="showActionsMenu(event, '${row.id}', ${JSON.stringify(actions).replace(/"/g, '&quot;')})">
                                ⋯
                            </div>
                        </td>
                    ` : ''}
                </tr>
            `).join('')}
        </tbody>
    `;

    return `
        <div class="table-wrapper">
            <table>
                ${thead}
                ${tbody}
            </table>
        </div>
    `;
}

/**
 * Renderiza un badge de estado
 */
function renderBadge(text, type = 'info') {
    return `<span class="badge badge-${type}">${text}</span>`;
}

/**
 * Renderiza un badge de prioridad
 */
function renderPriorityBadge(priority) {
    const types = {
        'alta': 'danger',
        'media': 'warning',
        'baja': 'info'
    };
    const labels = {
        'alta': 'Alta',
        'media': 'Media',
        'baja': 'Baja'
    };
    return renderBadge(labels[priority] || priority, types[priority] || 'info');
}

/**
 * Renderiza un badge de estado PAC
 */
function renderEstadoPACBadge(estado) {
    const types = {
        'en_progreso': 'success',
        'pendiente': 'warning',
        'revision': 'info',
        'cerrada': 'danger'
    };
    const labels = {
        'en_progreso': 'En progreso',
        'pendiente': 'Pendiente',
        'revision': 'En revisión',
        'cerrada': 'Cerrada'
    };
    return renderBadge(labels[estado] || estado, types[estado] || 'info');
}

/**
 * Renderiza un badge de estado de queja
 */
function renderEstadoQuejaBadge(estado) {
    const types = {
        'abierta': 'danger',
        'en_progreso': 'warning',
        'resuelta': 'success',
        'cerrada': 'info'
    };
    const labels = {
        'abierta': 'Abierta',
        'en_progreso': 'En progreso',
        'resuelta': 'Resuelta',
        'cerrada': 'Cerrada'
    };
    return renderBadge(labels[estado] || estado, types[estado] || 'info');
}

/**
 * Renderiza barra de progreso
 */
function renderProgressBar(progress) {
    const color = progress >= 75 ? '' : progress >= 50 ? 'warning' : 'danger';
    return `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div class="progress-bar-container" style="width: 80px; height: 8px; background-color: #e5e9f2; border-radius: 4px; overflow: hidden;">
                <div class="progress-bar ${color}" style="height: 100%; background-color: ${progress >= 75 ? '#27ae60' : progress >= 50 ? '#f39c12' : '#e74c3c'}; width: ${progress}%; border-radius: 4px; transition: width 0.3s;"></div>
            </div>
            <span style="font-size: 13px; color: #7f8c9a;">${progress}%</span>
        </div>
    `;
}

/**
 * Formatea una fecha
 */
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

/**
 * Navega a una página
 */
function navigateTo(url) {
    // Si estamos en la raíz y vamos a pages, ajustar
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        window.location.href = url;
    } else if (url === 'index.html') {
        // Si estamos en pages y vamos a index
        window.location.href = '../index.html';
    } else {
        window.location.href = url;
    }
}

/**
 * Valida un formulario
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        const errorElement = field.nextElementSibling;

        if (!field.value.trim()) {
            field.classList.add('error');
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = 'Este campo es requerido';
            }
            isValid = false;
        } else {
            field.classList.remove('error');
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = '';
            }
        }
    });

    return isValid;
}

/**
 * Limpia un formulario
 */
function clearForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
        // Limpiar errores
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    }
}

/**
 * Crea un spinner de carga
 */
function createLoader() {
    return '<div class="loading-spinner"></div>';
}
