// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// FADE ANIMATION
const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// MODAL
function showDetail(text) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modalText').innerText = text;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// UPLOAD FOTO
function uploadPhoto() {
  const input = document.getElementById('upload');
  input.click();

  input.onchange = e => {
    const file = e.target.files[0];
    if (file) {
      document.getElementById('profileImage').src = URL.createObjectURL(file);
    }
  }
}
