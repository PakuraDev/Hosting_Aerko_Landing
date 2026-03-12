document.addEventListener("DOMContentLoaded", () => {
    console.log("%c AERKO_ /// INITIALIZED ", "background: #CCFF00; color: #1A1A1A; font-weight: bold; font-size: 14px; padding: 4px;");

    // --- LÓGICA DEL MENÚ MÓVIL ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const overlay = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('menuBackdrop');

    if (menuBtn && overlay) {
        function toggleMenu() {
            // Activa o desactiva la clase que hace visible el menú
            overlay.classList.toggle('is-active');
            
            // Cambia el texto del botón dependiendo del estado
            if (overlay.classList.contains('is-active')) {
                menuBtn.textContent = 'CERRAR';
            } else {
                menuBtn.textContent = 'MENU';
            }
        }

        // Abrir/Cerrar al tocar el botón verde
        menuBtn.addEventListener('click', toggleMenu);
        
        // Cerrar al tocar la zona oscura (muy importante en UX)
        if (backdrop) backdrop.addEventListener('click', toggleMenu);
    }

    // --- LÓGICA DEL BENTO GRID (Mantenemos la que ya teníamos) ---
    const bentoItems = document.querySelectorAll('.bento-item');
    if (bentoItems.length > 0 && window.innerWidth <= 1024) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Lógica para puntos del slider si se añade
                }
            });
        }, {
            root: document.querySelector('.bento-grid'),
            threshold: 0.5 
        });
        bentoItems.forEach(item => observer.observe(item));
    }
    
    // --- LÓGICA DEL EXPLORADOR (TABS) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.explorer__content');

    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Evitamos que salte el scroll si el href es "#"

                // 1. Quitamos la clase active de todos los botones y contenidos
                tabBtns.forEach(b => b.classList.remove('active-tab'));
                tabContents.forEach(c => c.classList.remove('active'));

                // 2. Le damos la clase active al botón pulsado
                btn.classList.add('active-tab');

                // 3. Buscamos el contenido que toca y lo activamos
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});