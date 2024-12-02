document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if (username != 'test' && password != '123') {
        alert('Name or Password wrong, try again.');
        return;
    }
    window.location.href = "home.html";
});