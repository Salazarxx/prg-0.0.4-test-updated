// Variables globales
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const optionCards = document.querySelectorAll('.option-card');

// Función para mostrar el modal
function showModal() {
    modal.classList.add('show');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

// Función para ocultar el modal
function hideModal() {
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Event listeners para las tarjetas de opciones
optionCards.forEach(card => {
    card.addEventListener('click', () => {
        showModal();
    });
});

// Event listener para cerrar el modal con la X
closeModal.addEventListener('click', hideModal);

// Event listener para cerrar el modal haciendo click fuera de él
// Usando un approach más directo y confiable
let isClickInsideModal = false;

// Detectar cuando se hace click dentro del modal
document.querySelector('.modal-content').addEventListener('mousedown', () => {
    isClickInsideModal = true;
});

document.querySelector('.modal-content').addEventListener('mouseup', () => {
    isClickInsideModal = false;
});

// Solo cerrar si el click no fue dentro del modal
modal.addEventListener('click', (e) => {
    if (!isClickInsideModal && e.target === modal) {
        hideModal();
    }
    isClickInsideModal = false; // Reset flag
});

// Event listener para cerrar el modal con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        hideModal();
    }
});

// Event listener para el formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const eid = document.getElementById('eid').value;
    const password = document.getElementById('password').value;
    const domain = document.getElementById('domain').value;
    
    // Validaciones básicas
    if (!eid.trim()) {
        alert('Por favor, ingresa tu EID');
        document.getElementById('eid').focus();
        return;
    }
    
    if (!password.trim()) {
        alert('Por favor, ingresa tu contraseña');
        document.getElementById('password').focus();
        return;
    }
    
    // Simular proceso de login
    simulateLogin(eid, password, domain);
});

// Función para simular el proceso de login
function simulateLogin(eid, password, domain) {
    // Mostrar indicador de carga
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Iniciando sesión...';
    loginBtn.disabled = true;
    
    // Simular delay de autenticación
    setTimeout(() => {
        // Aquí normalmente harías una petición al servidor
        // Para este ejemplo, simulamos una respuesta exitosa
        
        console.log('Intento de login:', {
            eid: eid,
            domain: domain,
            timestamp: new Date().toISOString()
        });
        
        // Simular respuesta exitosa (puedes cambiar esto por lógica real)
        if (eid.toLowerCase() === 'admin' && password === '123456') {
            alert('¡Login exitoso! Bienvenido ' + eid);
            hideModal();
            
        } else {
            alert('Credenciales incorrectas. Intenta con:\nEID: admin\nPassword: 123456');
        }
        
        // Restaurar botón
        loginBtn.textContent = originalText;
        loginBtn.disabled = false;
    }, 1500);
}

// Función para resetear el formulario
function resetForm() {
    document.getElementById('eid').value = '';
    document.getElementById('password').value = '';
    document.getElementById('domain').value = 'NAMERICA1';
}

// Función para manejar efectos de hover en las tarjetas
optionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Función para mejorar la accesibilidad del modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Aplicar trap focus al modal cuando se muestra
/*modal.addEventListener('transitionend', () => {
    if (modal.classList.contains('show')) {
        trapFocus(modal);
        document.getElementById('eid').focus();
    }
});*/

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sistema de login inicializado');
    
    // Agregar animaciones de entrada escalonadas a las tarjetas
    optionCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});

// Agregar estilos de animación para las tarjetas
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .option-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);