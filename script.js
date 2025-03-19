
//FORMULARIO
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Limpiar mensajes de error
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.textContent = '');

    // Validación
    let hasError = false;

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const visita = document.getElementById('visita').value.trim();

    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
        hasError = true;
    }
    if (apellidos === '') {
        document.getElementById('errorApellidos').textContent = 'Los apellidos son obligatorios.';
        hasError = true;
    }
    if (telefono === '') {
        document.getElementById('errorTelefono').textContent = 'El teléfono es obligatorio.';
        hasError = true;
    }
    if (correo === '') {
        document.getElementById('errorCorreo').textContent = 'El correo electrónico es obligatorio.';
        hasError = true;
    } else {
        // Validar formato de correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(correo)) {
            document.getElementById('errorCorreo').textContent = 'El correo electrónico no es válido.';
            hasError = true;
        }
    }
    if (edad === '' || edad < 1) {
        document.getElementById('errorEdad').textContent = 'La edad es obligatoria y debe ser mayor que 0.';
        hasError = true;
    }
    if (visita === '') {
        document.getElementById('errorVisita').textContent = 'Por favor, indique si le gustaría que le visitáramos.';
        hasError = true;
    }

    // Si no hay errores, puedes enviar el formulario o realizar otra acción
    if (!hasError) {
        // Aquí puedes enviar el formulario o realizar otra acción
        alert('Formulario enviado con éxito!');
        // Puedes descomentar la siguiente línea para enviar el formulario
        this.submit();
    }
});