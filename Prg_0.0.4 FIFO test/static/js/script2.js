// Funciones para cada opción del menú
function capturarEntrada() {
    // Mostrar mensaje de confirmación
    mostrarMensaje('Capturar Entrada', 'Función para registrar entrada de piezas');
    
    // Aquí puedes agregar la lógica específica para capturar entrada
    console.log('Función: Capturar Entrada');
}

function capturarSalidas() {
    // Mostrar mensaje de confirmación
    mostrarMensaje('Capturar Salidas', 'Función para registrar salida de piezas');
    
    // Aquí puedes agregar la lógica específica para capturar salidas
    console.log('Función: Capturar Salidas');
}

function capturarPrioridades() {
    // Mostrar mensaje de confirmación
    mostrarMensaje('Capturar Prioridades', 'Función para establecer prioridades de mantenimiento');
    
    // Aquí puedes agregar la lógica específica para capturar prioridades
    console.log('Función: Capturar Prioridades');
}

function consultarPendientes() {
    // Mostrar mensaje de confirmación
    mostrarMensaje('Consultar Pendientes', 'Función para ver listado de piezas pendientes');
    
    // Aquí puedes agregar la lógica específica para consultar pendientes
    console.log('Función: Consultar Pendientes');
}

function consultarTerminadas() {
    // Mostrar mensaje de confirmación
    mostrarMensaje('Consultar Terminadas', 'Función para ver listado de piezas terminadas');
    
    // Aquí puedes agregar la lógica específica para consultar terminadas
    console.log('Función: Consultar Terminadas');
}

// Función para mostrar mensajes
function mostrarMensaje(titulo, mensaje) {
    // Crear el modal si no existe
    if (!document.getElementById('modal')) {
        crearModal();
    }
    
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalMensaje = document.getElementById('modal-mensaje');
    
    modalTitulo.textContent = titulo;
    modalMensaje.textContent = mensaje;
    
    modal.style.display = 'flex';
    
    // Agregar animación de entrada
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Función para crear el modal
function crearModal() {
    const modalHTML = `
        <div id="modal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 id="modal-titulo"></h3>
                    <span class="close" onclick="cerrarModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <p id="modal-mensaje"></p>
                </div>
                <div class="modal-footer">
                    <button onclick="cerrarModal()" class="btn-ok">OK</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Agregar estilos del modal
    const modalStyles = `
        <style>
            .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal.show {
                opacity: 1;
            }
            
            .modal-content {
                background-color: white;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                transform: scale(0.7);
                transition: transform 0.3s ease;
            }
            
            .modal.show .modal-content {
                transform: scale(1);
            }
            
            .modal-header {
                padding: 20px 20px 10px;
                border-bottom: 1px solid #e0e0e0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-header h3 {
                margin: 0;
                color: #4a90e2;
                font-size: 20px;
            }
            
            .close {
                font-size: 28px;
                font-weight: bold;
                color: #aaa;
                cursor: pointer;
                transition: color 0.3s ease;
            }
            
            .close:hover {
                color: #333;
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .modal-body p {
                margin: 0;
                color: #666;
                line-height: 1.6;
            }
            
            .modal-footer {
                padding: 10px 20px 20px;
                text-align: right;
            }
            
            .btn-ok {
                background-color: #4a90e2;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                transition: background-color 0.3s ease;
            }
            
            .btn-ok:hover {
                background-color: #357abd;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', modalStyles);
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Cerrar modal al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (modal && event.target === modal) {
        cerrarModal();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});

// Función para inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistema de Registro de Entradas y Salidas - Mantenimiento cargado');
    
    // Agregar efectos de hover adicionales
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'white';
        });
    });
});

// Función utilitaria para logging
function log(mensaje) {
    console.log(`[${new Date().toLocaleTimeString()}] ${mensaje}`);
}

// Ejemplo de función para manejar errores
function manejarError(error) {
    console.error('Error en la aplicación:', error);
    mostrarMensaje('Error', 'Ha ocurrido un error. Por favor, intente nuevamente.');
}