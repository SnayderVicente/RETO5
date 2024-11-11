window.addEventListener('load', function() {  
    // Oculta la pantalla de carga  
    const loadingScreen = document.getElementById('loading-screen');  
    loadingScreen.style.display = 'none';  
});  

document.addEventListener("DOMContentLoaded", function() {  
    // Obtener todos los botones de "Ver detalles"  
    const verDetallesBtns = document.querySelectorAll(".btn-ver-detalles");  
    
    verDetallesBtns.forEach(btn => {  
        btn.addEventListener("click", function(event) {  
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace  
            const detallesContenedor = btn.nextElementSibling; // Obtener el contenedor de detalles correspondiente  
            detallesContenedor.style.display = (detallesContenedor.style.display === "block") ? "none" : "block"; // Alternar la visibilidad  
        });  
    });  

    // Manejar el cierre de los detalles  
    const cerrarBtns = document.querySelectorAll(".btn-cerrar");  

    cerrarBtns.forEach(btn => {  
        btn.addEventListener("click", function() {  
            const detallesContenedor = btn.parentElement; // Obtener el contenedor de detalles  
            detallesContenedor.style.display = "none"; // Ocultar el contenedor de detalles  
        });  
    });  
});  