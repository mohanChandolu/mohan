const validateForm = (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || phone === '') {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        formMessage.textContent = 'Invalid email format!';
        formMessage.style.color = 'red';
    } else if (!/^\d{10}$/.test(phone)) {
        formMessage.textContent = 'Phone number must be 10 digits!';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Registration successful!';
        formMessage.style.color = 'green';
        document.getElementById('registrationForm').reset();
    }
};

document.getElementById('registrationForm').addEventListener('submit', validateForm);
