// =========================================
//  ROLO TRIP — main.js (UNIFICADO)
// =========================================

// =========================================
//  ROLO TRIP — main.js (FINAL COMPLETO)
// =========================================

const translations = {
    es: {
        navExplore: 'Explorar', navMap: 'Mapa', navPlaces: 'Lugares', navTips: 'Tips',
        featLabel: 'Guía Completa',
        todos: 'Todos',
        cat1: 'Sabores locales', cat2: 'Arte urbano', cat3: 'Naturaleza escondida', cat4: 'Barrios emergentes', cat5: 'Planes nocturnos', cat6: 'Mercados y plazas', cat7: 'Café local',
        backBtn: '← Volver a Lugares',
        theExperience: 'La Experiencia',
        theHistory: 'Un poco de historia',
        usefulInfo: 'Información Útil',
        location: 'Ubicación',
        contact: 'Contacto / Redes'
    },
    en: {
        navExplore: 'Explore', navMap: 'Map', navPlaces: 'Places', navTips: 'Tips',
        featLabel: 'Full Guide',
        todos: 'All',
        cat1: 'Hidden flavors', cat2: 'Street art', cat3: 'Hidden nature', cat4: 'Emerging neighborhoods', cat5: 'Nightlife', cat6: 'Markets & squares', cat7: 'Local coffee',
        backBtn: '← Back to Places',
        theExperience: 'The Experience',
        theHistory: 'A bit of history',
        usefulInfo: 'Useful Info',
        location: 'Location',
        contact: 'Contact / Social Media'
    }
};

const lugaresData = [
    { id: 1, emoji: '🎨', categoria: 'arte', barrio: 'Puente Aranda', lat: 4.6305, lng: -74.1085, nombre_es: 'Distrito Graffiti', nombre_en: 'Graffiti District', desc_es: 'El museo a cielo abierto más grande de Bogotá.', desc_en: 'Bogotá’s largest open-air museum.', detalle_es: 'Muros de más de 10 metros de altura intervenidos por artistas internacionales.', detalle_en: '10-meter-high walls by international artists.', ubicacion: 'Calle 5c con Carrera 53', contacto: '@distritograffitibogota' },
    { id: 2, emoji: '🏗️', categoria: 'arte', barrio: 'San Felipe', lat: 4.6622, lng: -74.0664, nombre_es: 'Barrio San Felipe', nombre_en: 'San Felipe Neighborhood', desc_es: 'El distrito de arte emergente en casas de barrio.', desc_en: 'Emerging art district in local houses.', detalle_es: 'Galerías independientes y talleres de artistas en un barrio tradicional.', detalle_en: 'Independent galleries and artist workshops in a traditional neighborhood.', ubicacion: 'Calle 72 a 80', contacto: '@sanfelipedistritodearte' },
    { id: 3, emoji: '🕌', categoria: 'arte', barrio: 'La Candelaria', lat: 4.5954, lng: -74.0694, nombre_es: 'Barrio Egipto', nombre_en: 'Egipto Neighborhood', desc_es: 'Historia viva y transformación social.', desc_en: 'Living history and social transformation.', detalle_es: 'Tour Breaking Borders donde locales cuentan la historia del barrio.', detalle_en: 'Breaking Borders tour where locals tell the neighborhood story.', ubicacion: 'Carrera 1 Este # 10-02', contacto: '@breaking_borders_egipto' },
    { id: 4, emoji: '🛹', categoria: 'arte', barrio: 'Suba', lat: 4.7431, lng: -74.1082, nombre_es: 'Skatepark Fontanar', nombre_en: 'Fontanar Skatepark', desc_es: 'Cultura urbana y deporte en el norte.', desc_en: 'Urban culture and sports in the north.', detalle_es: 'Uno de los skateparks más grandes con graffitis constantes.', detalle_en: 'One of the largest skateparks with constant graffiti.', ubicacion: 'Calle 145 # 126-87', contacto: 'Acceso libre' },
    { id: 5, emoji: '☕', categoria: 'cafe', barrio: 'Chapinero', lat: 4.6300, lng: -74.0658, nombre_es: 'Varietale', nombre_en: 'Varietale', desc_es: 'Un patio con olor a café recién tostado.', desc_en: 'A patio smelling of freshly roasted coffee.', detalle_es: 'Café de especialidad con métodos de filtrado y jardín interno.', detalle_en: 'Specialty coffee with brewing methods and an indoor garden.', ubicacion: 'Calle 41 # 8-43', contacto: '@varietale' },
    { id: 6, emoji: '📚', categoria: 'cafe', barrio: 'Quinta Camacho', lat: 4.6578, lng: -74.0583, nombre_es: 'Librería Wilborada 1047', nombre_en: 'Wilborada 1047 Bookstore', desc_es: 'Libros y café en una casa de conservación.', desc_en: 'Books and coffee in a conservation house.', detalle_es: 'Tres pisos de literatura y el mejor café de origen.', detalle_en: 'Three floors of literature and the best origin coffee.', ubicacion: 'Calle 71 # 10-47', contacto: '@wilborada1047' },
    { id: 7, emoji: '❤️', categoria: 'cafe', barrio: 'Chapinero Alto', lat: 4.6517, lng: -74.0572, nombre_es: 'Amor Perfecto', nombre_en: 'Amor Perfecto', desc_es: 'Los científicos del café en Bogotá.', desc_en: 'The coffee scientists of Bogotá.', detalle_es: 'Laboratorio pionero en café de competencia mundial.', detalle_en: 'Pioneer lab in world competition coffee.', ubicacion: 'Carrera 4 # 66-46', contacto: 'cafeamorperfecto.com' },
    { id: 8, emoji: '🏠', categoria: 'cafe', barrio: 'Quinta Camacho', lat: 4.6565, lng: -74.0592, nombre_es: 'Casa Café Cultor', nombre_en: 'Casa Café Cultor', desc_es: 'Café con propósito social en un patio oasis.', desc_en: 'Social purpose coffee in a patio oasis.', detalle_es: 'Apoyo directo a caficultores en zonas de posconflicto.', detalle_en: 'Direct support to farmers in post-conflict zones.', ubicacion: 'Calle 70 Bis # 9-44', contacto: '@cafecultorcol' },
    { id: 9, emoji: '🌎', categoria: 'cafe', barrio: 'Usaquén', lat: 4.6985, lng: -74.0305, nombre_es: 'Colo Coffee', nombre_en: 'Colo Coffee', desc_es: 'La ciencia de los suelos colombianos.', desc_en: 'The science of Colombian soils.', detalle_es: 'Muro de tierras que explica el origen del sabor.', detalle_en: 'Soil wall explaining flavor origin.', ubicacion: 'Carrera 6a # 117-26', contacto: 'colocoffee.com' },
    { id: 10, emoji: '✊', categoria: 'cafe', barrio: 'Chapinero Alto', lat: 4.6558, lng: -74.0564, nombre_es: 'Libertario Coffee', nombre_en: 'Libertario Coffee', desc_es: 'Café rebelde y sostenible.', desc_en: 'Rebellious and sustainable coffee.', detalle_es: 'Enfoque en procesos experimentales y comercio justo.', detalle_en: 'Focus on experimental processes and fair trade.', ubicacion: 'Calle 70A # 5-37', contacto: '@libertariocoffee' },
    { id: 11, emoji: '🦋', categoria: 'naturaleza', barrio: 'Rosales', lat: 4.6590, lng: -74.0480, nombre_es: 'Santuario Las Moyas', nombre_en: 'Las Moyas Sanctuary', desc_es: 'Naturaleza pura en los cerros.', desc_en: 'Pure nature in the hills.', detalle_es: 'Formaciones rocosas y senderos entre pinos.', detalle_en: 'Rock formations and trails among pines.', ubicacion: 'Calle 78 con Carrera 2', contacto: '@santuariolasmoyas' },
    { id: 12, emoji: '🏔️', categoria: 'naturaleza', barrio: 'La Calera', lat: 4.5800, lng: -73.7500, nombre_es: 'Páramo de Chingaza', nombre_en: 'Chingaza National Park', desc_es: 'Donde nace el agua de Bogotá.', desc_en: 'Where Bogotá\'s water is born.', detalle_es: 'Lagunas sagradas y frailejones gigantes.', detalle_en: 'Sacred lagoons and giant frailejones.', ubicacion: 'Vía La Calera', contacto: 'parquesnacionales.gov.co' },
    { id: 13, emoji: '🌺', categoria: 'naturaleza', barrio: 'Engativá', lat: 4.6672, lng: -74.1017, nombre_es: 'Jardín Botánico', nombre_en: 'Botanical Garden', desc_es: 'El tesoro natural de la ciudad.', desc_en: 'The city\'s natural treasure.', detalle_es: 'Tropicario con todos los ecosistemas de Colombia.', detalle_en: 'Tropicario with all Colombian ecosystems.', ubicacion: 'Calle 63 # 68-95', contacto: 'jbb.gov.co' },
    { id: 14, emoji: '🦆', categoria: 'naturaleza', barrio: 'Suba', lat: 4.7570, lng: -74.0950, nombre_es: 'Humedal La Conejera', nombre_en: 'La Conejera Wetland', desc_es: 'Pulmón verde y reserva de aves.', desc_en: 'Green lung and bird reserve.', detalle_es: 'Ecosistema conservado ideal para desconexión.', detalle_en: 'Conserved ecosystem ideal for disconnection.', ubicacion: 'Calle 153 # 101-15', contacto: 'humedalesbogota.com' },
    { id: 15, emoji: '💧', categoria: 'naturaleza', barrio: 'Chapinero', lat: 4.6490, lng: -74.0530, nombre_es: 'Quebrada La Vieja', nombre_en: 'La Vieja Stream', desc_es: 'El ascenso favorito de los rolos.', desc_en: 'Locals\' favorite morning hike.', detalle_es: 'Sendero de montaña con vista a toda la sabana.', detalle_en: 'Mountain trail with views of the entire savanna.', ubicacion: 'Calle 71 con Circunvalar', contacto: 'eaab.gov.co' },
    { id: 16, emoji: '🍖', categoria: 'sabores', barrio: '12 de Octubre', lat: 4.6650, lng: -74.0750, nombre_es: 'Piqueteadero Doña Segunda', nombre_en: 'Doña Segunda\'s', desc_es: 'Sabor real de barrio.', desc_en: 'Real neighborhood flavor.', detalle_es: 'La fritanga más famosa del 12 de Octubre.', detalle_en: 'The most famous fritanga in 12 de Octubre.', ubicacion: 'Calle 73 # 51-24', contacto: '@piqueteaderodonasegunda' },
    { id: 17, emoji: '🍲', categoria: 'sabores', barrio: 'La Soledad', lat: 4.6340, lng: -74.0730, nombre_es: 'Doña Elvira', nombre_en: 'Doña Elvira Restaurant', desc_es: 'Comida bogotana auténtica.', desc_en: 'Authentic Bogotano food.', detalle_es: 'Ajiaco legendario en una casa tradicional.', detalle_en: 'Legendary ajiaco in a traditional house.', ubicacion: 'Calle 45 Bis # 20-32', contacto: '@restaurantedonaelvira' },
    { id: 18, emoji: '🔥', categoria: 'sabores', barrio: 'Las Cruces', lat: 4.5900, lng: -74.0790, nombre_es: 'Don Roque', nombre_en: 'Don Roque\'s Grill', desc_es: 'Pollo asado que es religión.', desc_en: 'Charcoal chicken that is religion.', detalle_es: 'Punto de encuentro clásico en el sur.', detalle_en: 'Classic meeting point in the south.', ubicacion: 'Calle 2 # 8-2', contacto: 'Las Cruces' },
    { id: 20, emoji: '🏘️', categoria: 'barrios', barrio: 'Teusaquillo', lat: 4.6300, lng: -74.0780, nombre_es: 'Barrio Teusaquillo', nombre_en: 'Teusaquillo Neighborhood', desc_es: 'Arquitectura inglesa y cultura.', desc_en: 'English architecture and culture.', detalle_es: 'Casas victorianas que hoy son centros culturales.', detalle_en: 'Victorian houses that are now cultural centers.', ubicacion: 'Calle 32 a 45', contacto: 'Teusaquillo' }
];

let currentLang = 'es';
let mainMap;
let activeMarkers = [];

const catColors = {
    sabores: "#E74C3C", arte: "#9B59B6", naturaleza: "#27AE60", barrios: "#E67E22", cafe: "#6F4E37", todos: "#c9a96e"
};

// --- LÓGICA DE TRADUCCIÓN ---
function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });

    // --- LÓGICA DE FILTRO AUTOMÁTICO DESDE URL ---
    const params = new URLSearchParams(window.location.search);
    const catFiltro = params.get('cat'); // Lee "?cat=sabores"

    if (catFiltro && catFiltro !== 'todos') {
        // Filtramos la data antes de renderizar
        const dataFiltrada = lugaresData.filter(l => l.categoria === catFiltro);
        renderPlaces(dataFiltrada, lang);
        
        // Opcional: Marcar el botón de filtro como activo visualmente
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-cat') === catFiltro) btn.classList.add('active');
        });
    } else {
        renderPlaces(lugaresData, lang);
    }
    
    renderDetalle();
}

// --- RENDERIZAR TARJETAS ---
function renderPlaces(data, lang) {
    const grid = document.getElementById('placesGrid');
    if (!grid) return;
    
    grid.innerHTML = "";
    const isInsidePages = window.location.pathname.includes('/pages/');
    const esLugares = window.location.pathname.includes('lugares.html');
    const lista = esLugares ? data : data.slice(0, 6);

    grid.innerHTML = lista.map(lugar => `
        <div class="place-card" data-id="${lugar.id}" style="background:#1a1a1a; border-radius:15px; overflow:hidden; margin-bottom:20px; cursor:pointer;">
            <div style="padding:40px; font-size:3rem; text-align:center; background:#222;">${lugar.emoji}</div>
            <div style="padding:20px;">
                <span style="color:#c9a96e; font-size:0.7rem; text-transform:uppercase;">${lugar.categoria}</span>
                <h3 style="color:white; margin:10px 0;">${lang === 'es' ? lugar.nombre_es : lugar.nombre_en}</h3>
                <p style="color:#aaa; font-size:0.9rem;">📍 ${lugar.barrio}</p>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.place-card').forEach(card => {
        card.onclick = () => {
            const id = card.getAttribute('data-id');
            window.location.href = isInsidePages ? `lugar.html?id=${id}&lang=${currentLang}` : `pages/lugar.html?id=${id}&lang=${currentLang}`;
        };
    });
}

// --- RENDERIZAR DETALLE (lugar.html) ---
function renderDetalle() {
    const container = document.getElementById('placeContent');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const lugar = lugaresData.find(l => l.id === id);

    if (!lugar) return;
    const t = translations[currentLang];

    container.innerHTML = `
        <div style="max-width: 1100px; margin: 0 auto; color: white; padding: 20px; animation: fadeUp 0.6s ease;">
            <div style="text-align: center; margin-bottom: 50px;">
                <span style="font-size: 5rem; display: block; margin-bottom: 10px;">${lugar.emoji}</span>
                <h1 style="font-family: 'Playfair Display', serif; font-size: 3.8rem; margin: 0;">${currentLang === 'es' ? lugar.nombre_es : lugar.nombre_en}</h1>
                <p style="color: #c9a96e; letter-spacing: 0.3em; text-transform: uppercase; font-size: 0.9rem;">${lugar.barrio} • ${lugar.categoria}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 60px; align-items: start;">
                <div>
                    <div style="margin-bottom: 40px;">
                        <h3 style="color: #c9a96e; border-bottom: 1px solid rgba(201,169,110,0.2); padding-bottom: 10px; font-family: 'Playfair Display'; font-size: 1.6rem;">${t.theExperience}</h3>
                        <p style="font-size: 1.2rem; line-height: 1.8; color: #efefef;">${currentLang === 'es' ? lugar.detalle_es : lugar.detalle_en}</p>
                    </div>
                    <div>
                        <h3 style="color: #c9a96e; border-bottom: 1px solid rgba(201,169,110,0.2); padding-bottom: 10px; font-family: 'Playfair Display'; font-size: 1.6rem;">${t.theHistory}</h3>
                        <p style="color: #aaa; line-height: 1.7;">${currentLang === 'es' ? lugar.desc_es : lugar.desc_en}</p>
                    </div>
                </div>

                <div style="background: #161616; padding: 30px; border-radius: 20px; border: 1px solid #2a2a2a; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    <h4 style="color: #c9a96e; margin-top: 0; margin-bottom: 25px; font-size: 1.2rem; border-left: 3px solid #c9a96e; padding-left: 15px;">${t.usefulInfo}</h4>
                    
                    <div style="margin-bottom: 20px;">
                        <p style="color: #c9a96e; font-size: 0.7rem; text-transform: uppercase; margin-bottom: 5px;">📍 ${t.location}</p>
                        <p style="margin: 0; font-size: 1rem;">${lugar.ubicacion}</p>
                    </div>

                    <div style="margin-bottom: 30px;">
                        <p style="color: #c9a96e; font-size: 0.7rem; text-transform: uppercase; margin-bottom: 5px;">📱 ${t.contact}</p>
                        <p style="margin: 0; font-size: 1rem;">${lugar.contacto}</p>
                    </div>

                    <div id="miniMap" style="width: 100%; height: 250px; border-radius: 15px; margin-bottom: 30px; border: 1px solid #333; overflow: hidden;"></div>

                    <a href="lugares.html" style="display: block; text-align: center; color: #c9a96e; text-decoration: none; border: 1px solid #c9a96e; padding: 12px; border-radius: 8px; font-size: 0.8rem; font-weight: bold; transition: 0.3s; background: rgba(201,169,110,0.05);">
                        ${t.backBtn}
                    </a>
                </div>
            </div>
        </div>`;

    // ACTIVACIÓN DEL MAPA
    if (typeof google !== 'undefined' && lugar.lat) {
        // Usamos el estilo oscuro que ya teníamos para que no brille tanto
        const mini = new google.maps.Map(document.getElementById('miniMap'), {
            center: { lat: lugar.lat, lng: lugar.lng },
            zoom: 15,
            disableDefaultUI: true,
            styles: [
                { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
                { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
                { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#383838" }] },
                { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }
            ]
        });
        
        new google.maps.Marker({ 
            position: { lat: lugar.lat, lng: lugar.lng }, 
            map: mini,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: catColors[lugar.categoria] || "#c9a96e",
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: "#FFFFFF"
            }
        });
    }
}

// --- FILTROS ---
function setupCategories() {
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-cat');
            const filtered = (cat === 'todos') ? lugaresData : lugaresData.filter(l => l.categoria === cat);
            renderPlaces(filtered, currentLang);
            if (mainMap) renderMapMarkers(filtered);
        };
    });
}

function setupCarousel() {
    const carousel = document.getElementById('categoryCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!carousel || !prevBtn || !nextBtn) return;

    const scrollAmount = 320; // Ancho de la tarjeta + gap

    nextBtn.onclick = () => {
        carousel.scrollLeft += scrollAmount;
    };

    prevBtn.onclick = () => {
        carousel.scrollLeft -= scrollAmount;
    };

    // Ocultar scrollbar visualmente (para Chrome/Safari)
    carousel.style.overflowX = 'auto';
    carousel.style.setProperty('scrollbar-width', 'none');
}

// No olvides llamarla en el DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ... tus otras funciones
    setupCarousel();

    // --- LÓGICA UNIFICADA DE CARRUSEL (index.html) ---
function setupCategoriesCarousel() {
    const track = document.getElementById('categoryCarousel');
    const btnPrev = document.getElementById('prevBtn');
    const btnNext = document.getElementById('nextBtn');
    const catCards = document.querySelectorAll('.categories-section .cat-card');

    if (!track || !btnPrev || !btnNext) return;

    // 1. Lógica de Redirección (Clic en Tarjeta)
    catCards.forEach(card => {
        card.style.cursor = "pointer"; // Aseguramos visualmente que es clicable
        
        card.addEventListener('click', function() {
            const cat = this.getAttribute('data-cat');
            
            // Usamos la variable global currentLang. 
            // Si por alguna razón no existe, usamos 'es' por defecto.
            const lang = typeof currentLang !== 'undefined' ? currentLang : 'es';
            
            // CONSTRUCCIÓN DE LA RUTA:
            // Desde index.html entramos a la carpeta pages/
            const urlDestino = `pages/lugares.html?cat=${cat}&lang=${lang}`;
            
            console.log("Navegando a:", urlDestino);
            window.location.href = urlDestino;
        });
    });

    // 2. Lógica de Navegación (Flechas)
    // Usamos el ancho visible del contenedor para que el salto sea proporcional
    btnNext.addEventListener('click', () => {
        track.scrollLeft += track.offsetWidth; 
    });

    btnPrev.addEventListener('click', () => {
        track.scrollLeft -= track.offsetWidth;
    });

    // 3. Estética: Ocultar flechas si no hay más contenido
    track.addEventListener('scroll', () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        
        // Control flecha izquierda
        btnPrev.style.opacity = track.scrollLeft <= 10 ? "0.3" : "1";
        btnPrev.style.pointerEvents = track.scrollLeft <= 10 ? "none" : "auto";
        
        // Control flecha derecha
        btnNext.style.opacity = track.scrollLeft >= (maxScroll - 10) ? "0.3" : "1";
        btnNext.style.pointerEvents = track.scrollLeft >= (maxScroll - 10) ? "none" : "auto";
    });
}

// --- ACTUALIZA TU INICIO ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplicar traducciones y contenido automático (esto debe ir primero)
    applyTranslations(currentLang);
    renderDetalle();

    // 2. Iniciar Mapa o Carrusel dependiendo de la página
    if (document.getElementById('map')) initMap();
    if (document.getElementById('categoryCarousel')) setupCategoriesCarousel(); // <--- LLAMADA AQUÍ

    // 3. Componentes UI
    setupLangToggle();
    setupCategories(); // Esta es para lugares.html (filtros normales)
    setupSearch();
    setupNavScroll();
    setupHamburger();
});
});

// --- MAPA ---
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    mainMap = new google.maps.Map(mapElement, {
        zoom: 13, center: { lat: 4.6482, lng: -74.0817 }, disableDefaultUI: false
    });
    renderMapMarkers(lugaresData);
}

function renderMapMarkers(data) {
    activeMarkers.forEach(m => m.setMap(null));
    activeMarkers = [];
    const infoWindow = new google.maps.InfoWindow();

    data.forEach(lugar => {
        const color = catColors[lugar.categoria] || "#c9a96e";
        const marker = new google.maps.Marker({
            position: { lat: lugar.lat, lng: lugar.lng },
            map: mainMap,
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10, fillColor: color, fillOpacity: 1, strokeWeight: 2, strokeColor: "#FFFFFF" }
        });

        marker.addListener("click", () => {
            const isInsidePages = window.location.pathname.includes('/pages/');
            const detailPath = isInsidePages ? `lugar.html?id=${lugar.id}&lang=${currentLang}` : `pages/lugar.html?id=${lugar.id}&lang=${currentLang}`;

            const content = `
                <div style="color:#1a1a1a; padding:10px; font-family: sans-serif; max-width: 200px;">
                    <h3 style="margin: 0 0 5px 0;">${currentLang === 'es' ? lugar.nombre_es : lugar.nombre_en}</h3>
                    <p style="font-size: 0.85rem; color: #555; margin-bottom: 12px;">${currentLang === 'es' ? lugar.desc_es : lugar.desc_en}</p>
                    <button type="button" class="btn-ir-detalle" data-url="${detailPath}" style="background: #c9a96e; color: white; border: none; padding: 10px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold;">
                        ${currentLang === 'es' ? 'Ver Detalle' : 'View Details'}
                    </button>
                </div>`;
            
            infoWindow.setContent(content);
            infoWindow.open(mainMap, marker);

            google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
                const btn = document.querySelector('.btn-ir-detalle');
                if (btn) btn.addEventListener('click', function() { window.location.href = this.getAttribute('data-url'); });
            });
        });
        activeMarkers.push(marker);
    });
}

// --- INICIO ---
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    setupCategories();
    if (document.getElementById('map')) initMap();
});

window.initMap = initMap;