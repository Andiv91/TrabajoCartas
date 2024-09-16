function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validar usuario y contraseña
    if (username === 'admin' && password === '1234') {
        localStorage.setItem('username', username);  // Almacenar el nombre del usuario en localStorage
        window.location.href = 'index.html';  // Redirecciona a la página de cartas
    } else {
        errorMessage.textContent = 'Usuario y/o contraseña incorrecta';
    }
}