// Agregar desplazamiento suave
document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function toggleLanguage() {
    const isEnglish = document.getElementById('content-en').classList.contains('hidden');

    // Cambiar el texto del botón
    document.querySelector('.language-toggle').textContent = isEnglish ? 'ES' : 'EN';

    // Alternar el contenido de idioma en todas las secciones
    document.querySelectorAll('#content-es, #content-en').forEach(content => {
        content.classList.toggle('hidden');
    });
}



document.addEventListener("DOMContentLoaded", function() {
  const articles = document.querySelectorAll("#research .article-entry");
  const articlesPerPage = 10;
  let currentPage = 0;

  function renderPage() {
    articles.forEach((article, index) => {
      article.style.display = (index >= currentPage * articlesPerPage && index < (currentPage + 1) * articlesPerPage) ? "block" : "none";
    });

    document.getElementById("prevPage").style.display = currentPage === 0 ? "none" : "inline-block";
    document.getElementById("nextPage").style.display = (currentPage + 1) * articlesPerPage >= articles.length ? "none" : "inline-block";
  }

  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  });

  document.getElementById("nextPage").addEventListener("click", () => {
    if ((currentPage + 1) * articlesPerPage < articles.length) {
      currentPage++;
      renderPage();
    }
  });

  renderPage();
});
document.addEventListener("DOMContentLoaded", function() {
  const articles = document.querySelectorAll("#research .article-entry");
  const articlesPerPage = 5;
  let currentPage = 0;

  // Actualizar el contador de artículos
  function updateArticleCount() {
    const totalArticles = articles.length;
    document.getElementById("article-count").textContent = `${totalArticles} articles found`;
  }

  // Renderizar los artículos en la página actual
  function renderPage() {
    articles.forEach((article, index) => {
      article.style.display = (index >= currentPage * articlesPerPage && index < (currentPage + 1) * articlesPerPage) ? "block" : "none";
    });

    document.getElementById("prevPage").style.display = currentPage === 0 ? "none" : "inline-block";
    document.getElementById("nextPage").style.display = (currentPage + 1) * articlesPerPage >= articles.length ? "none" : "inline-block";
  }

  // Manejo de clic en botones de paginación
  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  });

  document.getElementById("nextPage").addEventListener("click", () => {
    if ((currentPage + 1) * articlesPerPage < articles.length) {
      currentPage++;
      renderPage();
    }
  });

  updateArticleCount(); // Actualiza el contador de artículos al cargar
  renderPage();
});
// Selección de elementos de navegación
document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Obtener el ID de la sección a mostrar
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
      section.classList.add('hidden-section');
    });

    // Mostrar la sección seleccionada
    targetSection.classList.remove('hidden-section');

    // Desplazamiento suave a la sección seleccionada
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Inicializar para mostrar solo la primera sección
document.addEventListener("DOMContentLoaded", function() {
  // Ocultar todas las secciones menos la primera (About)
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden-section');
  });
  document.querySelector('#about').classList.remove('hidden-section'); // Mostrar "About" al inicio
});
function openModal(videoUrl) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("modalVideo");

    iframe.src = videoUrl;
    modal.style.display = "flex";
}

// Cerrar el modal y limpiar el src del iframe
function closeModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("modalVideo");

    iframe.src = "";
    modal.style.display = "none";
}

// Event listener para cerrar el modal cuando se hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
};
