const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const something = document.querySelector(button.dataset.modalTarget)
    openModal(something)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const something = button.closest('.popup')
    closeModal(something)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
// door
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const door = document.getElementById('door');
    const closeBtn = document.getElementById('close-btn');
    const submitBtn = document.getElementById('submit-btn');
    const passwordInput = document.getElementById('password');
    const mainContent = document.getElementById('main-content');

    // Define the correct password
    const correctPassword = 'toloka'; // Set your desired password here

    // Function to check the password
    function checkPassword() {
        if (passwordInput.value === correctPassword) {
            door.style.display = 'none'; // Hide the door
            mainContent.style.display = 'block'; // Show the main content
        } else {
            alert('Incorrect password');
        }
    }

    // Event listener for the submit button
    submitBtn.addEventListener('click', checkPassword);

    // Event listener for the enter key in the password field
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // Event listener for the close button
    closeBtn.addEventListener('click', () => {
        door.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Initially display the door
    door.style.display = 'flex';
});

function openLink(url) {
  window.open(url,'_blank');
}