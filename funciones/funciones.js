// Código index.html - función bienvenida - Muestra un mensaje de bienvenida al usuario cuando carga la página
function bienvenida() {
    alert("Bienvenidos a La Soci. Explora nuestra galería y eventos.");
}

// Verifica si la página actual es index.html
if (window.location.pathname.endsWith("index.html")) {
    // Llama a la función de bienvenida cuando la página esté completamente cargada
    window.addEventListener("load", bienvenida);
}

// Código galeria.html - Muestra una alerta con la información de la imagen seleccionada
function activarGaleria() {
    const imagenes = document.querySelectorAll(".galeria img"); // Selecciona todas las imágenes en la galería
    imagenes.forEach(imagen => {
        imagen.onclick = function() { // Añade un evento al hacer clic en cada imagen
            alert("Has hecho clic en la imagen: " + imagen.alt); // Muestra un mensaje con el texto alternativo de la imagen
        };
    });
}

// Ejecuta la función cuando el contenido de la página esté cargado
document.addEventListener("DOMContentLoaded", activarGaleria);

// Código nosotros.html
function toggleDescripcion() { // Función para mostrar/ocultar la descripción
    const descripcion = document.getElementById("descripcion");
    descripcion.style.display = descripcion.style.display === "none" ? "block" : "none";
}

// Asigna la función al botón directamente al cargar la página
	window.onload = function() {
    document.getElementById("toggleBtn").onclick = toggleDescripcion;
};

// Función toggleDescripcion - Alterna entre mostrar y ocultar la sección de descripción
function toggleDescripcion() {
    const descripcion = document.getElementById("descripcion");
    descripcion.style.display = descripcion.style.display === "none" ? "block" : "none";
}

// Código eventos.html - Mensaje de confirmación al hacer clic en inscribirse
function confirmarInscripcion() {
    if (confirm("¿Deseas inscribirte en este evento?")) {
        alert("¡Gracias por inscribirte! Recibirás más información pronto.");
        window.location.href = "contacto.html"; // Redirigir al formulario de contacto
    }
}

// Asignar la función a todos los botones con la clase "inscribirseBtn"
const botones = document.querySelectorAll(".inscribirseBtn");
botones.forEach(boton => {
    boton.onclick = confirmarInscripcion;
});

// Código contacto.html - Función validarFormulario comprueba si todos los campos del formulario están llenos
function validarFormulario() {
    // Obtener valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Verificar si algún campo está vacío
    if (!nombre || !correo || !mensaje) {
        alert("¡Completa todos los campos!");
        return false; // Detiene el envío del formulario
    }

    alert("Formulario enviado correctamente."); // Mensaje de éxito
    return true; // Permite el envío del formulario
}
