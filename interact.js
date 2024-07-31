document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Carregamento de mais fotos na galeria
    const gallery = document.getElementById('gallery');
    const loadMoreButton = document.getElementById('loadMore');

    const morePhotos = [
        'fotos/3.jpg',
        'fotos/18.jpg',
        'fotos/5.jpg',
        'fotos/10.jpg',
        'fotos/24.png',
        'fotos/8.jpg',
        'fotos/15.jpg',
        'fotos/23.png',
        'fotos/16.jpg',
        'fotos/14.jpg',
        'fotos/19.jpg',
        'fotos/7.jpg',
        'fotos/21.jpg',
        'fotos/1.jpg',
        'fotos/22.png'
    ];

    let photoIndex = 0;

    loadMoreButton.addEventListener('click', () => {
        // Adiciona novas fotos à galeria
        for (let i = 0; i < 3 && photoIndex < morePhotos.length; i++, photoIndex++) {
            const photo = document.createElement('div');
            photo.className = 'photo';
            const img = document.createElement('img');
            img.src = morePhotos[photoIndex];
            img.alt = `Descrição da Foto ${photoIndex + 10}`;
            photo.appendChild(img);
            gallery.appendChild(photo);
        }

        // Verifica se há mais fotos para carregar
        if (photoIndex >= morePhotos.length) {
            loadMoreButton.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    
    gallery.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modalImage.src = event.target.src;
            modal.classList.add('active');
        }
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    var name = encodeURIComponent(document.getElementById('name').value);
    var eventType = encodeURIComponent(document.getElementById('eventType').value);

    var phoneNumber = '5531971537872'; 

    var whatsappUrl = `https://wa.me/${phoneNumber}?text=Olá%20JY2!%20Me%20chamo%20${name},%20gostaria%20de%20fazer%20um%20orçamento%20para%20${eventType}.`;

    window.location.href = whatsappUrl;
});

// Atualiza o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Mostra ou oculta o botão "Voltar ao Topo" conforme o scroll
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
