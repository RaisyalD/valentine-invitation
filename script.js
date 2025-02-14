// Handle login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('login-container');
    const invitationContainer = document.getElementById('invitation-container');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        
        if (password === '220922') {
            // Correct password
            loginContainer.style.display = 'none';
            invitationContainer.style.display = 'flex';
        } else {
            // Incorrect password
            alert('Kode salah, coba lagi!');
            document.getElementById('password').value = '';
        }
    });

    // Add click effect for invitation container
    invitationContainer.addEventListener('click', function(e) {
        const heart = document.createElement('div');
        heart.classList.add('heart-click');
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;
        invitationContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    });
});
