document.addEventListener('DOMContentLoaded', () => {

    /*===== ANIMASI KETIK (TYPING ANIMATION) =====*/
    new Typed('.typing-text', {
        strings: ['Sistem Informasi'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    /*===== ACTIVE LINK DI NAVBAR SAAT SCROLL =====*/
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);


    /*===== FUNGSI MODAL =====*/
    const cvModal = document.getElementById('cv-modal');
    
    // Tombol pembuka modal
    const downloadCvBtn = document.getElementById('download-cv-btn');
    const downloadResumeBtn = document.getElementById('download-resume-btn');

    // Tombol penutup modal
    const cvModalClose = document.getElementById('cv-modal-close');

    // Fungsi untuk membuka modal
    const openModal = (modal) => modal.classList.add('show-modal');
    const closeModal = (modal) => modal.classList.remove('show-modal');

    // Event listeners untuk membuka modal
    downloadCvBtn.addEventListener('click', () => openModal(cvModal));
    downloadResumeBtn.addEventListener('click', () => openModal(cvModal));

    // Event listeners untuk menutup modal
    cvModalClose.addEventListener('click', () => closeModal(cvModal));

    // Menutup modal saat mengklik area di luar modal
    window.addEventListener('click', (e) => {
        if (e.target === cvModal) closeModal(cvModal);
    });

    /*===== FUNGSI TABS DI KONTAK =====*/
    const tabButtons = document.querySelectorAll('.contact__tab-button');
    const tabContents = document.querySelectorAll('.contact__content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas 'active' dari semua tombol dan konten
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Tambah kelas 'active' ke tombol yang diklik dan konten yang sesuai
            button.classList.add('active');
            const targetTab = document.getElementById(button.dataset.tab);
            targetTab.classList.add('active');
        });
    });

    /*===== SHOW FOOTER WHEN SCROLLED TO END =====*/
    window.addEventListener('scroll', () => {
        const footer = document.querySelector('.footer');
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });
});
